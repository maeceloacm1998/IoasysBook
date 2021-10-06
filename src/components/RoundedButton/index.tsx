import React from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {ClicleButton} from './styles';

interface RoundedButtonProps {
  name: string;
  size: number;
  color: string;
  handleSubmit(): void;
}

export function RoundedButton({
  name,
  size,
  color,
  handleSubmit,
}: RoundedButtonProps) {
  return (
    <ClicleButton
      activeOpacity={0.7}
      onPress={() => {
        handleSubmit();
      }}>
      <Icon name={name} size={size} color={color} />
    </ClicleButton>
  );
}
