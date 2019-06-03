import React from 'react';
import {
  bool,
  func,
  number,
  string,
  node
} from 'prop-types';
import { H1 } from 'utils/styled';
import { StyledTabPane } from './styles';

const TabPane = props => {
  const { label, index, isActive, icon, onClick } = props;
  
  return (
    <StyledTabPane
      index={index}
      onClick={onClick}
      className={`tab-pane ${(isActive) ? 'tab-active' : ''}`}>
      <H1>
        <span className="label">{label}</span> {icon}
      </H1>
    </StyledTabPane>
  );
};

TabPane.propTypes = {
  label: string.isRequired,
  onClick: func.isRequired,
  index: number.isRequired,
  isActive: bool.isRequired,
  icon: node.isRequired,
};

export default TabPane;
