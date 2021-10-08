import React, {useState} from 'react';

import {AxiosError} from 'axios';
import {useForm, Controller} from 'react-hook-form';

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

interface UserTypes {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const {control, handleSubmit} = useForm();

  const [errorText, setErrorText] = useState<string | null>(null);

  async function onSubmit(data: UserTypes) {
    setErrorText('');
    console.log(data);

    try {
      const get = await api.post('auth/sign-in', {
        email: data.email,
        password: data.password,
      });
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

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input label="Email" onChangeText={onChange} value={value} />
        )}
        defaultValue=""
        name="email"
        rules={{required: true, minLength: 6}}
      />

      <Controller
        control={control}
        render={({field: {onChange, value}}) => (
          <Input
            label="Senha"
            onChangeText={onChange}
            value={value}
            password
            showEnterButton
            handleSubmit={handleSubmit(onSubmit)}
          />
        )}
        defaultValue=""
        name="password"
        rules={{required: true, minLength: 6}}
      />

      {errorText !== null && <TagError>{errorText}</TagError>}
    </Container>
  );
};

export default SignIn;
