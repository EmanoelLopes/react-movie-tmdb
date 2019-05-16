import React from 'react';
import { node, string } from 'prop-types';
import { GridContainer } from './styles';

const Grid = props => {
  const {
    children,
    columns,
    rows,
    columnGap,
    rowGap,
  } = props;

  return (
    <GridContainer
      columns={columns}
      rows={rows}
      columnGap={columnGap}
      rowGap={rowGap}>
      {children}
    </GridContainer>
  );
};

Grid.propTypes = {
  children: node,
  columns: string,
  rows: string,
  columnGap: string,
  rowGap: string,
};

Grid.defaultProps = {
  children: {},
  columns: 'auto',
  rows: 'auto',
  columnGap: '25px',
  rowGap: '25px',
};

export default Grid;
