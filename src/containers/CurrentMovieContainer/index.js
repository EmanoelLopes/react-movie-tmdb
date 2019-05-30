import React, { Fragment, useEffect, lazy, Suspense } from 'react';
import { func, object, bool, array } from 'prop-types';
import intl from 'react-intl-universal';
import { format } from 'date-fns';
import { connect } from 'react-redux';
import { fetchCurrentMovie } from 'store/movies/actions';
import { fetchMovieCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';
import Grid from 'components/Grid';
import MovieDetails from 'components/MovieDetails';
import { PageWrapper, Container, H1 } from 'utils/styled';

// Lazy Load Cast Cards
const CastCard = lazy(() => import('components/CastCard'));

const CurrentMovieContainer = props => {
  const {
    dispatch,
    match,
    currentMovie,
    loading,
    cast,
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
    <PageWrapper>
      {(loading) && <Loading />}
      {(!!currentMovie && !loading) &&
        <HeroSection
          backdrop={currentMovie.backdrop_path}
          title={currentMovie.title}
          description={currentMovie.overview}
          isCurrent={true}
          posterPath={currentMovie.poster_path}
          releaseDate={format(currentMovie.release_date, 'YYYY')}
          createdBy={currentMovie.production_companies}
          genres={currentMovie.genres}
          rating={currentMovie.vote_average}
        />
      }
      <Container>
        {(!loading) && (
          <MovieDetails
            budget={currentMovie.budget}
            revenue={currentMovie.revenue}
            status={currentMovie.status}
            releaseDate={format(currentMovie.release_date, 'MM/DD/YYYY')}
            popularity={currentMovie.popularity}
          />
        )}
        {(!!cast.length && !loading) &&
          <Fragment>
            <H1>{intl.get('MOVIE_PAGE.CAST_TITLE')}</H1>
            <Grid>
              {cast
                .filter(actor => actor.profile_path !== null)
                .map(actor => {
                  return (
                    <Suspense
                      key={actor.credit_id}
                      fallback={<div>Loading...</div>}>
                      <CastCard
                        id={actor.id}
                        profile={actor.profile_path}
                        name={actor.name}
                        character={actor.character}
                      />
                    </Suspense>
                  );
              })}
            </Grid>
          </Fragment>
        }
      </Container>
    </PageWrapper>
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
