import React from 'react';
import { connect } from 'react-redux';
import {
  MoviesContainer,
  TVSeriesContainer,
  HeroSectionContainer,
} from 'containers';
import Loading from 'components/Loading';
import { H1 } from 'utils/styled';

const Home = (props) => {
  const { loading } = props;

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

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Home);
