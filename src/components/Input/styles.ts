import styled from 'styled-components/native';

import {TextInput} from 'react-native-paper';

import {theme} from '../../styles/theme';
import fonts from '../../styles/fonts';

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

export const EnterButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerEnterButton = styled.View`
  height: 35px;
  width: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  background-color: ${theme.color.white};
`;

export const TextEnterButton = styled.Text`
  color: ${theme.color.color_button};
  font-family: ${fonts.Heebo_medium};
`;
