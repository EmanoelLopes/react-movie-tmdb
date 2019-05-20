import React from 'react';
import { Link } from 'react-router-dom';
import SelectLanguage from 'components/SelectLanguage';
import { SubheaderWrapper } from './styles';  

const Subheader = () => {
  return (
    <SubheaderWrapper>
      <div className="container">
        <div className="navigation">
          <Link to='/movies'>Movies</Link>
          <Link to='/tvs'>TV Series</Link>
        </div>
        <SelectLanguage />
      </div>
    </SubheaderWrapper>
  );
};

export default Subheader;
