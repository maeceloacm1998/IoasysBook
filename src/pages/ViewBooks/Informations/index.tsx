import React from 'react';

import {BooksData} from '../../../components/BoxSelectBook';

import {
  Container,
  ContainerKeys,
  Title,
  TextKeys,
  ContainerValue,
  TextValue,
} from './styles';

interface IntormationsProps {
  data: BooksData;
}

const Informations = ({data}: IntormationsProps) => {
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
        <TextValue>{data.pageCount} páginas</TextValue>
        <TextValue>Editora {data.publisher}</TextValue>
        <TextValue>{data.published}</TextValue>
        <TextValue>{data.language}</TextValue>
      </ContainerValue>
    </Container>
  );
};

export default Informations;
