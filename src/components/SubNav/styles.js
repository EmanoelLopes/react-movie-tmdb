import styled from 'styled-components';
import { media, colors } from 'utils/styled';

export const SubNavList = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  padding: 25px 0;

  ${media.desktop`
  justify-content: flex-start;
  `}
`;

export const SubNavItem = styled.li`
  margin-right: 15px;

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
