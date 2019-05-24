import React from 'react';
import intl from 'react-intl-universal';
import { Switch, Route } from 'react-router-dom';
import SubNav from 'components/SubNav';
import { MoviesContainer } from 'containers';
import { PageWrapper, Container, H1 } from 'utils/styled';
import { endpoints } from 'services';

const {
  topRated,
  popular,
  upComing,
  nowPlaying,
} = endpoints.movie;

const TopRated = () => {
  return (
    <Container>
      <MoviesContainer type={topRated} />
    </Container>
  );
};

const Popular = () => {
  return (
    <Container>
      <MoviesContainer type={popular} />
    </Container>
  );
};

const NowPlaying = () => {
  return (
    <Container>
      <MoviesContainer type={nowPlaying} />
    </Container>
  );
};

const UpComing = () => {
  return (
    <Container>
      <MoviesContainer type={upComing} />
    </Container>
  );
};

const Movies = () => {
  const items = [
    { link: '/movies/top-rated', page: `${intl.get('SUBNAV.MOVIES.TOP_RATED')}` },
    { link: '/movies/popular', page: `${intl.get('SUBNAV.MOVIES.POPULAR')}` },
    { link: '/movies/now-playing', page: `${intl.get('SUBNAV.MOVIES.NOW_PLAYING')}` },
    { link: '/movies/up-coming', page: `${intl.get('SUBNAV.MOVIES.UP_COMING')}` },
  ];
  
  return (
    <PageWrapper>
      <Container>
        <H1>{intl.get('MOVIES_PAGE.TITLE')}</H1>
        <SubNav items={items} />
      </Container>
      <Switch>
        <Route exact path="/movies" component={TopRated} />
        <Route exact path="/movies/top-rated" component={TopRated} />
        <Route path="/movies/popular" component={Popular} />
        <Route path="/movies/up-coming" component={UpComing} />
        <Route path="/movies/now-playing" component={NowPlaying} />
      </Switch>
    </PageWrapper>
  );
};

export default Movies;
