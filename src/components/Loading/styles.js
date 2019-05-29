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
  align-items: center;
  color: #01d277;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 50px 0;
  width: 100%;
  z-index: 1;

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

