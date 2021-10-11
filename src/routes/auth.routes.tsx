import React from 'react';

import SignIn from '../pages/SignIn';

import {theme} from '../styles/theme';

import {createStackNavigator} from '@react-navigation/stack';
const stack = createStackNavigator();

const StackRoutes: React.FC = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: theme.color.white,
        },
      }}>
      <stack.Screen name="SignIn" component={SignIn} />
    </stack.Navigator>
  );
};

export default StackRoutes;
