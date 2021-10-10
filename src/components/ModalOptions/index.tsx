import React, {useCallback, useState} from 'react';
import {Modal, ModalBaseProps, ScrollView} from 'react-native';

import {RoundedButton} from '../RoundedButton';
import {
  SelectOptions,
  SelectOptionProps,
  ArrayOptionsProps,
} from '../SelectOptions';
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

  const [itensSelected, setItensSelected] = useState<ArrayOptionsProps[]>([]);

  const arrayCategory = [
    {type: 'category', value: 'biographies'},
    {type: 'category', value: 'collections'},
    {type: 'category', value: 'behavior'},
    {type: 'category', value: 'tales'},
    {type: 'category', value: 'literary - criticism'},
    {type: 'category', value: 'scienceFiction'},
    {type: 'category', value: 'folklore'},
    {type: 'category', value: 'genealogy'},
    {type: 'category', value: 'humor'},
    {type: 'category', value: 'children'},
    {type: 'category', value: 'games'},
    {type: 'category', value: 'newspapers'},
    {type: 'category', value: 'brazilian - literature'},
    {type: 'category', value: 'foreign - literature'},
    {type: 'category', value: 'rare - books'},
    {type: 'category', value: 'manuscripts'},
    {type: 'category', value: 'poetry'},
    {type: 'category', value: 'another - subjects'},
  ];

  const arrayPublished = [
    {type: 'published', value: '1998'},
    {type: 'published', value: '1999'},
    {type: 'published', value: '2000'},
    {type: 'published', value: '2001'},
    {type: 'published', value: '2002'},
    {type: 'published', value: '2003'},
    {type: 'published', value: '2004'},
    {type: 'published', value: '2005'},
    {type: 'published', value: '2006'},
    {type: 'published', value: '2007'},
    {type: 'published', value: '2008'},
    {type: 'published', value: '2009'},
    {type: 'published', value: '2010'},
    {type: 'published', value: '2011'},
    {type: 'published', value: '2012'},
    {type: 'published', value: '2013'},
    {type: 'published', value: '2014'},
    {type: 'published', value: '2015'},
    {type: 'published', value: '2016'},
    {type: 'published', value: '2017'},
    {type: 'published', value: '2018'},
    {type: 'published', value: '2019'},
    {type: 'published', value: '2020'},
    {type: 'published', value: '2021'},
  ];

  const handleSelect = useCallback(
    item => {
      const filterExistItem = itensSelected.findIndex(option => {
        return option.value === item.value;
      });

      console.log('caca', filterExistItem);

      if (filterExistItem !== -1) {
        const deletItem = itensSelected.filter(value => {
          return value.value !== item.value;
        });

        setItensSelected(deletItem);
      } else {
        if (itensSelected.length === 2) {
          console.log('ja tem dois itens');
        } else {
          setItensSelected(oldValue => [...oldValue, item]);
        }
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

            <SelectOptions
              title="Selecione a categoria"
              itemSelected={item => {
                handleSelect(item);
              }}
              arrayOptions={arrayPublished}
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
