import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import {
  MoviesContainer,
  TVSeriesContainer,
  HeroSectionContainer,
} from 'containers';
import { H1 } from 'utils/styled';

const Home = () => {
  return (
    <React.Fragment>
      <HeroSectionContainer />
      <div className="container">
        <H1>Popular Movies <FontAwesomeIcon icon={faFilm} /></H1>
        <MoviesContainer />
      </div>
      <div className="container">
        <H1>Popular TV Series <FontAwesomeIcon icon={faTv} /></H1>
        <TVSeriesContainer />
      </div>
    </React.Fragment>
  );
};

export default Home;
