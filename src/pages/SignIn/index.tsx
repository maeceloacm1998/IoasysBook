import React from 'react';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import {Container, ContainerHeader} from './styles';

import background from '../../assets/background_login.png';
import {api, config} from '../../services/api';

async function handleSubmit() {
  const get = await api.post('auth/sign-in', {
    email: 'desafio@ioasys.com.br',
    password: '12341234',
  });

  const dale = Object.values(get.headers);
  console.log(dale);
  const post = await api.get('books?page=1&amount=25&category=biographies', {
    headers: {
      Authorization: `Bearer ${get.headers.authorization}`,
    },
  });

  console.log('post', post);
}

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
        handleSubmit();
      }}
    />
  </Container>
);

export default SignIn;
