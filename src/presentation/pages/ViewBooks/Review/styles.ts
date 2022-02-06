import styled from 'styled-components/native';

import fonts from '../../../styles/fonts';
import {theme} from '../../../styles/theme';

export const Container = styled.View`
  width: 100%;
  margin: 16px 0;
`;

export const Title = styled.Text`
  font-family: ${fonts.Heebo_medium};
  font-size: 15px;
  line-height: 28px;

  color: ${theme.color.black};
`;

export const ContainerReviwn = styled.View`
  margin-top: 15px;
  flex-direction: row;
`;

export const ContainerIdentifier = styled.View`
  padding-right: 8px;
  padding-bottom: 5px;
`;

export const Identifier = styled.Image`
  height: 20px;
  width: 25px;
`;

export const Review = styled.Text`
  font-family: ${fonts.Heebo_medium};
  font-size: 15px;
  line-height: 20px;

  color: ${theme.color.gray};
`;
