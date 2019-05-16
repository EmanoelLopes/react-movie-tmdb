import React, { Fragment } from 'react';
import { string, bool, array, number } from 'prop-types';
import { images } from 'utils/styled';
import Rating from 'components/Rating';
import { Hero } from './styles';

const HeroSection = props => {
  const {
    title,
    description,
    backdrop,
    isCurrent,
    posterPath,
    releaseDate,
    genres,
    createdBy,
    rating,
  } = props;

  return (
    <Hero backdrop={backdrop}>
      <div className="hero-info">
        <div className="container">
          {(isCurrent) &&
            <div className="hero-poster">
              <figure>
                {(!!posterPath) && 
                  <img src={`${images.path}${images.poster}${posterPath}`} alt={title} />
                }
              </figure>
            </div>
          }
          <div className="hero-overview">
            <h1 className="hero-title">{title}</h1>
            {(isCurrent) && 
              <Fragment>
                <h2>Release: {releaseDate}</h2>
                <h3>By: {createdBy.map((director, index) => {
                    return (
                      <span className="creted-by" key={director.id}>      
                        {director.name} 
                        {createdBy.length -1 !== index ? ', ': '' }
                      </span>
                    );
                  })
                }</h3>
                <h3>Genres: {genres.map(genre => {
                  return (
                    <span className="genre" key={genre.id}>{genre.name} </span>
                  );
                })}</h3>
                <h3>
                  IMDB Rating:
                  <Rating rating={rating} />
                </h3>
              </Fragment>
            }
            <p className="hero-description">Overview: {description}</p>
          </div>
        </div>
      </div>
    </Hero>
  );
};

HeroSection.propTypes = {
  title: string.isRequired,
  backdrop: string.isRequired,
  description: string.isRequired,
  posterPath: string,
  isCurrent: bool,
  releaseDate: string,
  createdBy: array,
  genres: array,
  rating: number,
};

HeroSection.defaultProps = {
  title: '',
  backdrop: '',
  description: '',
  posterPath: '',
  isCurrent: false,
  releaseDate: '',
  createdBy: [],
  genres: [],
  rating: 0,
};

export default HeroSection;
