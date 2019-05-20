import styled from 'styled-components';
import { colors } from 'utils/styled';

export const SubheaderWrapper = styled.section`
  background-color: ${colors.movieDBColor};
  color: ${colors.mainColor};
  display: flex;
  justify-content: center;
  padding: 15px 0;

  .container {
    justify-content: space-between;
  }

  .navigation {
    > a {
      color: ${colors.mainColor};
      font-size: 18px;
      margin-right: 15px;
      text-decoration: none;
    }
  }

  select {
    background-color: ${colors.movieDBColor};
    border: none;
    font-size: 15px;
    max-width: 130px;
  }
`;
