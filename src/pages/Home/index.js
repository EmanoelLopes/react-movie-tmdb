import React from 'react';
import { MoviesContainer, TVSeriesContainer } from 'containers';
import { H1 } from 'utils/styled';

const Home = () => {
  return (
    <React.Fragment>
      <div className="home home-popular-movies">
        <H1>Movies</H1>
        <MoviesContainer />
      </div>
      <div className="home home-popular-tv">
        <H1>TV Series</H1>
        <TVSeriesContainer />
      </div>
    </React.Fragment>
  );
};

export default Home;
