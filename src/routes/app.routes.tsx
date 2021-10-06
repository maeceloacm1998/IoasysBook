import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import ListBooks from '../pages/ListBooks';

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
      }}
      initialRouteName="ListBooks">
      <stack.Screen name="ListBooks" component={ListBooks} />
    </stack.Navigator>
  );
};

export default App;
