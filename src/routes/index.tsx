import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {useAuth} from '../Context/Auth/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import {NavigationContainer} from '@react-navigation/native';

const Routes: React.FC = () => {
  const {authorization} = useAuth();

  return (
    <NavigationContainer>
      {authorization ? (
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
      ) : (
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      )}
      {authorization === null ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
