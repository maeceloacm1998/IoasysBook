import React from 'react';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import ListBooks from '../pages/ListBooks';
import {ViewBooks} from '../pages/ViewBooks';

import {ManagerBooksProvider} from '../Context';

import {theme} from '../styles/theme';

const stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ManagerBooksProvider>
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
        <stack.Screen name="ViewBooks" component={ViewBooks} />
      </stack.Navigator>
    </ManagerBooksProvider>
  );
};

export default App;
