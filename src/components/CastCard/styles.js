import styled from 'styled-components';
import { media } from 'utils/styled';

export const CastContainer = styled.div`
  background-color: rgba(0,0,0,.7);
  display: flex;
  max-width: 300px;
  text-align: center;

  ${media.desktop`
    max-width: 230px;
  `}

  h4 {
    color: #fff;
    padding: 15px;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100px;
  }
`;

