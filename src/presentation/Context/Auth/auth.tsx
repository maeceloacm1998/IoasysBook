import React, {createContext, useContext, useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';

import {api} from '../../services/api';
import {AxiosError, AxiosResponse} from 'axios';

interface AuthContextData {
  login(credentials: SignInCredentials): Promise<void>;
  logout(): void;
  error: string | null;
  loading: boolean;
  user: User;
  authorization: string | null;
  reflashToken: string | null;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthState {
  user: User;
  authorization: string;
  reflashToken: any;
}

interface User {
  id: string;
  name: string;
  email: string;
  birthdate: string;
  gender: string;
}

interface ErrorType {
  errors: MessageErrorType;
}

interface MessageErrorType {
  message: string;
}

const DEFAULT_VALUE: AuthState = {
  authorization: '',
  reflashToken: '',
  user: {
    email: '',
    birthdate: '',
    gender: '',
    id: '',
    name: '',
  },
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>(DEFAULT_VALUE);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {
    async function regeneratedToken(userData: AuthState) {
      setLoading(true);

      try {
        const responseToken: AxiosResponse = await api.post(
          'auth/refresh-token',
          {
            refreshToken: userData.reflashToken,
          },
          {
            headers: {
              Authorization: `Bearer ${userData.authorization}`,
              'refresh-token': userData.reflashToken,
            },
          }
        );

        const reflashToken = getReflashToken(responseToken.headers);

        const authorization: string = responseToken.headers.authorization;

        const objectData: AuthState = {
          authorization: authorization,
          reflashToken: reflashToken,
          user: userData.user,
        };

        await AsyncStorage.setItem('@IOASYS:user', JSON.stringify(objectData));

        setData(objectData);
      } catch (error) {
        const err = error as AxiosError;

        if (err.response?.status === 401) {
          logout();
        }
      }

      setLoading(false);
    }

    async function persistLogin() {
      const response = await AsyncStorage.getItem('@IOASYS:user');

      if (response !== null) {
        regeneratedToken(JSON.parse(response));
      }
    }

    persistLogin();
  }, []);

  const login = async (users: SignInCredentials) => {
    setErrorText(null);

    try {
      setLoading(true);
      const response: AxiosResponse = await api.post('auth/sign-in', {
        email: users.email,
        password: users.password,
      });

      const reflashToken = getReflashToken(response.headers);

      const {birthdate, email, gender, id, name}: User = response.data;

      const authorization: string = response.headers.authorization;

      const objectData: AuthState = {
        authorization: authorization,
        reflashToken: reflashToken,
        user: {
          email: email,
          birthdate: birthdate,
          gender: gender,
          id: id,
          name: name,
        },
      };

      await AsyncStorage.setItem('@IOASYS:user', JSON.stringify(objectData));

      setData(objectData);
    } catch (error) {
      const err = error as AxiosError;
      hadleError(err);
    } finally {
      setLoading(false);
    }
  };

  function logout() {
    setData(DEFAULT_VALUE);

    AsyncStorage.clear();
  }

  function getReflashToken(token: any) {
    const getValueToken = Object.entries(token);

    const tokenValue = getValueToken.filter(item => {
      return item[0] === 'refresh-token';
    });

    return tokenValue[0][1];
  }

  function hadleError(error: AxiosError): void {
    if (error.response?.status) {
      const err: ErrorType = error.response.data;

      setErrorText(err.errors.message);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        loading,
        logout,
        user: data.user,
        authorization: data.authorization,
        reflashToken: data.reflashToken,
        login,
        error: errorText,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
