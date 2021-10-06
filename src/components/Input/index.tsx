import React from 'react';

import {theme} from '../../styles/theme';

import {
  Container,
  InputFlat,
  EnterButton,
  ContainerEnterButton,
  TextEnterButton,
} from './styles';

interface InputProps {
  password?: boolean;
  showEnterButton?: boolean;
  handleSubmit?(): void;
  label: string;
}

export function Input({
  label,
  handleSubmit,
  password,
  showEnterButton,
}: InputProps) {
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
      {showEnterButton && (
        <EnterButton
          activeOpacity={0.7}
          onPress={() => {
            if (handleSubmit !== undefined) {
              handleSubmit();
            }
          }}>
          <ContainerEnterButton>
            <TextEnterButton> Entrar </TextEnterButton>
          </ContainerEnterButton>
        </EnterButton>
      )}
    </Container>
  );
}
