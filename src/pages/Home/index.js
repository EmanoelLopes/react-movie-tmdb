import React from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import {
  MoviesContainer,
  TVSeriesContainer,
  HeroSectionContainer,
} from 'containers';
import Loading from 'components/Loading';
import { H1 } from 'utils/styled';

const Home = ({ loading }) => {
  return (
    <React.Fragment>
      {(loading) && <Loading />}
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

Home.propTypes = {
  loading: bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(Home);
