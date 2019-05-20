import styled, { css, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const colors = {
  mainColor: '#081c24',
  movieDBColor: '#01d277',
  white: '#fff',
};

export const fonts = {
  sourceSans: '\'Oswald\', sans-serif',
};

export const images = {
  path: 'https://image.tmdb.org/t/p/',
  poster: 'w500',
  backdrop: 'w1280',
  profile: 'w154',
  placeholder: {
    profile: 'https://placehold.jp/154x250.png?text=NO%20IMAGE', 
    poster: 'https://placehold.jp/320x500.png?text=NO%20IMAGE',
    backdrop: 'https://placehold.jp/1280x720.png?text=NO%20IMAGE',
  },
};

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
    height: 70px;
    justify-content: center;

    ${media.desktop`
      height: 90px;
    `}

    .container {
      justify-content: space-between;
      align-items: center;
    }

    .tmdb-logo {
      align-items: center;
      display: flex;
      height: 100%;
    }
  }

  .rm-main {
    align-items: center;
    background-color: #ddd;
    color: ${colors.mainColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-bottom: 50px;

    > div {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
    }

    .container {
      flex-direction: column;
    }
  }

  .rm-footer {
    background-color: ${colors.movieDBColor};
    display: flex;
    font-size: 18px;
    justify-content: center;
    padding: 25px 0;

    a {
      color: ${colors.mainColor};
      text-decoration: none;
    }

    .container {
      justify-content: center;
      align-items: center;
      text-align: center;
    }

    .react-site-link {
      color: #61dbfb;
      font-size: 22px;
    }

    .fa-heart {
      color: red;
    }
  }

  /* CSS Transition Group */
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
`;

export const H1 = styled.h1`
  font-size: 32px;
  margin: 25px 0;
  width: 100%;
  text-transform: uppercase;
`;
