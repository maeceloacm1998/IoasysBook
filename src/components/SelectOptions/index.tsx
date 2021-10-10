import React from 'react';
import {TouchableOpacity} from 'react-native';

export interface SelectOptionProps {
  title?: string;
  arrayOptions?: ArrayOptionsProps[];
  arrayItemSelected?: ArrayOptionsProps[];
  itemSelected?: (item: ArrayOptionsProps) => void;
}

export interface ArrayOptionsProps {
  type: string;
  value: string;
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
          arrayOptions.map((item, index) => {
            const map = arrayItemSelected.findIndex(option => {
              return option.value === item.value;
            });

            return (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  if (itemSelected !== undefined) {
                    itemSelected(item);
                  }
                }}
                key={item.value}>
                <Option key={item.value} activity={map !== -1 ? true : false}>
                  <TextOption
                    key={item.value}
                    activity={map !== -1 ? true : false}>
                    {item.value}
                  </TextOption>
                </Option>
              </TouchableOpacity>
            );
          })}
      </ContainerAllOptions>
    </Container>
  );
}
