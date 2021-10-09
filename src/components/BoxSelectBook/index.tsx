import React, {useState} from 'react';
import {View} from 'react-native';

import book from '../../assets/book.png';

import {
  ContainerBox,
  PricipalContainer,
  ImageBook,
  ContainerAllData,
  TitleBook,
  AuthorBook,
  SubscriptionBook,
} from './styles';

interface BoxSelectBookProps {
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

export function BoxSelectBook({data}: BoxSelectBookProps) {
  return (
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
  );
}
