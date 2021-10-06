import React from 'react';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import FontAwesom from 'react-native-vector-icons/FontAwesome';

import {Container, ContainerHeader} from './styles';

import background from '../../assets/background_login.png';

const SignIn: React.FC = () => {
  return (
    <Container source={background}>
      <ContainerHeader>
        <Header colorTheme="white" />
      </ContainerHeader>

      <Input label="Email" />

      <Input
        label="Senha"
        showEnterButton
        handleSubmit={() => {
          console.log('Função de Logar');
        }}
      />

      <FontAwesom name="home" size={25} />
    </Container>
  );
};

export default SignIn;
