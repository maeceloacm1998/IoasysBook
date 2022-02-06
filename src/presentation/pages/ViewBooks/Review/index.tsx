import React from 'react';

import {BooksData} from '../../../components/BoxSelectBook';

import identifier from '../../../assets/identifier.png';

import {
  Container,
  Title,
  ContainerReviwn,
  ContainerIdentifier,
  Identifier,
  Review,
} from './styles';

interface ReviewComponentProps {
  data: BooksData;
}

export function ReviewComponent({data}: ReviewComponentProps) {
  return (
    <Container>
      <Title>RESENHA DA EDITORA</Title>

      <ContainerReviwn>
        <Review>
          <ContainerIdentifier>
            <Identifier source={identifier} />
          </ContainerIdentifier>
          {data.description}
        </Review>
      </ContainerReviwn>
    </Container>
  );
}
