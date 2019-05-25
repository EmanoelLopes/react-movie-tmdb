import React, { useEffect, Fragment } from 'react';
import { array, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchMovies } from 'store/movies/actions';
import Card from 'components/Card';
import Grid from 'components/Grid';
import Loading from 'components/Loading';

const MoviesContainer = props => {
  const {
    dispatch,
    getMovies,
    type,
    movies,
    loading,
  } = props;

  const getFetchedMovies = () => {
    dispatch(fetchMovies(type, getMovies));
  };

  const renderMovies = movies => {
    return (!!movies.length) && movies.map(movie => {
      return (
        <Fragment key={movie.id}>
          <Card
            title={movie.title}
            description={movie.overview}
            poster={movie.poster_path}
            id={`/movie/${movie.id}`}
            backdrop={movie.backdrop_path}
          />
        </Fragment>
      );
    });
  };

  useEffect(() => {
    getFetchedMovies();
  });

  return (
    <Fragment>
      {(loading) && <Loading />}
      <Fragment>
        <Grid>
          {renderMovies(movies)}
        </Grid>
      </Fragment>
    </Fragment>
  );
};

MoviesContainer.propTypes = {
  movies: array,
  type: string.isRequired,
  dispatch: func,
  getMovies: func,
  loading: bool.isRequired,
};

MoviesContainer.defaultProps = {
  movies: [],
  dispatch: () => null,
  getMovies: () => null,
};

const mapStateToProps = state => ({
  movies: state.movies,
  loading: state.loading,
});

export default withRouter(connect(mapStateToProps)(MoviesContainer));
