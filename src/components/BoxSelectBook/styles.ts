import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import {theme} from '../../styles/theme';

export const ContainerBox = styled.View`
  height: 160px;
  width: 100%;
  padding: 15px;

  justify-content: center;

  background-color: ${theme.color.white};
  border-radius: 5px;
`;

export const PricipalContainer = styled.View`
  flex-direction: row;
`;

export const ImageBook = styled.Image`
  height: 130px;
  width: 90px;
`;

export const ContainerAllData = styled.View`
  margin-left: 16px;
`;

export const TitleBook = styled.Text`
  font-family: ${fonts.Heebo_medium};
  font-size: 18px;
  line-height: 20px;

  color: ${theme.color.black};
`;
export const AuthorBook = styled.Text`
  font-family: ${fonts.Heebo_regular};
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 25px;

  color: ${theme.color.author};
`;

export const SubscriptionBook = styled.Text`
  font-family: ${fonts.Heebo_regular};
  font-size: 14px;
  line-height: 20px;

  color: ${theme.color.gray};
`;
