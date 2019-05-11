import React from 'react';
import { node } from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';

const Root = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

Root.propTypes = {
  children: node,
};

Root.defaultProps = {
  children: {},
};

export default Root;
