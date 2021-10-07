import React from 'react';
import {Image} from 'react-native';

import headerWhite from '../../assets/headerWhite.png';
import headerBlack from '../../assets/headerBlack.png';

import {RoundedButton} from '../RoundedButton';

import {Container} from './styles';

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
        <RoundedButton
          name="log-out"
          size={18}
          color={theme.color.black}
          handleSubmit={() => {
            if (handleSubmit !== undefined) {
              handleSubmit();
            }
          }}
        />
      )}
    </Container>
  );
}
