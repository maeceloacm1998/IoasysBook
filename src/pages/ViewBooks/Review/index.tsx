import React from 'react';

import identifier from '../../../assets/identifier.png';

import {
  Container,
  Title,
  ContainerReviwn,
  ContainerIdentifier,
  Identifier,
  Review,
} from './styles';

export function ReviewComponent() {
  return (
    <Container>
      <Title>RESENHA DA EDITORA</Title>

      <ContainerReviwn>
        <Review>
          <ContainerIdentifier>
            <Identifier source={identifier} />
          </ContainerIdentifier>
          The subject of “design thinking” is the rage at business schools,
          throughout corporations, and increasingly in the popular press—due in
          large part to the work of IDEO, a leading design firm, and its
          celebrated CEO, Tim Brown, who uses this book to show how the
          techniques and strategies of design belong at every level of business.
        </Review>
      </ContainerReviwn>
    </Container>
  );
}
