import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { LogoWrapper } from './styles';

const Logo = () => (
  <LogoWrapper>
    <Link to="/">
      <FontAwesomeIcon icon={faFilm} />
      <span>React <FontAwesomeIcon icon={faReact} /><br /> Movie DB</span>
    </Link>
  </LogoWrapper>
);

export default Logo;
