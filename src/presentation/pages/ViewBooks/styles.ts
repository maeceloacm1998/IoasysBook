import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';
const barHeight = getStatusBarHeight();

import fonts from '../../styles/fonts';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  flex: 1;

  padding: 15px;
  margin-top: ${barHeight}px;
`;

export const ContainerExitButton = styled.View`
  height: 32px;
  width: 100%;

  justify-content: center;
  align-items: flex-start;
`;

export const ContainerAllDataBooks = styled.View`
  flex: 1;
  padding: 20px 40px;

  align-items: center;
`;

export const ImageBook = styled.Image`
  height: 400px;
  width: 300px;
  justify-content: center;
  align-items: center;
`;

export const TitleBook = styled.Text`
  margin-top: 24px;

  font-family: ${fonts.Heebo_medium};
  font-size: 33px;
  line-height: 40px;

  color: ${theme.color.black};
`;

export const AuthorBook = styled.Text`
  font-family: ${fonts.Heebo_regular};
  font-size: 15px;
  line-height: 20px;

  color: ${theme.color.author};
`;
