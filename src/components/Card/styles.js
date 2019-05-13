import styled from 'styled-components';
import { colors, media, imagesPath } from 'utils/styled';

export const CardFeatured = styled.div`
  background-color: #fff;
  background-image: url(${props => `${imagesPath}w500${props.backdrop}`});
  color: #fff;

  ${media.desktop`
    background-image: none;
    color: ${colors.mainColor};
  `}

  background-size: cover;
  background-position: top center;
  border: 5px solid ${colors.mainColor};
  display: flex;

  .card-poster figure,
  .card-poster img {
    height: 100%;
  }

  .card-poster img {
    display: none;
    width: 185px;

    ${media.desktop`
      display: block;
    `}
  }

  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 300px;
    padding: 15px;

    ${media.desktop`
      justify-content: flex-start;
    `}
  }

  .card-info-wrapper {
    background-color: rgba(0,0,0,.7);
    padding: 15px;

    ${media.desktop`
      background-color: transparent;
    `}
  }

  .card-info h3 {
    font-size: 22px;
    margin-bottom: 15px;
  }
  .card-info small {
    display: block;
    margin-bottom: 15px;
  }

  .card-info p {
    margin-bottom: 15px;
  }

  .card-info a {
    border: 3px solid #fff;
    color: #fff;
    display: block;
    font-weight: 600;
    padding: 10px 15px;    
    width: 130px;
    text-align: center;
    text-decoration: none;

    ${media.desktop`
      color: ${colors.mainColor};
      border: 3px solid ${colors.mainColor};
    `}

    &:hover {
      text-decoration: uderline;
    }
  }
`;
