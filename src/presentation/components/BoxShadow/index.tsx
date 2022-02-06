import React from 'react';

import {Shadow} from 'react-native-neomorph-shadows';

interface BoxShadowProps {
  children: React.ReactNode;
  color: string;
  width: number;
  height: number;
}

export function BoxShadow({children, color, height, width}: BoxShadowProps) {
  return (
    <Shadow
      useArt
      style={{
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowColor: color,
        shadowRadius: 11,
        borderRadius: 15,
        backgroundColor: color,
        width: width,
        height: height,
      }}>
      {children}
    </Shadow>
  );
}
