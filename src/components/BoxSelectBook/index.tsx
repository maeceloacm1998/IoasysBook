import React from 'react';

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

export function BoxSelectBook() {
  return (
    <ContainerBox>
      <PricipalContainer>
        <ImageBook source={book} />
        <ContainerAllData>
          <TitleBook>Crossing the Chasm</TitleBook>
          <AuthorBook>Geoffrey A. Moore</AuthorBook>
          <SubscriptionBook>150 páginas</SubscriptionBook>
          <SubscriptionBook>Editora Loyola</SubscriptionBook>
          <SubscriptionBook>Publicado em 2020</SubscriptionBook>
        </ContainerAllData>
      </PricipalContainer>
    </ContainerBox>
  );
}
