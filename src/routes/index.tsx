import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

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

      <AuthRoutes />
    </NavigationContainer>
  );
};

export default Routes;
