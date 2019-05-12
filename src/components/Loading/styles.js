import styled, { keyframes } from 'styled-components';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  display: flex;
  background: rgba(255,255,255, .8);
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${spinning} 1s linear infinite;
    width: 5em !important;
    height: 5em;
  }
`;

