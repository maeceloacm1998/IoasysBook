import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';
import {BoxSelectBook} from '../../components/BoxSelectBook';

import background from '../../assets/background_listbooks.png';

import {useAuth} from '../../Context/Auth/auth';
import {api} from '../../services/api';

import {
  Container,
  ContainerSearchInput,
  ContainerFlatListBooks,
} from './styles';

function ListBooks() {
  const {authorization, logout} = useAuth();
  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    const responseBooks = await api.get(
      'books?page=1&amount=25&category=biographies',
      {
        headers: {
          Authorization: `Bearer ${authorization}`,
        },
      }
    );

    console.log(responseBooks);
  }

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
