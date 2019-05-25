import React, { useEffect, Fragment } from 'react';
import { array, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTVSeries } from 'store/tvSeries/actions';
import Grid from 'components/Grid';
import Card from 'components/Card';
import Loading from 'components/Loading';

const TVSeriesContainer = props => {
  const {
    dispatch,
    getSeries,
    type,
    tvSeries,
    loading,
  } = props;

  const getTVSeries = () => {
    dispatch(fetchTVSeries(type, getSeries));
  };
  
  const renderTVSeries = tvs => {
    return (!!tvs.length) && tvs.map(tv => {
      return (
        <Fragment key={tv.id}>
          <Card
            title={tv.original_name}
            description={tv.overview}
            poster={tv.poster_path}
            id={`/tv/${tv.id}`}
            backdrop={tv.backdrop_path}
          />
        </Fragment>
      );
    });
  };
  
  useEffect(() => {
    getTVSeries();
  }, [getTVSeries]);

  return (
    <Fragment>
      {(loading) && <Loading />}
      <Fragment>
        <Grid>
          {renderTVSeries(tvSeries)}
        </Grid>
      </Fragment>
    </Fragment>
  );
};

TVSeriesContainer.propTypes = {
  tvSeries: array,
  dispatch: func,
  getSeries: func,
  type: string.isRequired,
  loading: bool.isRequired,
};

TVSeriesContainer.defaultProps = {
  tvSeries: [],
  dispatch: () => null,
  getSeries: () => null,
};

const mapStateToProps = state => ({
  tvSeries: state.tvSeries,
  loading: state.loading,
});

export default withRouter(connect(mapStateToProps)(TVSeriesContainer));
