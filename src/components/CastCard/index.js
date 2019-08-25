import React from 'react';
import { number, string } from 'prop-types';
import { images } from 'utils/styled';
import { StyledCast } from './styles';

const CastCard = props => {
  const {
    id,
    profile,
    name,
    character
  } = props;

  return (
    <StyledCast key={id}>
      <img
        src={(profile)
            ? `${images.path}${images.profile}${profile}`
            : `${images.placeholder.profile}`
        }
        alt={name}
      />
      <h4>{name}<br />{character}</h4>
      <p></p>
    </StyledCast>
  );
};

CastCard.propTypes = {
  id: number.isRequired,
  profile: string,
  name: string.isRequired,
  character: string.isRequired,
};

CastCard.defaultProps = {
  profile: `${images.placeholder.profile}`,
};

export default CastCard;
