import React, { Fragment } from 'react';
import { object } from 'prop-types';
import { CurrentTVSerieContainer } from 'containers';

const TV = ({ match }) => {
  return (
    <Fragment>
      <CurrentTVSerieContainer match={match} />
    </Fragment>
  );
};

TV.propTypes = {
  match: object.isRequired,
};

export default TV;

