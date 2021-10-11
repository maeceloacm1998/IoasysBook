import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import {Header} from '../../components/Header';
import {SearchInput} from '../../components/SearchInput';
import {BoxSelectBookComponent} from '../../components/BoxSelectBook';

import background from '../../assets/background_listbooks.png';
import not_found from '../../assets/not_found.png';

import {useAuth} from '../../Context/Auth/auth';
import {useBooks} from '../../Context/Books/books';

import {
  Container,
  ContainerSearchInput,
  ContainerFlatListBooks,
  ContainerAlignCenter,
} from './styles';
import {theme} from '../../styles/theme';

function ListBooks() {
  const {logout} = useAuth();
  const {getAllBooks, books, filterBooks, notFound, loading} = useBooks();

  useEffect(() => {
    function renderBooks() {
      let isMounted = true;

      if (isMounted) {
        loadBooks();
      }

      return () => {
        isMounted = false;
      };
    }

    renderBooks();
  }, []);

  async function loadBooks() {
    if (books.length >= 8 || books.length === 0) {
      await getAllBooks();
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container source={background}>
        <Header
          showButtonExit
          handleSubmit={() => {
            logout();
          }}
        />

        <ContainerSearchInput>
          <SearchInput label="Procure um livro" />
        </ContainerSearchInput>

        {loading && books.length === 0 ? (
          <ContainerAlignCenter>
            <ActivityIndicator color={theme.color.author} size={20} />
          </ContainerAlignCenter>
        ) : notFound ? (
          <ContainerAlignCenter>
            <Image source={not_found} />
          </ContainerAlignCenter>
        ) : (
          <FlatList
            data={filterBooks?.length === 0 ? books : filterBooks}
            renderItem={({item}) => (
              <ContainerFlatListBooks>
                <BoxSelectBookComponent data={item} />
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
          />
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default ListBooks;
