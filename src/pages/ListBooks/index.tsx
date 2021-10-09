import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';
import {BoxSelectBook} from '../../components/BoxSelectBook';

import background from '../../assets/background_listbooks.png';

import {
  Container,
  ContainerSearchInput,
  ContainerFlatListBooks,
} from './styles';
import {useAuth} from '../../Context/Auth/auth';

function ListBooks() {
  const {authorization, logout} = useAuth();

  return (
    <Container source={background}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <Header
        showButtonExit
        handleSubmit={() => {
          logout();
        }}
      />

      <ContainerSearchInput>
        <SearchInput label="Procure um livro" />
      </ContainerSearchInput>

      <ContainerFlatListBooks>
        <BoxSelectBook />
      </ContainerFlatListBooks>
    </Container>
  );
}

export default ListBooks;
