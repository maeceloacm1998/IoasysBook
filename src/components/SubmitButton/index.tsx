import React from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {theme} from '../../styles/theme';

import {ContainerEnterButton, EnterButton, TextEnterButton} from './styles';

export interface SubmitButtonProps extends TouchableOpacityProps {
  handleSubmit?(): void;
  borderButton?: boolean;
  loading?: boolean;
}

function SubmitButton({
  handleSubmit,
  borderButton,
  loading,
}: SubmitButtonProps) {
  return (
    <EnterButton
      activeOpacity={0.7}
      onPress={() => {
        if (handleSubmit !== undefined) {
          handleSubmit();
        }
      }}>
      <ContainerEnterButton border={borderButton ? true : false}>
        {loading ? (
          <ActivityIndicator color={theme.color.author} size={20} />
        ) : (
          <TextEnterButton> Entrar </TextEnterButton>
        )}
      </ContainerEnterButton>
    </EnterButton>
  );
}

export default SubmitButton;
