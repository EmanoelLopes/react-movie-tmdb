import React from 'react';
import { string, number } from 'prop-types';
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
      <p><strong>First air date: </strong> {firstAirDate}</p>
      <p><strong>Number of seasons: {numberOfSeasons}</strong></p>
      <p><strong>Number of episodes: {numberOfEpisodes}</strong></p>
      <p><strong>Current season: {seasonNumber}</strong></p>
      <p>
        <strong>Last episode to air: &nbsp;
          {episodeNumber} - {episodeName} 
        </strong>
      </p>
      <p>
        <strong>Next episode to air: &nbsp;
          {nextEpisodeNumber} - {nextEpisodeName} 
        </strong>
      </p>
      <p>
        <strong>Official Site: </strong>
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
