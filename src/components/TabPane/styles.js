import styled from 'styled-components';
import { colors } from 'utils/styled';

export const StyledTabPane = styled.div`
  cursor: pointer;
  display: flex;
  width: 50%;

  &.tab-active {
    color: ${colors.movieDBColor};
  }
`;
