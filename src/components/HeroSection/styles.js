import styled from 'styled-components';
import { media, images } from 'utils/styled';

const { path, backdrop, placeholder } = images;

export const Hero = styled.section`
  background-attachment: fixed;
  background-image: url(
    ${props => (props.backdrop) 
      ? `${path}${backdrop}${props.backdrop}`
      : `${placeholder.backdrop}`
    }
  );
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  ${media.desktop`
    height: 700px;
    background-position: center 0;
  `}

  .hero-info {
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 50px 0;

    .container {
      ${media.desktop`
        flex-direction: row;
      `}
    }

    h1 {
      font-size: 32px;
      text-align: center;
      text-transform: uppercase;

      ${media.desktop`
        text-align: left;
      `}
    }

    h2 {
      font-size: 28px;
    }

    h3 {
      font-size: 22px;
    }

    h1, h2, h3 {
      margin-bottom: 15px; 
    }

    p {
      font-size: 22px;
    }
  }

  .hero-poster {
    ${media.desktop`
      margin-right: 25px;
    `}


    figure {
      text-align: center;
      margin-bottom: 15px;
    }

    img{
      max-width: 300px;
      border: 3px solid #fff;

      ${media.desktop`
        max-width: 200px;
      `}
    }
  }
`;
