import React, { useEffect } from 'react';
import { func, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentMovie } from 'store/movies/actions';
import Loading from 'components/Loading';
import { H1 } from 'utils/styled';

const CurrentMovieMovie = (props) => {
  const { dispatch, match, currentMovie, loading } = props;
  const { params } = match;

  useEffect(() => {
    const getCurrentMovie = id => {
      dispatch(fetchCurrentMovie(id));
    };

    getCurrentMovie(params.id);
  }, [dispatch, params.id]);

  return (
    <React.Fragment>
      {(loading) && <Loading />}
      {(!!currentMovie) &&
        <div className="movie">
          <H1>{currentMovie.title}</H1>
        </div>
      }
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentMovie: state.currentMovie,
});

CurrentMovieMovie.propTypes = {
  dispatch: func.isRequired,
  match: object.isRequired,
  currentMovie: object.isRequired,
  loading: bool.isRequired,
};

export default connect(mapStateToProps)(CurrentMovieMovie);
