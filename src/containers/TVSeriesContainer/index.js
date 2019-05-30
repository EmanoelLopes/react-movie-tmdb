import React, { Component, Fragment, Suspense, lazy } from 'react';
import { array, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchTVSeries } from 'store/tvSeries/actions';
import Grid from 'components/Grid';
import Loading from 'components/Loading';

const Card = lazy(() => import('components/Card'));

class TVSeriesContainer extends Component {
  getTVSeries = () => {
    const { dispatch, getSeries, type } = this.props;
    dispatch(fetchTVSeries(type, getSeries));
  };

  renderTVSeries = tvs => {
    return (!!tvs.length) && tvs.map(tv => {
      return (
        <Suspense
          key={tv.id}
          fallback={<div>Loading...</div>}>
          <Card  
            title={tv.original_name}
            description={tv.overview}
            poster={tv.poster_path}
            id={`/tv/${tv.id}`}
            backdrop={tv.backdrop_path}
          />
        </Suspense>
      );
    });
  };

  componentDidMount() {
    this.getTVSeries();
  }

  render() {
    const { tvSeries, loading } = this.props;

    return (
      <Fragment>
        {(loading) && <Loading />}
        {(tvSeries && (!loading)) && (
          <Grid>
            {this.renderTVSeries(tvSeries)}
          </Grid>
        )}
      </Fragment>
    );
  }
}

TVSeriesContainer.propTypes = {
  tvSeries: array,
  dispatch: func,
  getSeries: func,
  loading: bool.isRequired,
  type: string.isRequired,
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

export default connect(mapStateToProps)(TVSeriesContainer);
