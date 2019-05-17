import styled from 'styled-components';
import { colors, media, images } from 'utils/styled';

const { path, poster, placeholder } = images;

export const CardFeatured = styled.div`
  background-color: #fff;
  background-image: url(
    ${props => (props.backdrop)
      ? `${path}${poster}${props.backdrop}`
      : `${placeholder.backdrop}`
    }
  );
  color: #fff;

  ${media.desktop`
    background-image: none;
    color: ${colors.mainColor};
  `}

  > a {
    color: ${colors.white};
    display: flex;
    flex-wrap: wrap;
    height: 100%;
    text-decoration: none;

    ${media.desktop`
      color: ${colors.mainColor};
    `}
  }

  background-size: cover;
  background-position: top center;
  border: 5px solid ${colors.mainColor};

  .card-poster figure,
  .card-poster img {
    height: 100%;
  }

  .card-poster img {
    display: none;
    width: 100%;

    ${media.desktop`
      display: block;
    `}
  }

  .card-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 15px;

    ${media.desktop`
      justify-content: flex-start;
    `}
  }

  .card-info-wrapper {
    background-color: rgba(0,0,0,.7);

    ${media.desktop`
      background-color: transparent;
    `}
  }

  .card-info h3 {
    font-size: 20px;
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
