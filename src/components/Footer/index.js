import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer () {
  return (
    <footer className="rm-footer">
      <div className="container">
        <span>Copyright &copy; 2019 &nbsp;</span>
        <span>
          - Made with <FontAwesomeIcon icon={faCoffee} /> and <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
