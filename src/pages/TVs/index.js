import React from 'react';
import intl from 'react-intl-universal';
import { TVSeriesContainer } from 'containers';
import { PageWrapper, Container, H1 } from 'utils/styled';
import { endpoints } from 'services';

const TVs = () => {
  return (
    <PageWrapper>
      <Container>
        <H1>{intl.get('TVS_PAGE.TITLE')}</H1>
        <TVSeriesContainer type={endpoints.tv.topRated} />
      </Container>
    </PageWrapper>
  );
};

export default TVs;
