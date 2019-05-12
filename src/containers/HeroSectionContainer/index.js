import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array } from 'prop-types';
import HeroSection from 'components/HeroSection';

class HeroSectionContainer extends Component {
  render() {
  const { movies } = this.props;

    return (
      (!!movies.length) && 
      <HeroSection 
        backdrop={movies[0].backdrop_path}
        title={movies[0].original_title}
        description={movies[0].overview}
      />
    );
  }
}

HeroSectionContainer.propTypes = {
  movies: array.isRequired,
};

const mapStateToProps = state => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(HeroSectionContainer);
