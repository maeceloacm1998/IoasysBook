import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import {theme} from '../styles/theme';

const stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        cardStyle: {
          backgroundColor: theme.color.white,
        },
        headerShown: false,
      }}>
      {/* <stack.Screen name="ListAccounts" component={ListAccounts} /> */}
    </stack.Navigator>
  );
};

export default App;
