import React from 'react';
import { node } from 'prop-types';
import { GridContainer } from './styles';

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
