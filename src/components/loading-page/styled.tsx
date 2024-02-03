import styled from "styled-components";

export const LoadingPageWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100 * var(--vh));
  z-index: 1900;
  background: rgba(0, 0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
`;
