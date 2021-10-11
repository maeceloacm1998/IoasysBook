import React from 'react';
import {ScrollView} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {RoundedButton} from '../../components/RoundedButton';
import {BoxShadow} from '../../components/BoxShadow';
import {BooksData} from '../../components/BoxSelectBook';
import Informations from './Informations';
import {ReviewComponent} from './Review';

import {theme} from '../../styles/theme';

import {
  Container,
  ContainerExitButton,
  ContainerAllDataBooks,
  ImageBook,
  TitleBook,
  AuthorBook,
} from './styles';

export function ViewBooks({route}: any) {
  const data: BooksData = route.params;

  const navigation: any = useNavigation();

  return (
    <Container>
      <ContainerExitButton>
        <RoundedButton
          handleSubmit={() => {
            navigation.navigate('ListBooks');
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
            <ImageBook source={{uri: data.imageUrl}} />
          </BoxShadow>

          <TitleBook>{data.title}</TitleBook>
          <AuthorBook>{data.authors + `,`}</AuthorBook>

          <Informations data={data} />

          <ReviewComponent data={data} />
        </ContainerAllDataBooks>
      </ScrollView>
    </Container>
  );
}
