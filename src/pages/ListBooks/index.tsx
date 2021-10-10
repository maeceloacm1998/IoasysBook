import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, StatusBar} from 'react-native';

import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';
import {BoxSelectBook} from '../../components/BoxSelectBook';

import background from '../../assets/background_listbooks.png';

import {useAuth} from '../../Context/Auth/auth';
import {useBooks} from '../../Context/Books/books';

import {
  Container,
  ContainerSearchInput,
  ContainerFlatListBooks,
  ContainerAlignCenter,
} from './styles';
import {theme} from '../../styles/theme';

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
  const {logout} = useAuth();
  const {getAllBooks, books} = useBooks();

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    setLoading(true);

    await getAllBooks();

    setLoading(false);
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
        data={books}
        renderItem={({item}) => (
          <ContainerFlatListBooks>
            <BoxSelectBook data={item} />
          </ContainerFlatListBooks>
        )}
        initialNumToRender={3}
        onEndReached={loadBooks}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={
          <ContainerAlignCenter>
            <ActivityIndicator color={theme.color.author} size={20} />
          </ContainerAlignCenter>
        }
        ListEmptyComponent={
          <ContainerAlignCenter>
            <ActivityIndicator color={theme.color.author} size={20} />
          </ContainerAlignCenter>
        }
      />
    </Container>
  );
}

export default ListBooks;
