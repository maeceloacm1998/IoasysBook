import styled from 'styled-components/native';

import {getStatusBarHeight} from 'react-native-status-bar-height';

const barHeight = getStatusBarHeight();

export const Container = styled.ImageBackground`
  flex: 1;
  margin-top: ${barHeight}px;
  padding: 30px 16px;
`;
