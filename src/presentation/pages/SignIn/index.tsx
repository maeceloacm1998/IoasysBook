import React, {useState} from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

import {useForm} from 'react-hook-form';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import background from '../../assets/background_login.png';

import {
  useAuth,
  SignInCredentials as SignInCredentials,
} from '../../Context/Auth/auth';

import {Container, ContainerHeader, TagError} from './styles';

const SignIn: React.FC = () => {
  const {control, handleSubmit} = useForm();
  const {error, login, loading} = useAuth();

  async function onSubmit(data: SignInCredentials) {
    await login(data);
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Container source={background}>
        <ContainerHeader>
          <Header colorTheme="white" />
        </ContainerHeader>

        <Input label="Email" control={control} name="email" />

        <Input
          control={control}
          label="Senha"
          secureTextEntry={true}
          showEnterButton
          handleSubmit={handleSubmit(onSubmit)}
          loading={loading}
          name="password"
        />

        {error !== null && <TagError>{error}</TagError>}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
