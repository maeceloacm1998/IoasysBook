import React from 'react';

import SubmitButton, {SubmitButtonProps} from '../SubmitButton';

import {theme} from '../../styles/theme';

import {Container, InputFlat} from './styles';

interface InputProps extends SubmitButtonProps {
  password?: boolean;
  showEnterButton?: boolean;
  label: string;
}

export function Input({label, password, showEnterButton, ...rest}: InputProps) {
  return (
    <Container flexDirection={showEnterButton ? true : false}>
      <InputFlat
        label={label}
        mode="flat"
        autoCorrect={false}
        secureTextEntry={password ? true : false}
        style={{width: showEnterButton ? '70%' : '100%'}}
        theme={{
          colors: {
            primary: theme.color.white,
            text: theme.color.white,
            placeholder: theme.color.white,
          },
        }}
      />
      {showEnterButton && <SubmitButton {...rest} />}
    </Container>
  );
}
