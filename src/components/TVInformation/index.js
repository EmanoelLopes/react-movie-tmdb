import React from 'react';
import { string, number } from 'prop-types';
import { TVInformationContainer } from './styles';

const TVInformation = props => {
  const {
    firstAirDate,
    numberOfEpisodes,
    seasonNumber,
    episodeNumber,
    episodeName,
    homepage,
  } = props;

  return (
    <TVInformationContainer>
      <p><strong>First air date: </strong> {firstAirDate}</p>
      <p><strong>Number of episodes: {numberOfEpisodes}</strong></p>
      <p><strong>Current season: {seasonNumber}</strong></p>
      <p>
        <strong>Last episode to air: &nbsp;
          {episodeNumber} - {episodeName} 
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
  seasonNumber: number,
  episodeNumber: number,
  episodeName: string,
  homepage: string,
};

TVInformation.defaulProps = {
  firstAirDate: '',
  numberOfEpisodes: 0,
  seasonNumber: 0,
  episodeNumber: 0,
  episodeName: 0,
  homepage: '',
};

export default TVInformation;
