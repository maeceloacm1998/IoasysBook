import 'react-native-gesture-handler';
import React from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';

import {useAuth} from '../Context/Auth/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import {NavigationContainer} from '@react-navigation/native';
import {theme} from '../styles/theme';

const Routes: React.FC = () => {
  const {authorization, loading} = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={theme.color.author} size={30} />
      </View>
    );
  } else {
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
        {authorization === '' ? <AuthRoutes /> : <AppRoutes />}
      </NavigationContainer>
    );
  }
};

export default Routes;
