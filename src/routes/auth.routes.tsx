import React, {useContext} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const stack = createStackNavigator();

import {theme} from '../styles/theme';

import SignIn from '../pages/SignIn';

const StackRoutes: React.FC = () => {
  return (
    <stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.color.white,
        },
      }}>
      <stack.Screen name="SignIn" component={SignIn} />
    </stack.Navigator>
  );
};

export default StackRoutes;
