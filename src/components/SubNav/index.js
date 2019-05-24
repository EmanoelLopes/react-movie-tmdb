import React from 'react';
import { array } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { SubNavList, SubNavItem } from './styles';

const SubNav = ({ items }) => {
  return (
    <SubNavList>
      {(items.length) && (
        items.map((item, index) => {
          return (
            <SubNavItem key={index}>
              <NavLink activeClassName="is-active" to={item.link}>{item.page}</NavLink>
            </SubNavItem>
          );
        })
      )}
    </SubNavList>
  );
};

SubNav.propTypes = {
  items: array.isRequired,
};

export default SubNav;
