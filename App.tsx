import 'react-native-gesture-handler';
import React from 'react';

import {SignInProvider} from './src/Context';

import Stack from './src/routes';

export default function App() {
  if (__DEV__) {
    import('./ReactotronConfig');
  }

  return (
    <SignInProvider>
      <Stack />
    </SignInProvider>
  );
}
