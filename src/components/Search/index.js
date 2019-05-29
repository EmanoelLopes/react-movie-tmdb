import React from 'react';
import { StyledSearch } from './styles';

const Search = () => {
  return (
    <StyledSearch>
      <label>Pesquisar: </label>
      <input type="text" placeholder="Pesquisar títulos..." />
    </StyledSearch>
  );
};

export default Search;
