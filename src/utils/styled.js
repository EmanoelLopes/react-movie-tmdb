import styled, { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const colors = {
  mainColor: '#081c24',
  white: '#fff',
};

export const fonts = {
  sourceSans: '\'Source Sans Pro\', sans-serif',
};

export const imagesPath = 'http://image.tmdb.org/t/p/';

const sizes = {
  largeDesktop: 1280,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* Fill with default styles */
  * { box-sizing: border-box; }

  html, body {
    font-family: ${fonts.sourceSans};
    overflow-x: hidden;
  }

  .container {
    display: flex;
    padding: 0 15px;
    width: 100%;

    ${media.desktop`
      max-width: ${sizes.largeDesktop}px;
    `}
  }

  .rm-header {
    align-items: center;
    background-color: ${colors.mainColor};
    color: #fff;
    display: flex;
    height: 120px;
    justify-content: center;

    .container {
      justify-content: space-between;
    }
  }

  .rm-main {
    align-items: center;
    background-color: #ddd;
    color: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: center;

    .container {
      flex-direction: column;
    }
  }

  .rm-footer {
    background-color: #ddd;
    display: flex;
    justify-content: center;
    padding: 15px 0;

    .container {
      justify-content: center;
    }
  }
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin: 15px 0;
`;
