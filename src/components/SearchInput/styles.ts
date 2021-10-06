import styled from 'styled-components/native';
import fonts from '../../styles/fonts';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  height: 48px;
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInput = styled.View`
  border: 1px solid ${theme.color.border_black_light};
  height: 48px;
  width: 80%;
  padding: 0px 12px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextInputCustom = styled.TextInput`
  flex: 1;

  font-family: ${fonts.Heebo_medium};
  color: ${theme.color.border_black_light};
`;
