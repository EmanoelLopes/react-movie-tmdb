import styled from 'styled-components';
import { media, colors } from 'utils/styled';

export const LogoWrapper = styled.span`
  color: ${colors.movieDBColor};
  display: flex;
  font-size: 18px;

  a {
    color: ${colors.movieDBColor};
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  ${media.desktop`
    font-size: 22px;
  `}

  svg {
    height: 3em;
    margin-right: 10px;
    width: 3em !important;

    &.fa-react {
      width: 20px !important;
      height: 20px;
    }
  }
`;
