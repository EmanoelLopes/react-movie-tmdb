import React from 'react';
import intl from 'react-intl-universal';
import { MoviesContainer } from 'containers';
import { PageWrapper, Container, H1 } from 'utils/styled';
import { endpoints } from 'services';

const Movies = () => {
  return (
    <PageWrapper>
      <Container>
        <H1>{intl.get('MOVIES_PAGE.TITLE')}</H1>
        <MoviesContainer type={endpoints.movie.topRated} />
      </Container>
    </PageWrapper>
  );
};

export default Movies;
