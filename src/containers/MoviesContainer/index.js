import React, { Component } from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { fetchMovies } from 'store/movies/actions';
import Card from 'components/Card';
import Grid from 'components/Grid';

class MoviesContainer extends Component {
  getFetchedMovies = () => {
    const { dispatch, getMovies } = this.props;
    dispatch(fetchMovies(getMovies));
  };

  renderMovies = (movies) => {
    return (!!movies.length) && movies.map(movie => {
      return (
        <React.Fragment key={movie.id}>
          <Card
            title={movie.title}
            description={movie.overview}
            poster={movie.poster_path}
            id={`/movie/${movie.id}`}
          />
        </React.Fragment>
      );
    });
  };

  componentDidMount() {
    this.getFetchedMovies();
  }

  render() {
    const { movies } = this.props;

    return (
      <Grid>
        {this.renderMovies(movies)}
      </Grid>
    );
  }
}

MoviesContainer.propTypes = {
  movies: array,
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
});

export default connect(mapStateToProps)(MoviesContainer);
