import React, { Fragment, useEffect } from 'react';
import { func, object, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { fetchCurrentTVSerie } from 'store/tvSeries/actions';
import { fetchTVCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';
import Grid from 'components/Grid';
import CastCard from 'components/CastCard';
import { H1 } from 'utils/styled';

const CurrentTVSerieContainer = props => {
  const { dispatch, match, loading, currentTV, cast } = props;
  const { params } = match;

  useEffect(() => {
    const getCurrentTVSerie = id => {
      dispatch(fetchCurrentTVSerie(id));
      dispatch(fetchTVCredits(id));
    };

    getCurrentTVSerie(params.id);
  }, [dispatch, params.id]);

  return (
    <Fragment>
      {(loading) && <Loading />}
      {(!!currentTV) &&
        <HeroSection
          backdrop={currentTV.backdrop_path}
          title={currentTV.original_name}
          description={currentTV.overview}
          isCurrent={true}
          posterPath={currentTV.poster_path}
          releaseDate={format(currentTV.first_air_date, 'YYYY')}
          createdBy={currentTV.created_by}
          genres={currentTV.genres}
          rating={currentTV.vote_average}
        />
      }
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
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentTV: state.currentTV,
  cast: state.cast,
});

CurrentTVSerieContainer.propTypes = {
  dispatch: func.isRequired,
  match: object.isRequired,
  currentTV: object.isRequired,
  loading: bool.isRequired,
  cast: array.isRequired,
};

export default connect(mapStateToProps)(CurrentTVSerieContainer);
