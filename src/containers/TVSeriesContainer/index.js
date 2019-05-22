import React, { Component, Fragment } from 'react';
import { array, func, bool, string } from 'prop-types';
import { connect } from 'react-redux';
import { fetchTVSeries } from 'store/tvSeries/actions';
import Grid from 'components/Grid';
import Card from 'components/Card';
import Loading from 'components/Loading';

class TVSeriesContainer extends Component {
  getTVSeries = () => {
    const { dispatch, getSeries, type } = this.props;
    dispatch(fetchTVSeries(type, getSeries));
  };

  renderTVSeries = tvs => {
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

  componentDidMount() {
    this.getTVSeries();
  }

  render() {
    const { tvSeries, loading } = this.props;

    return (
      <Fragment>
        {(loading)
          ? <Loading />
          : <Fragment>
              <Grid>
                {this.renderTVSeries(tvSeries)}
              </Grid>
            </Fragment>
        }
      </Fragment>
    );
  }
}

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

export default connect(mapStateToProps)(TVSeriesContainer);
