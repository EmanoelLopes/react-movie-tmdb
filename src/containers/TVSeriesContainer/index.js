import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTVSeries } from 'store/tvSeries/actions';
import { array, func } from 'prop-types';
import Grid from 'components/Grid';
import Card from 'components/Card';

class TVSeriesContainer extends Component {
  getTVSeries = () => {
    const { dispatch, getSeries } = this.props;
    dispatch(fetchTVSeries(getSeries));
  };

  renderTVSeries = tvs => {
    return (!!tvs.length) && tvs.map(tv => {
      return (
        <React.Fragment key={tv.id}>
          <Card  
            title={tv.original_name}
            description={tv.overview}
            poster={tv.poster_path}
            id={`/tv/${tv.id}`}
            backdrop={tv.backdrop_path}
          />
        </React.Fragment>
      );
    });
  };

  componentDidMount() {
    this.getTVSeries();
  }

  render() {
    const { tvSeries } = this.props;

    return (
      <Grid>
        {this.renderTVSeries(tvSeries)}
      </Grid>
    );
  }
}

TVSeriesContainer.propTypes = {
  tvSeries: array,
  dispatch: func,
  getSeries: func,
};

TVSeriesContainer.defaultProps = {
  tvSeries: [],
  dispatch: () => null,
  getSeries: () => null,
};

const mapStateToProps = state => ({
  tvSeries: state.tvSeries,
});

export default connect(mapStateToProps)(TVSeriesContainer);
