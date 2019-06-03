import styled from 'styled-components';
import { colors, media } from 'utils/styled';

export const StyledTabPane = styled.div`
  background-color: ${colors.white};
  border-bottom: 5px solid ${colors.white};
  cursor: pointer;
  display: flex;
  margin: 15px 0; 
  text-align: center;
  width: 50%;

  &.tab-active {
    color: ${colors.movieDBColor};
    border-bottom: 5px solid ${colors.movieDBColor};
  }

  .label {
    display: none;

    ${media.phone`
      display: initial;
    `}
  }
`;
