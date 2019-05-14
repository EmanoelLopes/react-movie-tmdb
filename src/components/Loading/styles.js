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
  color: #01d277;
  z-index: 1;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0, .9);
  top: 0;
  left: 0;
  right: 0;
  justify-content: center;
  align-items: center;

  span {
    font-size: 32px;
    margin-bottom: 15px;
  }

  svg {
    animation: ${spinning} 1s linear infinite;
    color: #01d277;
    width: 5em !important;
    height: 5em;

  }
`;

