import React from 'react';
import {TouchableOpacityProps} from 'react-native';

import {ContainerEnterButton, EnterButton, TextEnterButton} from './styles';

export interface SubmitButtonProps extends TouchableOpacityProps {
  handleSubmit?(): void;
  borderButton?: boolean;
}

function SubmitButton({handleSubmit, borderButton}: SubmitButtonProps) {
  return (
    <EnterButton
      activeOpacity={0.7}
      onPress={() => {
        if (handleSubmit !== undefined) {
          handleSubmit();
        }
      }}>
      <ContainerEnterButton border={borderButton ? true : false}>
        <TextEnterButton> Entrar </TextEnterButton>
      </ContainerEnterButton>
    </EnterButton>
  );
}

export default SubmitButton;
