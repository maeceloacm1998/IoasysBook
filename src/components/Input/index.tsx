import React from 'react';

import SubmitButton, {SubmitButtonProps} from '../SubmitButton';

import {theme} from '../../styles/theme';

import {Container, InputFlat} from './styles';

interface InputProps extends SubmitButtonProps {
  password?: boolean;
  showEnterButton?: boolean;
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  loading?: boolean;
}

export function Input({
  label,
  password,
  showEnterButton,
  onChangeText,
  value,
  loading,
  ...rest
}: InputProps) {
  return (
    <Container flexDirection={showEnterButton ? true : false}>
      <InputFlat
        label={label}
        mode="flat"
        autoCorrect={false}
        secureTextEntry={password ? true : false}
        style={{width: showEnterButton ? '70%' : '100%'}}
        onChangeText={text => {
          onChangeText(text);
        }}
        value={value}
        theme={{
          colors: {
            primary: theme.color.white,
            text: theme.color.white,
            placeholder: theme.color.white,
          },
        }}
      />
      {showEnterButton && <SubmitButton {...rest} loading={loading} />}
    </Container>
  );
}
