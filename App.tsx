import 'react-native-gesture-handler';
import React from 'react';

import {SignInProvider} from './src/presentation/Context';

import Stack from './src/presentation/routes';

export default function App() {
  // Para utilizar o reactotron
  if (__DEV__) {
    import('./ReactotronConfig');
  }

  return (
    <SignInProvider>
      <Stack />
    </SignInProvider>
  );
}
