import React from 'react';
import {ScrollView} from 'react-native';

import {RoundedButton} from '../../components/RoundedButton';
import {BoxShadow} from '../../components/BoxShadow';
import Informations from './Informations';
import {Reviwn} from './Reviwn';

import book from '../../assets/book.png';

import {theme} from '../../styles/theme';

import {
  Container,
  ContainerExitButton,
  ContainerAllDataBooks,
  ImageBook,
  TitleBook,
  AuthorBook,
} from './styles';

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

      <ScrollView showsVerticalScrollIndicator={false}>
        <ContainerAllDataBooks>
          <BoxShadow
            color={theme.color.shadow_black_light}
            width={295}
            height={411}>
            <ImageBook source={book} />
          </BoxShadow>

          <TitleBook>Change By Design Second line exa...</TitleBook>
          <AuthorBook>Tim Brown, Julie Zhuo, Fried Maximiilian</AuthorBook>

          <Informations />

          <Reviwn />
        </ContainerAllDataBooks>
      </ScrollView>
    </Container>
  );
}
