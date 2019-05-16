import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  return (
    <footer className="rm-footer">
      <div className="container">
        <span>
          Copyright &copy; 2019 - Made with <a className="react-site-link" href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faReact} /></a> and <FontAwesomeIcon icon={faHeart} />
        </span>
      </div>
    </footer>
  );
}

export default Footer;
