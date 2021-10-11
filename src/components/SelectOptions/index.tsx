import React from 'react';
import {TouchableOpacity} from 'react-native';

export interface SelectOptionProps {
  title?: string;
  arrayOptions?: string[];
  arrayItemSelected?: string[];
  itemSelected?: (item: string) => void;
}

import {
  Container,
  Title,
  ContainerAllOptions,
  Option,
  TextOption,
} from './styles';

export function SelectOptions({
  title,
  arrayOptions,
  arrayItemSelected,
  itemSelected,
}: SelectOptionProps) {
  return (
    <Container>
      <Title>{title}</Title>
      <ContainerAllOptions>
        {arrayOptions !== undefined &&
          arrayItemSelected !== undefined &&
          arrayOptions.map(item => {
            const map = arrayItemSelected.findIndex(option => {
              return option === item;
            });

            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  if (itemSelected !== undefined) {
                    itemSelected(item);
                  }
                }}
                key={item}>
                <Option key={item} activity={map !== -1 ? true : false}>
                  <TextOption key={item} activity={map !== -1 ? true : false}>
                    {item}
                  </TextOption>
                </Option>
              </TouchableOpacity>
            );
          })}
      </ContainerAllOptions>
    </Container>
  );
}
