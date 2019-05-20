import React, { Fragment } from 'react';
import { string, bool, array, number } from 'prop-types';
import intl from 'react-intl-universal';
import Rating from 'components/Rating';
import { Hero } from './styles';
import { images } from 'utils/styled';

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
                  <img
                    src={`${images.path}${images.poster}${posterPath}`}
                    alt={title}
                    lazyload="on"
                  />
                }
              </figure>
            </div>
          }
          <div className="hero-overview">
            <h1 className="hero-title">{title}</h1>
            {(isCurrent) && 
              <Fragment>
                  <h2>{intl.get('HERO_SECTION.RELEASE')}: {releaseDate}</h2>
                  <h3>{intl.get('HERO_SECTION.BY')}: {createdBy.map((director, index) => {
                    return (
                      <span className="creted-by" key={director.id}>      
                        {director.name} 
                        {createdBy.length -1 !== index ? ', ': '' }
                      </span>
                    );
                  })
                }</h3>
                  <h3>{intl.get('HERO_SECTION.GENRES')}: {genres.map((genre, index) => {
                  return (
                    <span className="genre"key={genre.id}>
                      {genre.name}
                      {genres.length -1 !== index ? ', ': '' }
                    </span>
                  );
                })}</h3>
                <h3>
                  {intl.get('HERO_SECTION.IMDB_RATING')}:
                  <Rating rating={rating} />
                </h3>
              </Fragment>
            }
            <p className="hero-description">{intl.get('HERO_SECTION.OVERVIEW')}: {description}</p>
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
