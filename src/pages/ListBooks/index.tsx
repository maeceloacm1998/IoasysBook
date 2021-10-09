import React, {useEffect, useState} from 'react';
import {FlatList, StatusBar} from 'react-native';

import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';
import {BoxSelectBook} from '../../components/BoxSelectBook';

import background from '../../assets/background_listbooks.png';

import {api} from '../../services/api';
import {AxiosResponse} from 'axios';
import {useAuth} from '../../Context/Auth/auth';

import {
  Container,
  ContainerSearchInput,
  ContainerFlatListBooks,
} from './styles';

interface ListBooksProps {
  data: BooksData;
}

interface BooksData {
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

function ListBooks() {
  const {authorization, logout} = useAuth();

  const [itemBooks, setItemBooks] = useState<BooksData[]>([]);
  const [totalBooks, setTotalBooks] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    if (itemBooks.length < totalBooks) {
      const responseBooks: AxiosResponse = await api.get(
        `books?page=${page}&amount=10&category=biographies`,
        {
          headers: {
            Authorization: `Bearer ${authorization}`,
          },
        }
      );

      const {data, totalItems} = responseBooks.data;

      setItemBooks(oldValue => [...oldValue, ...data]);

      setPage(oldValue => oldValue + 1);
      setTotalBooks(totalItems);
    }
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

      <FlatList
        data={itemBooks}
        renderItem={({item}) => (
          <ContainerFlatListBooks>
            <BoxSelectBook data={item} />
          </ContainerFlatListBooks>
        )}
        onEndReached={loadBooks}
        onEndReachedThreshold={0.3}
      />
    </Container>
  );
}

export default ListBooks;
