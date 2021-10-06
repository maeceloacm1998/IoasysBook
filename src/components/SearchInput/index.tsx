import React from 'react';
import {TouchableOpacity} from 'react-native';

import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import {theme} from '../../styles/theme';

import {Container, ContainerInput, TextInputCustom} from './styles';

interface SearchInputProps {
  label: string;
}

export function SearchInput({label}: SearchInputProps) {
  return (
    <Container>
      <ContainerInput>
        <TextInputCustom
          placeholder={label}
          placeholderTextColor={theme.color.border_black_light}
          selectionColor={theme.color.gray}
          autoCorrect={false}
        />
        <IconEvil name="search" color={theme.color.black} size={30} />
      </ContainerInput>

      <TouchableOpacity activeOpacity={0.5}>
        <IconIonicons
          name="options-outline"
          size={30}
          color={theme.color.black}
        />
      </TouchableOpacity>
    </Container>
  );
}
