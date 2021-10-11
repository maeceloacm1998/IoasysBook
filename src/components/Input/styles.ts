import styled from 'styled-components/native';

import {TextInput} from 'react-native-paper';

import {theme} from '../../styles/theme';

interface InputTypes {
  flexDirection: boolean;
}

export const Container = styled.View<InputTypes>`
  flex-direction: ${props => (props.flexDirection ? 'row' : 'column')};
  width: 100%;
  height: 60px;
  margin: 10px 0;

  background-color: ${theme.color.background_input};
`;

export const InputFlat = styled(TextInput)`
  height: 60px;
  background-color: transparent;
`;
