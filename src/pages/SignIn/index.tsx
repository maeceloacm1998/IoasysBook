import React, {useState} from 'react';

import {AxiosError} from 'axios';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import background from '../../assets/background_login.png';

import {api} from '../../services/api';

import {Container, ContainerHeader, TagError} from './styles';

interface ErrorType {
  errors: MessageErrorType;
}

interface MessageErrorType {
  message: string;
}

const SignIn: React.FC = () => {
  const [errorText, setErrorText] = useState<string | null>(null);

  async function handleSubmit() {
    try {
      const get = await api.post('auth/sign-in', {
        email: 'desafio@ioas.com.br',
        password: '12341234',
      });

      console.log('o que retorna no get', get);

      // const post = await api.get('books?page=1&amount=25&category=biographies', {
      //   headers: {
      //     Authorization: `Bearer ${get.headers.authorization}`,
      //   },
      // });
    } catch (error) {
      const err = error as AxiosError;

      hadleError(err);
    }
  }

  function hadleError(error: AxiosError): void {
    if (error.response?.status) {
      const err: ErrorType = error.response.data;

      setErrorText(err.errors.message);
    }
  }

  return (
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
      {errorText !== null && <TagError>{errorText}</TagError>}
    </Container>
  );
};

export default SignIn;
