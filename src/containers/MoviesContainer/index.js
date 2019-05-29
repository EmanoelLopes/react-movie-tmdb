import React, { Component, Fragment } from 'react';
import { array, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from 'store/movies/actions';
import Card from 'components/Card';
import Grid from 'components/Grid';
import Loading from 'components/Loading';

class MoviesContainer extends Component {
  getFetchedMovies = () => {
    const { dispatch, getMovies, type } = this.props;
    dispatch(fetchMovies(type, getMovies));
  };

  renderMovies = movies => {
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

  componentDidMount() {
    this.getFetchedMovies();
  }

  render() {
    const { movies, loading } = this.props;

    return (
      <Fragment>
        {(loading) && <Loading />}
        {(movies && !loading) && (
          <Grid>
            {this.renderMovies(movies)}
          </Grid>
        )}
      </Fragment>
    );
  }
}

MoviesContainer.propTypes = {
  movies: array,
  loading: bool.isRequired,
  type: string.isRequired,
  dispatch: func,
  getMovies: func,
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

export default connect(mapStateToProps)(MoviesContainer);
