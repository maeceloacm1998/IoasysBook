import React from 'react';
import {TouchableOpacity} from 'react-native';

export interface SelectOptionProps {
  title: string;
  arrayOptions: string[];
  arrayItemSelected: string[];
  itemSelected: (item: string) => void;
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
        {arrayOptions.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                itemSelected(item);
              }}
              key={item}>
              <Option key={item}>
                <TextOption key={item}>{item}</TextOption>
              </Option>
            </TouchableOpacity>
          );
        })}
      </ContainerAllOptions>
    </Container>
  );
}
