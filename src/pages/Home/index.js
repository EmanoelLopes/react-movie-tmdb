import React from 'react';
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
        <H1>Popular Movies</H1>
        <MoviesContainer />
      </div>
      <div className="container">
        <H1>Popular TV Series</H1>
        <TVSeriesContainer />
      </div>
    </React.Fragment>
  );
};

export default Home;
