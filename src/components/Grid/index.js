import React from 'react';
import styled from 'styled-components';
import { node } from 'prop-types';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
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
