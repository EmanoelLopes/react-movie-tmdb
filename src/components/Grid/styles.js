import styled from 'styled-components';
import { media } from 'utils/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${props => props.columns};
  grid-template-rows: ${props => props.rows}; 
  grid-column-gap: ${props => props.columnGap};
  grid-row-gap: ${props => props.rowGap};

  ${media.desktop`
    grid-template-columns: 50% 50%;
  `}
`;
