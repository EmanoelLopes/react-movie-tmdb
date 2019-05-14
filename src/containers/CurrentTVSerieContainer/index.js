import React, { Fragment, useEffect } from 'react';
import { func, object, bool } from 'prop-types';
import { connect } from 'react-redux';
import { fetchCurrentTVSerie } from 'store/tvSeries/actions';
import Loading from 'components/Loading';
import HeroSection from 'components/HeroSection';

const CurrentTVSerieContainer = props => {
  const { dispatch, match, loading, currentTV } = props;
  const { params } = match;

  useEffect(() => {
    const getCurrentTVSerie = id => {
      dispatch(fetchCurrentTVSerie(id));
    };

    getCurrentTVSerie(params.id);
  }, [dispatch, params.id]);

  return (
    <Fragment>
      {(loading) && <Loading />}
      {(!!currentTV) &&
        <HeroSection
          backdrop={currentTV.backdrop_path}
          title={currentTV.original_title}
          description={currentTV.overview}
        />
      }
    </Fragment>
  );
};

const mapStateToProps = state => ({
  loading: state.loading,
  currentTV: state.currentTV,
});

CurrentTVSerieContainer.propTypes = {
  dispatch: func.isRequired,
  match: object.isRequired,
  currentTV: object.isRequired,
  loading: bool.isRequired,
};

export default connect(mapStateToProps)(CurrentTVSerieContainer);
