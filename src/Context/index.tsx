import React from 'react';

import {AuthProvider} from './Auth/auth';
import {BooksProvider} from './Books/books';

export const SignInProvider: React.FC = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export const ManagerBooksProvider: React.FC = ({children}) => {
  return <BooksProvider>{children}</BooksProvider>;
};

export default {SignInProvider, ManagerBooksProvider};
