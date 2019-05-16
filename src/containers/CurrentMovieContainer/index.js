import React, { Fragment, useEffect } from 'react';
import { func, object, bool, array } from 'prop-types';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { fetchCurrentMovie } from 'store/movies/actions';
import { fetchMovieCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';

const CurrentMovieContainer = (props) => {
  const {
    dispatch,
    match,
    currentMovie,
    loading,
    cast
  } = props;
  const { params } = match;

  useEffect(() => {
    const getCurrentMovie = id => {
      dispatch(fetchCurrentMovie(id));
      dispatch(fetchMovieCredits(id));
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
          genres={currentMovie.genres}
          rating={currentMovie.vote_average}
        />
      }
      {!!cast && cast.map(actor => {
      /* TODO - Move this to a separeted component */
        return (
          <div key={actor.cast_id} className="actors">
            {(!!actor.profile_path) &&
              <img
                src={`http://image.tmdb.org/t/p/w154/${actor.profile_path}`}
                alt={actor.name}
              />
            }
            <h4>{`${actor.name} (${actor.character})`}</h4>
          </div>
        );
      })}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentMovie: state.currentMovie,
  cast: state.cast,
});

CurrentMovieContainer.propTypes = {
  dispatch: func.isRequired,
  match: object.isRequired,
  currentMovie: object.isRequired,
  loading: bool.isRequired,
  cast: array.isRequired,
};

export default connect(mapStateToProps)(CurrentMovieContainer);
