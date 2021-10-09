import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const barHeight = getStatusBarHeight();

export const Container = styled.ImageBackground`
  flex: 1;
  margin-top: ${barHeight}px;
  padding: 30px 16px;
`;

export const ContainerSearchInput = styled.View`
  margin: 25px 0px;
`;

export const ContainerFlatListBooks = styled.View`
  margin-top: 10px;
  width: 100%;
`;
