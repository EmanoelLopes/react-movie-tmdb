import React from 'react';
import { array } from 'prop-types';
import { NavLink } from 'react-router-dom';
import Search from 'components/Search';
import {
  StyledSubNav,
  SubNavList,
  SubNavItem
} from './styles';

const SubNav = ({ items }) => {
  const renderItems = () => {
    return (items.length) && (
      items.map((item, index) => {
        return (
          <SubNavItem key={index}>
            <NavLink
              activeClassName="is-active"
              to={item.link}>
              {item.page}
            </NavLink>
          </SubNavItem>
        );
      })
    );
  };

  return (
    <StyledSubNav>
      <SubNavList>
        {renderItems()}
      </SubNavList>
      <Search />
    </StyledSubNav>
  );
};

SubNav.propTypes = {
  items: array.isRequired,
};

export default SubNav;
