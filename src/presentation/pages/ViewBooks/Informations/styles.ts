import styled from 'styled-components/native';

import fonts from '../../../styles/fonts';
import {theme} from '../../../styles/theme';

export const Container = styled.View`
  width: 100%;
  margin: 32px 0 16px 0;
  flex-direction: row;

  justify-content: space-between;
`;

export const ContainerKeys = styled.View`
  justify-content: flex-start;
`;

export const Title = styled.Text`
  margin-bottom: 15px;

  font-family: ${fonts.Heebo_medium};
  font-size: 15px;
  line-height: 28px;

  color: ${theme.color.black};
`;

export const TextKeys = styled.Text`
  font-family: ${fonts.Heebo_medium};
  font-size: 15px;
  line-height: 28px;

  color: ${theme.color.black};
`;

export const ContainerValue = styled.View`
  width: 75%;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextValue = styled.Text`
  font-family: ${fonts.Heebo_regular};
  font-size: 15px;
  line-height: 28px;

  color: ${theme.color.gray};
`;
