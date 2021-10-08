import React from 'react';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import {Container, ContainerHeader} from './styles';

import background from '../../assets/background_login.png';

const SignIn: React.FC = () => (
  <Container source={background}>
    <ContainerHeader>
      <Header colorTheme="white" />
    </ContainerHeader>

    <Input label="Email" />

    <Input
      label="Senha"
      password
      showEnterButton
      handleSubmit={() => {
        console.log('Função de Logar');
      }}
    />
  </Container>
);

export default SignIn;
