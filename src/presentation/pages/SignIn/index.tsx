import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

import {useForm, Controller} from 'react-hook-form';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import background from '../../assets/background_login.png';

import {useAuth, SignInCredencials} from '../../Context/Auth/auth';

import {Container, ContainerHeader, TagError} from './styles';

const SignIn: React.FC = () => {
  const {control, handleSubmit} = useForm();
  const {error, login, loading} = useAuth();

  async function onSubmit(data: SignInCredencials) {
    login(data);
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
              loading={loading}
            />
          )}
          defaultValue=""
          name="password"
          rules={{required: true, minLength: 6}}
        />

        {error !== null && <TagError>{error}</TagError>}
      </Container>
    </TouchableWithoutFeedback>
  );
};

export default SignIn;
