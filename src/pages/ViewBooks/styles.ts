import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const barHeight = getStatusBarHeight();

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
  border: 1px solid red;
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
