import React, { Fragment } from 'react';
import { object } from 'prop-types';
import { CurrentMovieContainer } from 'containers';

const Movie = ({ match }) => {
  return (
    <Fragment>
      <CurrentMovieContainer match={match} />
    </Fragment>
  );
};

Movie.propTypes = {
  match: object.isRequired,
};

export default Movie;
