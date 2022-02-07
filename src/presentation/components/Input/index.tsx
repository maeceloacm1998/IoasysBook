import React from 'react';
import {TextInputProps} from 'react-native';

import SubmitButton from '../SubmitButton';
import {Controller, Control} from 'react-hook-form';

import {theme} from '../../styles/theme';

import {Container, InputFlat} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  control: Control;
  showEnterButton?: boolean;
  label: string;
  theme?: any;
  loading?: boolean;
  handleSubmit?(): void;
}

export function Input({
  control,
  name,
  label,
  showEnterButton,
  handleSubmit,
  loading,
  ...rest
}: InputProps) {
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <Container flexDirection={showEnterButton ? true : false}>
          <InputFlat
            onChangeText={onChange}
            value={value}
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
      )}
      name={name}
    />
  );
}
