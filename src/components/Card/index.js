import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { CardFeatured } from './styles';
import { images } from 'utils/styled';
import { textTruncate } from 'utils/helpers';

const Card = props => {
  const {
    title,
    description,
    poster,
    id,
    backdrop,
    release,
  } = props;

  return (
    <CardFeatured backdrop={backdrop}>
      <Link to={id}>
        <div className="card-poster">
          <figure>
            <img src={`${images.path}${images.poster}${poster}`} alt={title}/>
          </figure>
        </div>
        <div className="card-info">
          <div className="card-info-wrapper">
            <h3>{title}</h3>
            <small><FontAwesomeIcon icon={faCalendarAlt} /> {release}</small>
            <p>{textTruncate(description, 80)} [more info]</p>
          </div>
        </div>
      </Link>
    </CardFeatured>
  );
};

Card.propTypes = {
  poster: string,
  title: string,
  description: string,
  id: string,
  backdrop: string,
  release: string,
};

Card.defaultProps = {
  poster: '',
  title: '',
  description: '',
  id: '',
  backdrop: '',
  release: '',
};

export default Card;
