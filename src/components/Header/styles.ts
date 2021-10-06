import styled from 'styled-components/native';
import {theme} from '../../styles/theme';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const ClicleButton = styled.TouchableOpacity`
  border: 1px solid ${theme.color.border_black_light};
  border-radius: 30px;
  height: 32px;
  width: 32px;

  justify-content: center;
  align-items: center;
`;
