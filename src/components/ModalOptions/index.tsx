import React from 'react';
import {View, Modal} from 'react-native';
import {Text} from 'react-native-paper';

import {Background, ContainerModal, ContainerExitButton} from './styles';

export function ModalOptions() {
  return (
    <Modal visible={true} transparent>
      <Background>
        <ContainerModal>
          <ContainerExitButton>
            <Text>dale</Text>
          </ContainerExitButton>
        </ContainerModal>
      </Background>
    </Modal>
  );
}
