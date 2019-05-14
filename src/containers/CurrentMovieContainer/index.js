import React, { Fragment, useEffect } from 'react';
import { func, object, bool } from 'prop-types';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { fetchCurrentMovie } from 'store/movies/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';

const CurrentMovieContainer = (props) => {
  const { dispatch, match, currentMovie, loading } = props;
  const { params } = match;

  useEffect(() => {
    const getCurrentMovie = id => {
      dispatch(fetchCurrentMovie(id));
    };

    getCurrentMovie(params.id);
  }, [dispatch, params.id]);

  return (
    <Fragment>
      {(loading) && <Loading />}
      {(!!currentMovie) &&
        <HeroSection
          backdrop={currentMovie.backdrop_path}
          title={currentMovie.original_title}
          description={currentMovie.overview}
          isCurrent={true}
          posterPath={currentMovie.poster_path}
          releaseDate={format(currentMovie.release_date, 'YYYY')}
          createdBy={currentMovie.production_companies}
          rating={currentMovie.vote_average}
        />
      }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentMovie: state.currentMovie,
});

CurrentMovieContainer.propTypes = {
  dispatch: func.isRequired,
  match: object.isRequired,
  currentMovie: object.isRequired,
  loading: bool.isRequired,
};

export default connect(mapStateToProps)(CurrentMovieContainer);
