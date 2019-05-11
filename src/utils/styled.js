import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const colors = {
  mainColor: '#081c24'
};

const fonts = {
  sourceSans: '\'Source Sans Pro\', sans-serif',
};

const size = {
  smallDesktop: 992,
  largeDesktop: 1200,
  tablet: 768,
  phone: 576,
};

export const device = {
  smallDesktop: size.smallDesktop,
  largeDesktop: size.largeDesktop,
  tablet: size.tablet,
  mobile: size.mobile,
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  /* Fill with default styles */
  html, body {
    font-family: ${fonts.sourceSans};
  }

  .container {
    display: flex;
    max-width: 1200px;
    padding: 0 15px;
    width: 100%;
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
    display: flex;
    color: ${colors.mainColor};
    justify-content: center;

    .container {
      flex-direction: column;
    }
  }

  .rm-footer {
    background-color: #ddd;
    display: flex;
    justify-content: center;
    margin-top: 25px;
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
