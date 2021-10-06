import React from 'react';
import {Image} from 'react-native';

import headerWhite from '../../assets/headerWhite.png';
import headerBlack from '../../assets/headerBlack.png';

import {Container} from './styles';

interface HeaderProps {
  colorTheme?: 'black' | 'white';
}

export function Header({colorTheme}: HeaderProps) {
  return (
    <Container>
      <Image source={colorTheme === 'white' ? headerWhite : headerBlack} />
    </Container>
  );
}
