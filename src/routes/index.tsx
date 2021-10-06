import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import {NavigationContainer} from '@react-navigation/native';

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;
