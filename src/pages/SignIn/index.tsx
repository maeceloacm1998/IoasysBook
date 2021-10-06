import React from 'react';
import {Text, View} from 'react-native';
import fonts from '../../styles/fonts';

import {Container} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Text style={{fontFamily: fonts.Heebo_regular, fontSize: 30}}>
        MARCELO Antonio
      </Text>
    </Container>
  );
};

export default SignIn;
