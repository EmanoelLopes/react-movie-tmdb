import React, { Fragment, useEffect } from 'react';
import { func, object, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { fetchCurrentTVSerie } from 'store/tvSeries/actions';
import { fetchTVCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';
import Grid from 'components/Grid';
import TVInformation from 'components/TVInformation';
import CastCard from 'components/CastCard';
import { H1 } from 'utils/styled';

const CurrentTVSerieContainer = props => {
  const {
    dispatch,
    match,
    loading,
    currentTV,
    cast
  } = props;
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
      {(!!currentTV && !loading) &&
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
      <div className="container">
        {
          (!!currentTV && 
            !loading && 
            !!currentTV.last_episode_to_air &&
            !!currentTV.next_episode_to_air) &&
          <Fragment>
            <H1>Details</H1>
            <TVInformation
              firstAirDate={format(currentTV.first_air_date, 'MM/DD/YYYY')}
              numberOfEpisodes={currentTV.number_of_episodes}
              numberOfSeasons={currentTV.number_of_seasons}
              seasonNumber={currentTV.last_episode_to_air.season_number}
              episodeNumber={currentTV.last_episode_to_air.episode_number}
              episodeName={currentTV.last_episode_to_air.name}
              nextEpisodeNumber={currentTV.next_episode_to_air.episode_number}
              nextEpisodeName={currentTV.next_episode_to_air.name}
              homepage={currentTV.homepage}
            />
          </Fragment>
        }
        <H1>Cast</H1>
        <Grid>
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
