import React from 'react';
import { number, string } from 'prop-types';
import { images } from 'utils/styled';
import { CastContainer } from './styles';

const CastCard = props => {
  const {
    id,
    profile,
    name,
    character
  } = props;

  return (
    <CastContainer key={id}>
      <img
        src={(profile)
            ? `${images.path}${images.profile}${profile}`
            : `${images.placeholder.profile}`
        }
        alt={name}
      />
      <h4>{`${name} (${character})`}</h4>
    </CastContainer>
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