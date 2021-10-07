import React, {useCallback, useState} from 'react';
import {Modal, ModalBaseProps, ScrollView} from 'react-native';

import {RoundedButton} from '../RoundedButton';
import {SelectOptions, SelectOptionProps} from '../SelectOptions';

import {Background, ContainerModal, ContainerExitButton} from './styles';

import {theme} from '../../styles/theme';

interface ModalOptionsProps extends ModalBaseProps, SelectOptionProps {
  handleExitModal: boolean;
}

export function ModalOptions({handleExitModal, ...rest}: ModalOptionsProps) {
  const [itensSelected, setItensSelected] = useState<string[]>([]);

  const arrayOptions = [
    'biographies',
    'collections',
    'behavior',
    'tales',
    'literary - criticism',
    'scienceFiction',
    'folklore',
    'genealogy',
    'humor',
    'children',
    'games',
    'newspapers',
    'brazilian - literature',
    'foreign - literature',
    'rare - books',
    'manuscripts',
    'poetry',
    'another - subjects',
  ];

  const handleSelect = useCallback(item => {
    console.log('opa');
  }, []);

  return (
    <Modal {...rest} visible={handleExitModal} transparent>
      <Background>
        <ContainerModal>
          <ContainerExitButton>
            <RoundedButton
              name="x"
              size={18}
              color={theme.color.black}
              handleSubmit={() => {
                handleExitModal;
              }}
            />
          </ContainerExitButton>

          <ScrollView>
            <SelectOptions
              title="Selecione a categoria"
              itemSelected={item => {
                handleSelect(item);
              }}
              arrayOptions={arrayOptions}
              arrayItemSelected={itensSelected}
            />

            <SelectOptions
              title="Selecione a categoria"
              itemSelected={item => {
                handleSelect(item);
              }}
              arrayOptions={arrayOptions}
              arrayItemSelected={itensSelected}
            />
          </ScrollView>
        </ContainerModal>
      </Background>
    </Modal>
  );
}
