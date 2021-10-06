import React from 'react';
import {ImageBackground, Text, View} from 'react-native';

import {Header} from '../../components/Header';
import {Input} from '../../components/Input';

import {Container} from './styles';
import fonts from '../../styles/fonts';

import background from '../../assets/background_login.png';

const SignIn: React.FC = () => {
  return (
    <Container source={background}>
      <Header colorTheme="white" />
      <Input />
    </Container>
  );
};

export default SignIn;
