import React, { useEffect } from 'react';
import { node } from 'prop-types';
function Main ({ children = {} }) {
  useEffect(() => {
    let unmounted = true;

    if (!unmounted) {
      window.scrollTo(0, 0);
    }

    return () => unmounted = false;
  }, []);

  return (
    <main className="rm-main">
      {children}
    </main>
  );
}
 
Main.propTypes = {
  children: node,
};

export default Main;
