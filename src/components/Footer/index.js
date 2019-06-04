import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';

function Footer () {
  return (
    <footer className="rm-footer">
      <div className="container">
        <span>
          Made with <a className="react-site-link" aria-label="Check more in React.js Official Site" href="https://reactjs.org/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faReact} /></a> and <FontAwesomeIcon icon={faHeart} /> by <a href="https://emanoellopes.me" rel="noopener noreferrer" aria-label="Link to Emanoel Lopes Personal Website" target="_blank">Emanoel Lopes</a> &bull; <a href="https://github.com/emanoellopes" aria-label="Link to Emanoel Lopes Github" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} /></a> &bull; 2019
        </span>
      </div>
    </footer>
  );
}

export default Footer;
