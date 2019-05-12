import styled from 'styled-components';
import { media } from 'utils/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto; 
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  ${media.desktop`
    grid-template-columns: 50% 50%
  `}
`;
