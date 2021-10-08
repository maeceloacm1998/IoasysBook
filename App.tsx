import 'react-native-gesture-handler';
import React from 'react';

import Stack from './src/routes';

export default function App() {
  if (__DEV__) {
    import('./ReactotronConfig');
  }

  return <Stack />;
}
