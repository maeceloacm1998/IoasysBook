import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';

import IconEvil from 'react-native-vector-icons/EvilIcons';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFeather from 'react-native-vector-icons/Feather';

import {ModalOptions} from '../ModalOptions';

import {useBooks} from '../../Context/Books/books';

import {Container, ContainerInput, TextInputCustom} from './styles';

import {theme} from '../../styles/theme';
interface SearchInputProps {
  label: string;
}

export function SearchInput({label}: SearchInputProps) {
  const {searchBooks} = useBooks();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  function handleSearchBooks(text: string) {
    setInputValue(text);

    setTimeout(() => {
      searchBooks(text);
    }, 1000);
  }

  return (
    <Container>
      <ContainerInput>
        <TextInputCustom
          placeholder={label}
          placeholderTextColor={theme.color.border_black_light}
          selectionColor={theme.color.gray}
          autoCorrect={false}
          value={inputValue}
          onChangeText={text => {
            handleSearchBooks(text);
          }}
        />
        {inputValue !== '' ? (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              setInputValue('');
              handleSearchBooks('');
            }}>
            <IconFeather name="x" color={theme.color.black} size={25} />
          </TouchableOpacity>
        ) : (
          <IconEvil name="search" color={theme.color.black} size={30} />
        )}
      </ContainerInput>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          setShowModal(true);
        }}>
        <IconIonicons
          name="options-outline"
          size={30}
          color={theme.color.black}
        />

        <ModalOptions
          visible={showModal}
          handleExitModal={() => {
            setShowModal(false);
          }}
        />
      </TouchableOpacity>
    </Container>
  );
}
