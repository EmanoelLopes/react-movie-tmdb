import React from 'react';
import intl from 'react-intl-universal';
import { Switch, Route, withRouter } from 'react-router-dom';
import SubNav from 'components/SubNav';
import { TVSeriesContainer } from 'containers';
import { PageWrapper, Container, H1 } from 'utils/styled';
import { endpoints } from 'services';

const {
  topRated,
  popular,
  onTheAir,
  airingToday,
} = endpoints.tv;

const TopRated = () => {
  return (
    <Container>
      <TVSeriesContainer type={topRated} />
    </Container>
  );
};

const Popular = () => {
  return (
    <Container>
      <TVSeriesContainer type={popular} />
    </Container>
  );
};

const UpComing = () => {
  return (
    <Container>
      <TVSeriesContainer type={airingToday} />
    </Container>
  );
};

const NowPlaying = () => {
  return (
    <Container>
      <TVSeriesContainer type={onTheAir} />
    </Container>
  );
};

const TVs = () => {
  const items = [
    { link: '/tvs/top-rated', page: `${intl.get('SUBNAV.TVS.TOP_RATED')}` },
    { link: '/tvs/popular', page: `${intl.get('SUBNAV.TVS.POPULAR')}` },
    { link: '/tvs/on-the-air', page: `${intl.get('SUBNAV.TVS.ON_TV')}` },
    { link: '/tvs/airing-today', page: `${intl.get('SUBNAV.TVS.AIRING_TODAY')}` },
  ];

  return (
    <PageWrapper>
      <Container>
        <H1>{intl.get('TVS_PAGE.TITLE')}</H1>
        <SubNav items={items} />
      </Container>
      <Switch>
        <Route exact path="/tvs" component={TopRated} />
        <Route exact path="/tvs/top-rated" component={TopRated} />
        <Route path="/tvs/popular" component={Popular} />
        <Route path="/tvs/on-the-air" component={UpComing} />
        <Route path="/tvs/airing-today" component={NowPlaying} />
      </Switch>
    </PageWrapper>
  );
};

export default withRouter(TVs);
