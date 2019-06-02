import React, { Fragment } from 'react';
import intl from 'react-intl-universal';
import {
  MoviesContainer,
  TVSeriesContainer,
  HeroSectionContainer,
} from 'containers';
import useTabs from 'hooks/useTabs';
import Tab from 'components/Tab';
import TabPane from 'components/TabPane';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTv, faFilm } from '@fortawesome/free-solid-svg-icons';
import { PageWrapper, Container, TabContainer } from 'utils/styled';
import { endpoints } from 'services';

const HomeContainer = () => {
  const {movie, tv} = endpoints;
  const [activeTab, setActiveTab] = useTabs(0);
  const contents = [
    {
      label: intl.get('HOME.POPULAR_MOVIES_TITLE'),
      component: <MoviesContainer type={movie.popular} />,
      icon: <FontAwesomeIcon icon={faFilm} />,
    },
    {
      label: intl.get('HOME.POPULAR_TV_SERIES_TITLE'),
      component: <TVSeriesContainer type={tv.popular} />,
      icon: <FontAwesomeIcon icon={faTv} />,
    },
  ];

  return (
    <Fragment>
      <HeroSectionContainer />
      <PageWrapper>
        <TabContainer>
          {contents.map(({label, icon}, index) => {
            return (
              <TabPane
                key={label}
                index={index}
                icon={icon}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
                label={label}
              />
            );
          })}
        </TabContainer>
        <Container>
          {contents.map(({ component }, index) => {
            return (
              <Tab
                key={index}
                index={index}
                isActive={activeTab === index}
                content={component}
              />
            );
          })}
        </Container>
      </PageWrapper>
    </Fragment>
  );
};

export default HomeContainer;
