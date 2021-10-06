import React from 'react';
import {StatusBar} from 'react-native';

import {Header} from '../../components/Header';

import background from '../../assets/background_listbooks.png';

import {Container} from './styles';

function ListBooks() {
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
          console.log('Botao de sair');
        }}
      />
    </Container>
  );
}

export default ListBooks;
