import React, { Fragment } from 'react';
import { number } from 'prop-types';
import { VoteAverage } from './styles';

const handleRatingStatyles = value => {
  return {
    width: `${value / 10 * 100}%`,
    backgroundColor: `${(value >= 7 && value < 10) ? '#01d277' : (value < 5) ? 'red' : 'orange' }`
  }
};

const Rating = ({ rating }) => {
  return (
    <Fragment>
      <VoteAverage>
        <small
          style={handleRatingStatyles(rating)}>
          <span>{rating}</span>
        </small>
      </VoteAverage> 
    </Fragment>
  );
};

Rating.propTypes = {
  rating: number.isRequired,
};

export default Rating;

