import styled from 'styled-components/native';
import fonts from '../../styles/fonts';
import {theme} from '../../styles/theme';

interface SelectOptionsType {
  activity?: boolean;
}

export const Container = styled.View`
  margin: 5px 0 23px 0;
`;

export const Title = styled.Text`
  font-family: ${fonts.Heebo_medium};
  font-size: 12px;
  line-height: 20px;

  color: ${theme.color.black};
`;

export const ContainerAllOptions = styled.View`
  margin: 8px 0;
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;
`;

export const Option = styled.View<SelectOptionsType>`
  height: 32px;
  padding: 0 10px;
  margin: 5px 3px;

  justify-content: center;
  align-items: center;

  border: 1px solid ${theme.color.border_black_light};
  border-radius: 44px;
  background-color: ${props =>
    props.activity ? theme.color.black : theme.color.white};
`;

export const TextOption = styled.Text<SelectOptionsType>`
  font-family: ${fonts.Heebo_regular};
  font-size: 12px;
  line-height: 20px;

  color: ${props => (props.activity ? theme.color.white : theme.color.black)};
`;
