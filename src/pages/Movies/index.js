import React from 'react';
import { MoviesContainer } from 'containers';
import { PageWrapper, Container } from 'utils/styled';

const Movies = () => {
  return (
    <PageWrapper>
      <Container>
        <MoviesContainer />
      </Container>
    </PageWrapper>
  );
};

export default Movies;
