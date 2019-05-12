import React from 'react';
import { string } from 'prop-types';
import { Hero } from './styles';

const HeroSection = ({ title, description, backdrop }) => (
  <Hero backdrop={backdrop}>
    <div className="hero-info">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  </Hero>
);

HeroSection.propTypes = {
  title: string.isRequired,
  backdrop: string.isRequired,
  description: string.isRequired,
};

export default HeroSection;
