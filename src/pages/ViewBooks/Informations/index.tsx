import React from 'react';

import {
  Container,
  ContainerKeys,
  Title,
  TextKeys,
  ContainerValue,
  TextValue,
} from './styles';

const Informations: React.FC = () => {
  return (
    <Container>
      <ContainerKeys>
        <Title>INFORMAÇÕES</Title>
        <TextKeys>Páginas</TextKeys>
        <TextKeys>Editora</TextKeys>
        <TextKeys>Publicação</TextKeys>
        <TextKeys>Idioma</TextKeys>
      </ContainerKeys>

      <ContainerValue>
        <TextValue>304 páginas</TextValue>
        <TextValue>Editora Loyola</TextValue>
        <TextValue>2020</TextValue>
        <TextValue>Inglês</TextValue>
      </ContainerValue>
    </Container>
  );
};

export default Informations;
