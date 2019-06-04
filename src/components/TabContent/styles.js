import styled from 'styled-components';
import { FadeIn } from 'utils/styled';

export const StyledTab = styled.section`
  position: absolute;
  visibility: hidden;

  &.tab-active {
    animation: ${FadeIn} 1s;
    position: relative;
    visibility: visible;
  }
`;
