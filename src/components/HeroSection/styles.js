import styled from 'styled-components';
import { media, imagesPath } from 'utils/styled';

export const Hero = styled.section`
  background-attachment: fixed;
  background-image: url(${props => `${imagesPath}w1280${props.backdrop}`});
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  ${media.desktop`
    height: 700px;
  `}

  .hero-info {
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    display: flex;
    justify-content: center;
    padding: 50px 0;

    .container {
      flex-direction: row;
    }

    h1 {
      font-size: 32px;
      text-transform: uppercase;
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

    .vote-average {
      background-color: #fff;
      display: inline-block;
      height: 25px;
      margin: 0 15px;
      max-width: 300px;
      vertical-align: middle;
      width: 100%;

      small {
        background-color: #01d277;
        display: block;
        height: 100%;
      }
    }
  }

  .hero-poster {
    margin-right: 25px;

    img{
      max-width: 200px;
      border: 3px solid #fff;
    }
  }
`;
