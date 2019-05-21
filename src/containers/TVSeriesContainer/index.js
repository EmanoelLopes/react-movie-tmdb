import React, { Component, Fragment } from 'react';
import { array, func, bool } from 'prop-types';
import { connect } from 'react-redux';
import { fetchTVSeries } from 'store/tvSeries/actions';
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import Grid from 'components/Grid';
import Card from 'components/Card';
import { H1 } from 'utils/styled';

class TVSeriesContainer extends Component {
  getTVSeries = () => {
    const { dispatch, getSeries } = this.props;
    dispatch(fetchTVSeries(getSeries));
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
        {(!loading) &&
        <Fragment>
          <H1>{intl.get('HOME.POPULAR_TV_SERIES_TITLE')} <FontAwesomeIcon icon={faTv} /></H1>
          <Grid>
            {this.renderTVSeries(tvSeries)}
          </Grid>
        </Fragment>}
      </Fragment>
    );
  }
}

TVSeriesContainer.propTypes = {
  tvSeries: array,
  dispatch: func,
  getSeries: func,
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
