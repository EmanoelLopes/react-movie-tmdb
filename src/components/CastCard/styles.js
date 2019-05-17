import styled from 'styled-components';
import { media, colors } from 'utils/styled';

export const CastContainer = styled.div`
  background-color: rgba(0,0,0,.7);
  border: 1px solid ${colors.mainColor};
  display: flex;
  width: 100%;
  text-align: center;

  ${media.desktop`
    max-width: 230px;
  `}

  h4 {
    align-items: center;
    color: ${colors.white};
    display: flex;
    justify-content: center;
    padding: 15px;
    width: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 100px;
  }
`;

