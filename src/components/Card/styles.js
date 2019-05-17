import styled from 'styled-components';
import { colors, media, images } from 'utils/styled';

const { path, poster, placeholder } = images;

export const CardFeatured = styled.div`
  background-color: ${colors.white};
  background-image: url(
    ${props => (props.backdrop)
      ? `${path}${poster}${props.backdrop}`
      : `${placeholder.backdrop}`
    }
  );
  color: ${colors.white};

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
  border: 1px solid #ccc;

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
    padding: 10px;

    ${media.desktop`
      background-color: transparent;
      padding: 0;
    `}
  }

  .card-info h3 {
    font-size: 20px;
    margin-bottom: 15px;

    ${media.desktop`
      max-width: 200px;
      overflow: hidden;
      padding-bottom: 5px;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
  }
  .card-info small {
    display: block;
    margin-bottom: 15px;
  }

  .card-info p {
    margin-bottom: 15px;
  }

  .card-info a {
    border: 3px solid ${colors.white};
    color: ${colors.white};
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
