import React from 'react';

import {AuthProvider} from './Auth/auth';

export const SignInProvider: React.FC = ({children}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default {SignInProvider};
