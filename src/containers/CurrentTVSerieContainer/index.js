import React, { Fragment, useEffect } from 'react';
import { func, object, bool, array } from 'prop-types';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import { fetchCurrentTVSerie } from 'store/tvSeries/actions';
import { fetchTVCredits } from 'store/credits/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';

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
      {!!cast && cast.map(actor => {
        /* TODO - Move this to a separeted component */
        return (
          <div key={actor.id} className="actors">
            {(!!actor.profile_path) &&
              <img
                /* TODO - add profile path */
                src={`https://image.tmdb.org/t/p/w154/${actor.profile_path}`}
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
