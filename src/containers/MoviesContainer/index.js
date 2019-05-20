import React, { Component, Fragment } from 'react';
import { array, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import intl from 'react-intl-universal';
import { fetchMovies } from 'store/movies/actions';
import Card from 'components/Card';
import Grid from 'components/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { H1 } from 'utils/styled';

class MoviesContainer extends Component {
  getFetchedMovies = () => {
    const { dispatch, getMovies } = this.props;
    dispatch(fetchMovies(getMovies));
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
            release={format(movie.release_date, 'YYYY')}
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
      <div className="container">
        {(!loading) && 
          <Fragment>
            <H1>{intl.get('HOME.POPULAR_MOVIES_TITLE')} <FontAwesomeIcon icon={faFilm} /></H1>
            <Grid>
              {this.renderMovies(movies)}
            </Grid>
          </Fragment>
        }
      </div>
    );
  }
}

MoviesContainer.propTypes = {
  movies: array,
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

export default connect(mapStateToProps)(MoviesContainer);
