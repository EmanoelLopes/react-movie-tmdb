import styled from 'styled-components';
import { media } from 'utils/styled';

export const LogoWrapper = styled.span`
  color: #01d277
  display: flex;
  font-size: 18px;

  a {
    color: #01d277;
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
  }
`;
