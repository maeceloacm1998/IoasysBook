import React, {useCallback, useState} from 'react';
import {Modal, ModalBaseProps, ScrollView} from 'react-native';

import {RoundedButton} from '../RoundedButton';
import {SelectOptions, SelectOptionProps} from '../SelectOptions';
import SubmitButton from '../SubmitButton';

import {useBooks} from '../../Context/Books/books';

import {
  Background,
  ContainerModal,
  ContainerExitButton,
  ContainerFilterButton,
} from './styles';

import {theme} from '../../styles/theme';

interface ModalOptionsProps extends ModalBaseProps, SelectOptionProps {
  handleExitModal?(): void;
  visible: boolean;
}

export function ModalOptions({
  handleExitModal,
  visible,
  ...rest
}: ModalOptionsProps) {
  const {filterBooksByOption} = useBooks();

  const [itensSelected, setItensSelected] = useState<string[]>([]);

  const arrayCategory = [
    'Biografias',
    'Coleções',
    'Comportamento',
    'Contos',
    'Crítica Literária',
    'Folclore',
    'Humor',
    'Jogos',
    'Jornais',
    'Literatura Brasileira',
    'Literatura Estrangeira',
    'Livros Raros',
    'Manuscritos',
    'Poesia',
    'Outros Assuntos',
  ];

  const handleSelect = useCallback(
    item => {
      const filterExistItem = itensSelected.findIndex(option => {
        return option === item;
      });

      if (filterExistItem !== -1) {
        const deletItem = itensSelected.filter(value => {
          return value !== item;
        });

        setItensSelected(deletItem);
      } else {
        setItensSelected(oldValue => [...oldValue, item]);
      }
    },
    [itensSelected]
  );

  function handleFilter() {
    filterBooksByOption(itensSelected);
  }

  return (
    <Modal {...rest} visible={visible} transparent animationType="fade">
      <Background>
        <ContainerModal>
          <ContainerExitButton>
            <RoundedButton
              name="x"
              size={18}
              color={theme.color.black}
              handleSubmit={() => {
                if (handleExitModal !== undefined) {
                  handleExitModal();
                }
              }}
            />
          </ContainerExitButton>

          <ScrollView>
            <SelectOptions
              title="Selecione a categoria"
              itemSelected={item => {
                handleSelect(item);
              }}
              arrayOptions={arrayCategory}
              arrayItemSelected={itensSelected}
            />
          </ScrollView>

          <ContainerFilterButton>
            <SubmitButton
              handleSubmit={() => {
                handleFilter();
              }}
              borderButton
            />
          </ContainerFilterButton>
        </ContainerModal>
      </Background>
    </Modal>
  );
}
