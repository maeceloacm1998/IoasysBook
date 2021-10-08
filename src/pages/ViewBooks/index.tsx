import React from 'react';
import {View, Image} from 'react-native';

import {Text} from 'react-native-paper';

import {RoundedButton} from '../../components/RoundedButton';

import book from '../../assets/book.png';

import {theme} from '../../styles/theme';

import {
  Container,
  ContainerExitButton,
  ContainerAllDataBooks,
  ImageBook,
} from './styles';
import {BoxShadow} from '../../components/BoxShadow';

export function ViewBooks() {
  return (
    <Container>
      <ContainerExitButton>
        <RoundedButton
          handleSubmit={() => {
            console.log('Voltar');
          }}
          name="arrow-left"
          size={18}
          color={theme.color.black}
        />
      </ContainerExitButton>

      <ContainerAllDataBooks>
        <BoxShadow
          color={theme.color.shadow_black_light}
          width={295}
          height={411}>
          <ImageBook source={book} />
        </BoxShadow>
      </ContainerAllDataBooks>
    </Container>
  );
}
