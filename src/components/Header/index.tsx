import React from 'react';
import {Image} from 'react-native';

import headerWhite from '../../assets/headerWhite.png';
import headerBlack from '../../assets/headerBlack.png';

import Icon from 'react-native-vector-icons/Feather';

import {Container, ClicleButton} from './styles';

import {theme} from '../../styles/theme';

interface HeaderProps {
  colorTheme?: 'black' | 'white';
  showButtonExit?: boolean;
  handleSubmit?(): void;
}

export function Header({
  colorTheme,
  handleSubmit,
  showButtonExit,
}: HeaderProps) {
  return (
    <Container>
      <Image source={colorTheme === 'white' ? headerWhite : headerBlack} />

      {showButtonExit && (
        <ClicleButton
          activeOpacity={0.7}
          onPress={() => {
            if (handleSubmit !== undefined) {
              handleSubmit();
            }
          }}>
          <Icon name="log-out" size={18} color={theme.color.black} />
        </ClicleButton>
      )}
    </Container>
  );
}
