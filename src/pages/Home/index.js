import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { HomeContainer } from 'containers';

const Home = () => {
  return (
    <Fragment>
      <HomeContainer />
    </Fragment>
  );
};

export default withRouter(Home);
