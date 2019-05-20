import React from 'react';
import { string } from 'prop-types';
import intl from 'react-intl-universal';
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
            <img src={`${images.path}${images.poster}${poster}`} alt={title} lazyload="on"/>
          </figure>
        </div>
        <div className="card-info">
          <div className="card-info-wrapper">
            <h3>{title}</h3>
            <small><FontAwesomeIcon icon={faCalendarAlt} /> {release}</small>
            <p>{
              (description) 
                ? <span>{textTruncate(description, 80)} <br /> [{intl.get('MORE_INFO')}]</span>
                : <span>({intl.get('NO_INFORMATION_PROVIDED')}) <br /> [{intl.get('MORE_INFO')}] </span>}
            </p>
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
