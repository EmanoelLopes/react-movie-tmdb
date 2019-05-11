import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

const CardFeatured = styled.div`
  border: 1px solid #ddd;
  box-shadow: 2px 2px 5px #ddd;
  display: flex;

  .card-poster figure,
  .card-poster img {
    height: 100%;
  }

  .card-poster img {
    display: block;
    width: 185px;
  }

  .card-info {
    padding: 15px;
  }

  .card-info h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

const Card = props => {
  const { title, description, poster, id } = props;

  return (
    <CardFeatured>
      <div className="card-poster">
        <figure>
          <img src={`http://image.tmdb.org/t/p/w500${poster}`} alt={title}/>
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
};

Card.defaultProps = {
  poster: '',
  title: '',
  description: '',
  id: '',
};

export default Card;
