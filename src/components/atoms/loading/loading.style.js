import styled, { keyframes } from "styled-components";

export const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 10px 0;

  svg {
    animation: ${spinner} 1s linear infinite;
  }
`;
