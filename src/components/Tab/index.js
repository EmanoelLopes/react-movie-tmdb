import React from 'react';
import { number, bool, node } from 'prop-types';
import { StyledTab } from './styles';

const Tab = ({ index, isActive, content }) => {
  return (
    <StyledTab
      key={index}
      role="tab"
      className={`tab-content ${(isActive) ? 'tab-active' : ''}`}>
      {content}
    </StyledTab>
  );
};

Tab.propTypes = {
  index: number.isRequired,
  isActive: bool.isRequired,
  content: node.isRequired,
};

export default Tab;
