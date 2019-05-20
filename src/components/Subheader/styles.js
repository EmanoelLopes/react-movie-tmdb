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
      margin-right: 15px;
      color: ${colors.mainColor};
      text-decoration: none;
    }
  }
`;
