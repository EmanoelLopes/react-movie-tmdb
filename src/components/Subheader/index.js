import React from 'react';
import { Link } from 'react-router-dom';
import intl from 'react-intl-universal';
import SelectLanguage from 'components/SelectLanguage';
import { SubheaderWrapper } from './styles';
import locale from 'lang';

locale.init();

const Subheader = () => {
  return (
    <SubheaderWrapper>
      <div className="container">
        <div className="navigation">
          <Link to='/movies/top-rated'>{intl.get('SUBHEADER.NAV_LINKS.MOVIES')}</Link>
          <Link to='/tvs/top-rated'>{intl.get('SUBHEADER.NAV_LINKS.TV_SERIES')}</Link>
        </div>
        <SelectLanguage />
      </div>
    </SubheaderWrapper>
  );
};

export default Subheader;
