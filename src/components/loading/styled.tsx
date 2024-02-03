import styled, { css, keyframes } from "styled-components";

export const LoadingWrapper = styled.div<{ isFullContent: boolean }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ isFullContent }) =>
    isFullContent
      ? css`
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1000;

          background: rgba(0, 0, 0, 0, 0.5);
        `
      : null}

  .loader {
    width: 48px;
    height: 48px;
    background: transparent;
    border-radius: 50%;
    position: relative;
    animation: skLinRotate 1s ease-in-out infinite alternate;
  }
  .loader:after {
    content: "";
    position: absolute;
    inset: 5px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: rgb(23, 107, 135);
  }
  @keyframes skLinRotate {
    95%,
    100% {
      transform: rotate(840deg);
    }
  }
`;
const rotation = keyframes`0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}`;

export const UploadLoading = styled.div`
  width: 24px;
  height: 24px;
  border: 2px dotted orange;
  border-radius: 50%;
  display: block;
  position: relative;

  :after {
    content: "";
    width: 24px;
    height: 24px;

    position: absolute;
    top: -2px;
    left: -2px;
    border-color: black black transparent transparent;
    border: 2px solid orange;

    border-radius: 50%;
    animation: ${rotation} 1s linear infinite;
  }
`;
