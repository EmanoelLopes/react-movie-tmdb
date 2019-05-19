import React from 'react';
import { node } from 'prop-types';
import { withRouter } from 'react-router-dom';
import withSrollToTop from 'hoc/withScrollToTop';

function WrappedMain ({ children }) {
  return (
    <main className="rm-main">
      {children}
    </main>
  );
}
 
WrappedMain.propTypes = {
  children: node,
};

WrappedMain.defaultProps = {
  children: {}
};

const Main = withRouter(withSrollToTop(WrappedMain));

export default Main;
