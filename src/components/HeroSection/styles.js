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
    padding: 25px;

    h1 {
      font-size: 32px;
      margin-bottom: 15px; 
    }

    p {
      font-size: 22px;
    }
  }
`;
