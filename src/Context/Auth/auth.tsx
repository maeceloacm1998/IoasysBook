import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {api} from '../../services/api';
import {AxiosError, AxiosResponse} from 'axios';

interface AuthContextData {
  login(credentials: SignInCredencials): Promise<void>;
  error: string | null;
  loading: boolean;
  user: User;
  authorization: string | null;
}

export interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthState {
  user: User;
  Authorization: string | null;
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
  Authorization: null,
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

  const login = async (users: SignInCredencials) => {
    setErrorText(null);

    try {
      setLoading(true);
      const response: AxiosResponse = await api.post('auth/sign-in', {
        email: users.email,
        password: users.password,
      });

      const {birthdate, email, gender, id, name}: User = response.data;

      const authorization: string = `Bearer ${response.headers.authorization}`;
      setData({
        Authorization: authorization,
        user: {
          email: email,
          birthdate: birthdate,
          gender: gender,
          id: id,
          name: name,
        },
      });
    } catch (error) {
      const err = error as AxiosError;
      hadleError(err);
    } finally {
      setLoading(false);
    }
  };

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
        user: data.user,
        authorization: data.Authorization,
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
