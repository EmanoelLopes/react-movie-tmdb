import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { connect } from 'react-redux';
import {
  MoviesContainer,
  TVSeriesContainer,
  HeroSectionContainer,
} from 'containers';
import intl from 'react-intl-universal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faFilm } from '@fortawesome/free-solid-svg-icons';
import { PageWrapper, Container, H1 } from 'utils/styled';
import { endpoints } from 'services';

const HomeContainer = ({ loading }) => {
  const { movie, tv } = endpoints;

  return (
    <Fragment>
      <HeroSectionContainer />
      <PageWrapper>
        <Container>
          {(!loading) && 
            <H1>
              {intl.get('HOME.POPULAR_MOVIES_TITLE')} <FontAwesomeIcon icon={faFilm} />
            </H1>
          }
          <MoviesContainer type={movie.popular} />
          {(!loading) && 
            <H1>
              {intl.get('HOME.POPULAR_TV_SERIES_TITLE')} <FontAwesomeIcon icon={faTv} />
            </H1>
          }
          <TVSeriesContainer type={tv.popular} />
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
