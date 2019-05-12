import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
import { colors, media } from 'utils/styled';

const imagesPath = `http://image.tmdb.org/t/p/w500`;

const CardFeatured = styled.div`
  background-image: url(${props => `${imagesPath}${props.backdrop}`});
  color: #fff;

  ${media.desktop`
    background-image: none;
    color: ${colors.mainColor};
  `}

  background-size: cover;
  background-position: top center;
  border: 5px solid ${colors.mainColor};
  box-shadow: 2px 2px 5px #ddd;
  display: flex;

  .card-poster figure,
  .card-poster img {
    height: 100%;
  }

  .card-poster img {
    display: none;
    width: 185px;

    ${media.desktop`
      display: block;
    `}
  }

  .card-info {
    padding: 15px;
    min-height: 300px;
  }

  .card-info h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }

  .card-info a {
    color: #fff;
    display: block;
    width: 100%;
    text-decoration: none;

    ${media.desktop`
      color: ${colors.mainColor};
    `}

    &:hover {
      text-decoration: uderline;
    }
  }
`;

const Card = props => {
  const { title, description, poster, id, backdrop } = props;

  return (
    <CardFeatured backdrop={backdrop}>
      <div className="card-poster">
        <figure>
          <img src={`${imagesPath}${poster}`} alt={title}/>
        </figure>
      </div>
      <div className="card-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={id}>More info</Link>
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
};

Card.defaultProps = {
  poster: '',
  title: '',
  description: '',
  id: '',
  backdrop: '',
};

export default Card;
