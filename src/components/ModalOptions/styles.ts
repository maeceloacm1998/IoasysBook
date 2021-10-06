import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Background = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${theme.color.background_shadow};
`;

export const ContainerModal = styled.View`
  width: 288px;
  height: 435px;
  padding: 15px;

  background-color: ${theme.color.white};
  border-radius: 4px;
`;

export const ContainerExitButton = styled.View`
  border: 1px solid red;
  height: 32px;
  width: 100%;

  justify-content: center;
  align-items: flex-end;
`;
