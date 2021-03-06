import React from 'react';
import { array, bool } from 'prop-types';
import { connect } from 'react-redux';
import HeroSection from 'components/HeroSection';

const HeroSectionContainer = ({ movies, loading }) => {
  return (
    (!!movies.length && !loading) &&
    <HeroSection
      backdrop={movies[0].backdrop_path}
      title={movies[0].title}
      description={movies[0].overview}
    />
  );
};

HeroSectionContainer.propTypes = {
  movies: array.isRequired,
  loading: bool.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading,
});

export default connect(mapStateToProps)(HeroSectionContainer);
