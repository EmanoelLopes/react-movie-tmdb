import React from 'react';
import { node } from 'prop-types';

function Main ({ children }) {
  return (
    <main className="rm-main">
      <div className="container">
        {children}
      </div>
    </main>
  );
}
 
Main.propTypes = {
  children: node,
};

Main.defaultProps = {
  children: {}
};

export default Main;
