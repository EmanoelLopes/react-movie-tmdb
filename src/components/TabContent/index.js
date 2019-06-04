import React from 'react';
import { number, bool, node } from 'prop-types';
import { StyledTab } from './styles';

const TabContent = ({ index, isActive, content }) => {
  return (
    <StyledTab
      key={index}
      className={`tab-content ${(isActive) ? 'tab-active' : ''}`}>
      {content}
    </StyledTab>
  );
};

TabContent.propTypes = {
  index: number.isRequired,
  isActive: bool.isRequired,
  content: node.isRequired,
};

export default TabContent;
