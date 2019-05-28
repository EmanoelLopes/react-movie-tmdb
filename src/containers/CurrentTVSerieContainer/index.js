import React, { Fragment, useEffect } from 'react';
import { func, object, bool, array } from 'prop-types';
import intl from 'react-intl-universal';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { fetchCurrentTVSerie } from 'store/tvSeries/actions';
import { fetchTVCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';
import Grid from 'components/Grid';
import TVInformation from 'components/TVInformation';
import CastCard from 'components/CastCard';
import { PageWrapper, Container, H1 } from 'utils/styled';

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
    <PageWrapper>
      {(loading) && <Loading />}
      {(!!currentTV && !loading) &&
        <HeroSection
          backdrop={currentTV.backdrop_path}
          title={currentTV.name}
          description={currentTV.overview}
          isCurrent={true}
          posterPath={currentTV.poster_path}
          releaseDate={format(currentTV.first_air_date, 'YYYY')}
          createdBy={currentTV.created_by}
          genres={currentTV.genres}
          rating={currentTV.vote_average}
        />
      }
      <Container>
        {
          (!!currentTV && !loading) &&
          <Fragment>
            <H1>{intl.get('TV_SERIE_PAGE.DETAILS_TITLE')}</H1>
            <TVInformation
              firstAirDate={format(currentTV.first_air_date, 'MM/DD/YYYY')}
              numberOfEpisodes={currentTV.number_of_episodes}
              numberOfSeasons={currentTV.number_of_seasons}
              seasonNumber={
                (currentTV.last_episode_to_air) 
                  ? currentTV.last_episode_to_air.season_number
                  : 0
              }
              episodeNumber={
                (currentTV.last_episode_to_air) 
                  ? currentTV.last_episode_to_air.episode_number
                  : 0
              }
              episodeName={
                (currentTV.last_episode_to_air) 
                  ? currentTV.last_episode_to_air.name
                  : intl.get('UNINFORMED')
              }
              nextEpisodeNumber={
                (currentTV.next_episode_to_air)
                  ? currentTV.next_episode_to_air.episode_number
                  : 0
              }
              nextEpisodeName={
                (currentTV.next_episode_to_air) 
                  ? currentTV.next_episode_to_air.name
                  : intl.get('UNINFORMED')
              }
              homepage={currentTV.homepage}
            />
          </Fragment>
        }
        <Fragment>
          {(!!cast.length) && 
            <Fragment>
              <H1>{intl.get('TV_SERIE_PAGE.CAST_TITLE')}</H1>
              <Grid>
                {cast.map(actor => {
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
          }
        </Fragment>
      </Container>
    </PageWrapper>
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
