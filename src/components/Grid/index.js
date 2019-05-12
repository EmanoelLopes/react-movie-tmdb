import React from 'react';
import styled from 'styled-components';
import { media } from 'utils/styled';
import { node } from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto; 
  grid-column-gap: 25px;
  grid-row-gap: 25px;

  ${media.desktop`
    grid-template-columns: 50% 50%
  `}
`;

const Grid = ({ children }) => {
  return (
    <GridContainer>
      {children}
    </GridContainer>
  );
};

Grid.propTypes = {
  children: node,
};

Grid.defaultProps = {
  children: {},
};

export default Grid;
