import styled from 'styled-components';
import { media } from 'utils/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto; 
  grid-column-gap: 0;
  grid-row-gap: 25px;

  ${media.phone`
    grid-template-columns: 50% 50%;
    grid-column-gap: 5px;
  `}

  ${media.desktop`
    grid-template-columns: 24% 24% 24% 24%;
    grid-column-gap: 15px;
  `}

  ${media.largeDesktop`
    grid-template-columns: 19% 19% 19% 19% 19%;
  `}
`;
