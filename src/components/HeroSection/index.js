import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';

const SECTION = styled.section`
  display: flex;
  flex-direction: column;
`;

const HeroSection = ({ title, description }) => (
  <SECTION>
    <h1>{title}</h1>
    <p>{description}</p>
  </SECTION>
);

HeroSection.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
};

export default HeroSection;
