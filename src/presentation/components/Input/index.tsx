import React from 'react';
import {TextInputProps} from 'react-native';

import SubmitButton from '../SubmitButton';

import {theme} from '../../styles/theme';

import {Container, InputFlat} from './styles';

interface InputProps extends TextInputProps {
  showEnterButton?: boolean;
  label: string;
  theme?: any;
  loading?: boolean;
  handleSubmit?(): void;
}

export function Input({
  label,
  showEnterButton,
  handleSubmit,
  loading,
  ...rest
}: InputProps) {
  return (
    <Container flexDirection={showEnterButton ? true : false}>
      <InputFlat
        label={label}
        mode="flat"
        autoCorrect={false}
        style={{width: showEnterButton ? '70%' : '100%'}}
        theme={{
          colors: {
            primary: theme.color.white,
            text: theme.color.white,
            placeholder: theme.color.white,
          },
        }}
        {...rest}
      />
      {showEnterButton && (
        <SubmitButton handleSubmit={handleSubmit} loading={loading} />
      )}
    </Container>
  );
}
