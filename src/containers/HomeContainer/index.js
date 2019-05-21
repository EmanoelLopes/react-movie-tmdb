import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bool } from 'prop-types';
import {
  MoviesContainer,
  TVSeriesContainer,
  HeroSectionContainer,
} from 'containers';
import Loading from 'components/Loading';
import { PageWrapper, Container } from 'utils/styled';

const HomeContainer = ({ loading }) => {
  return (
    <Fragment>
      {(loading) && <Loading />}
      <HeroSectionContainer />
      <PageWrapper>
        <Container>
          <MoviesContainer />
          <TVSeriesContainer />
        </Container>
      </PageWrapper>
    </Fragment>
  );
};

HomeContainer.propTypes = {
  loading: bool.isRequired,
};

const mapStateToProps = state => ({
  loading: state.loading,
});

export default connect(mapStateToProps)(HomeContainer);
