import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { CardFeatured } from './styles';
import { imagesPath } from 'utils/styled';
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
      <div className="card-poster">
        <figure>
          <img src={`${imagesPath}w500${poster}`} alt={title}/>
        </figure>
      </div>
      <div className="card-info">
        <div className="card-info-wrapper">
          <h3>{title}</h3>
          <small>{release}</small>
          <p>{textTruncate(description, 150)}</p>
          <Link to={id}>More info</Link>
        </div>
      </div>
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
