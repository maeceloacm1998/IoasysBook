import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import {theme} from '../../styles/theme';

interface SubmitButtonType {
  border: boolean;
}

export const EnterButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerEnterButton = styled.View<SubmitButtonType>`
  border: 1px solid
    ${props => (props.border ? theme.color.color_button : theme.color.white)};

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
