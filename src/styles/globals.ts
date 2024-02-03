import { createGlobalStyle, css } from "styled-components";
import { device } from "./media";

function renderSpace(type: "margin" | "padding", prefix = "") {
  return [0, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 30, 36, 40, 60]
    .map((size) =>
      ["", "-top", "-left", "-bottom", "-right"]
        .map(
          (dir) =>
            `.${prefix}${type.slice(0, 1)}${dir.slice(
              1,
              2
            )}-${size} { ${type}${dir}: ${size}px !important; }`
        )
        .join("\n")
    )
    .join("\n");
}

const style = css`
  html,
  body {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif !important;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    padding: 0;
    margin: 0;

    scroll-behavior: smooth;
  }

  body {
    /* overflow: hidden !important; */
  }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  input,
  textarea,
  select,
  button {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;

    /* border: 0 none;
    outline: 0 none;
    background: transparent; */

    /* cursor: none; */

    :disabled {
      opacity: 1;
    }
  }

  img {
    max-width: 100%;
    height: auto;

    display: block;
  }

  /* h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0px;

    line-height: 100%;
    letter-spacing: 0;
  }

  h1 {
    font-size: 100px;
    font-weight: 600;
  }

  h2 {
    font-size: 80px;
    font-weight: 600;
  }

  h3 {
    font-size: 56px;
    font-weight: 400;
  }

  h4 {
    font-size: 40px;
    font-weight: 400;
  }

  h5 {
    font-size: 32px;
    font-weight: 400;
  }

  h6 {
    font-size: 13px;
    font-weight: 500;
  } */

  p {
    margin: 0px;

    font-size: 18px;
    font-weight: 400;
    line-height: 200%;
    letter-spacing: 0;
  }

  a {
    margin: 0px;

    text-decoration: none;
    /* cursor: none; */
  }

  .body-2 {
    font-weight: 300;
    font-size: 16px;
  }

  label {
    margin: 0;

    font-size: 15px;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0;
  }

  .hide-mobile {
    @media ${device.mobile} {
      display: none !important;
    }
  }

  .hide-desktop {
    @media ${device.noMobile} {
      display: none !important;
    }
  }

  .full-width {
    width: 100% !important;
  }

  .text-light {
    font-weight: 300 !important;
  }

  .text-regular {
    font-weight: 400 !important;
  }

  .text-medium {
    font-weight: 500 !important;
  }

  .text-semibold {
    font-weight: 600 !important;
  }

  .pointer {
    cursor: pointer;
  }

  ${renderSpace("margin")};
  ${renderSpace("padding")};

  @media ${device.mobile} {
    ${renderSpace("margin", "sm-")};
    ${renderSpace("padding", "sm-")};
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${style} // no init
`;
