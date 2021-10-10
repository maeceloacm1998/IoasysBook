import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

import {
  ContainerBox,
  PricipalContainer,
  ImageBook,
  ContainerAllData,
  TitleBook,
  AuthorBook,
  SubscriptionBook,
} from './styles';

export interface BoxSelectBookProps {
  data: BooksData;
}

export interface BooksData {
  id: string;
  title: string;
  description: string;
  authors: string[];
  pageCount: string;
  category: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  publisher: string;
  published: string;
}

function BoxSelectBook({data}: BoxSelectBookProps) {
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('ViewBooks', data);
      }}>
      <ContainerBox>
        <PricipalContainer>
          <ImageBook source={{uri: data.imageUrl}} />
          <ContainerAllData>
            <TitleBook>{data.title}</TitleBook>
            <AuthorBook>{data.authors + `,`}</AuthorBook>
            <SubscriptionBook>{data.pageCount} páginas</SubscriptionBook>
            <SubscriptionBook>Editora {data.publisher}</SubscriptionBook>
            <SubscriptionBook>{data.published}</SubscriptionBook>
          </ContainerAllData>
        </PricipalContainer>
      </ContainerBox>
    </TouchableOpacity>
  );
}

export const BoxSelectBookComponent = memo(
  BoxSelectBook,
  (prevProps, nextProps) => {
    return Object.is(prevProps.data, nextProps.data);
  }
);
