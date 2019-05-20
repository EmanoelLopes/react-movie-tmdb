import React from 'react';
import { string, number } from 'prop-types';
import intl from 'react-intl-universal';
import { TVInformationContainer } from './styles';

const TVInformation = props => {
  const {
    firstAirDate,
    numberOfEpisodes,
    numberOfSeasons,
    seasonNumber,
    episodeNumber,
    episodeName,
    nextEpisodeNumber,
    nextEpisodeName,
    homepage,
  } = props;

  return (
    <TVInformationContainer>
      <p><strong>{intl.get('TV_SERIE_PAGE.DETAILS.FIRST_AIR_DATE')}: </strong> {firstAirDate}</p>
      <p><strong>{intl.get('TV_SERIE_PAGE.DETAILS.NUMBER_OF_SEASONS')}: {numberOfSeasons}</strong></p>
      <p><strong>{intl.get('TV_SERIE_PAGE.DETAILS.NUMBER_OF_EPISODES')}: {numberOfEpisodes}</strong></p>
      <p><strong>{intl.get('TV_SERIE_PAGE.DETAILS.CURRENT_SEASON')}: {seasonNumber}</strong></p>
      <p>
        <strong>{intl.get('TV_SERIE_PAGE.DETAILS.LAST_EPISODE')}: &nbsp;
          {episodeNumber} - {episodeName} 
        </strong>
      </p>
      <p>
        <strong>{intl.get('TV_SERIE_PAGE.DETAILS.NEXT_EPISODE')}: &nbsp;
          {nextEpisodeNumber} - {nextEpisodeName} 
        </strong>
      </p>
      <p>
        <strong>{intl.get('TV_SERIE_PAGE.DETAILS.OFFICIAL_SITE')}: </strong>
        <a
          href={`${homepage}`}
          target="_blank"
          rel="noopener noreferrer">{homepage}
        </a>
      </p>
    </TVInformationContainer>
  );
};

TVInformation.propTypes = {
  firstAirDate: string,
  numberOfEpisodes: number,
  numberOfSeasons: number,
  seasonNumber: number,
  episodeNumber: number,
  episodeName: string,
  nextEpisodeNumber: number,
  nextEpisodeName: string,
  homepage: string,
};

TVInformation.defaulProps = {
  firstAirDate: '',
  numberOfEpisodes: 0,
  numberOfSeasons: 0,
  seasonNumber: 0,
  episodeNumber: 0,
  episodeName: 0,
  nextEpisodeNumber: 0,
  nextEpisodeName: '',
  homepage: '',
};

export default TVInformation;
