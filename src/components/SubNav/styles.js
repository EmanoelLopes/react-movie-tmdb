import styled from 'styled-components';
import { media, colors } from 'utils/styled';

export const StyledSubNav = styled.nav`
  background-color: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 25px;

  ${media.desktop`
    flex-direction: row;
  `}
`;

export const SubNavList = styled.ul`
  display: inline-flex;
  justify-content: space-between;

  ${media.desktop`
    justify-content: flex-start;
  `}
`;

export const SubNavItem = styled.li`
  text-align: center;

  ${media.desktop`
    margin-right: 15px;
  `}

  > a {
    color: ${colors.mainColor};
    font-size: 18px;
    text-decoration: none;
  }

  > a:hover {
    text-decoration: underline;
  }

  > a.is-active {
    color: ${colors.movieDBColor};
  }
`;
