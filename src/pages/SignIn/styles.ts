import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import {theme} from '../../styles/theme';

export const Container = styled.ImageBackground`
  flex: 1;
  width: 100%;
  padding: 20px;
  justify-content: center;
`;

export const ContainerHeader = styled.View`
  margin-bottom: 30px;
`;

export const TagError = styled.Text`
  margin-left: 5px;

  font-family: ${fonts.Heebo_medium};
  font-size: 15px;
  line-height: 20px;

  color: ${theme.color.white};
`;
