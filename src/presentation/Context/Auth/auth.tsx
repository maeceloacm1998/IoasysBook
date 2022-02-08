import React, {createContext, useContext, useEffect, useState} from 'react';
import {AsyncStorage} from 'react-native';

import {api} from '../../services/api';
import {AxiosError, AxiosResponse} from 'axios';

interface AuthContextData {
  login(credentials: SignInCredentials): Promise<StatusReturn>;
  logout(): void;
  error: string | null;
  loading: boolean;
  user: User;
  authorization: string | null;
  reflashToken: string | null;
}

interface StatusReturn {
  status: number | undefined;
  body: any;
  message: string;
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

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
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

  /**
   * Function used to receive user login data
   * @param users {email and password}
   * @returns return status code, body and message error or success.
   */
  const login = async (users: SignInCredentials): Promise<StatusReturn> => {
    setErrorText(null);

    try {
      setLoading(true);
      const {data, headers}: AxiosResponse = await api.post('auth/sign-in', {
        email: users.email,
        password: users.password,
      });

      const reflashToken = getReflashToken(headers);
      const authorization: string = headers.authorization;
      const objectData: AuthState = {
        authorization,
        reflashToken,
        user: data,
      };

      await AsyncStorage.setItem('@IOASYS:user', JSON.stringify(objectData));
      setData(objectData);

      return {
        status: 201,
        body: objectData,
        message: 'Success!',
      };
    } catch (error) {
      const err = error as AxiosError;
      return hadleError(err);
    } finally {
      setLoading(false);
    }
  };

  function logout() {
    setData({} as AuthState);

    AsyncStorage.clear();
  }

  function getReflashToken(token: any) {
    const getValueToken = Object.entries(token);

    const tokenValue = getValueToken.filter(item => {
      return item[0] === 'refresh-token';
    });

    return tokenValue[0][1];
  }

  function hadleError(error: AxiosError): StatusReturn {
    let err: ErrorType = {} as ErrorType;

    if (error.response?.status) err = error.response.data;

    setErrorText(err.errors.message);
    return {
      message: err.errors.message,
      status: error.response?.status,
      body: {},
    };
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
