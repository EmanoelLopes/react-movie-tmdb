import React, { Fragment, useEffect } from 'react';
import { func, object, bool, array } from 'prop-types';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { fetchCurrentMovie } from 'store/movies/actions';
import { fetchMovieCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';
import Grid from 'components/Grid';
import CastCard from 'components/CastCard';
import { H1 } from 'utils/styled';

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
      <div className="container">
        <H1>Cast</H1>
        <Grid
          columns={'24% 24% 24% 24% !important'}>
          {!!cast && cast.map(actor => {
            return (
              <CastCard
                key={actor.credit_id}
                id={actor.id}
                profile={actor.profile_path}
                name={actor.name}
                character={actor.character}
              />
            );
          })}
        </Grid>
      </div>
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
