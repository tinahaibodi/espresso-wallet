import { createGlobalStyle } from "styled-components";

import { HelveticaMedium, HankenGrotesk } from "@/public/assets/fonts/fonts";
import { devices } from "@/utils/devices";
import {
  COLOR_BLACK,
  COLOR_GRAY_LIGHT,
  COLOR_GREEN,
  COLOR_PINK,
  COLOR_WHITE,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";

export const GlobalStyle = createGlobalStyle<{ darkTheme: boolean }>`
    body {
      margin:0;
      padding:0;
      border: 0;
      outline: 0;
      overflow-x: hidden;
      background-size: auto;
      background-color: ${({ darkTheme }) =>
        darkTheme ? COLOR_BLACK : COLOR_WHITE};
      font-family: ${HelveticaMedium.style.fontFamily};

      &:before {
        content: "";
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: ${COLOR_PINK};
        opacity: 0.4;
        filter: blur(87px);
        transform: matrix(1, 0, -0.08, 1, 0, 0);
        width: 35%;
        height: 40%;
      }

      &:after {
        content: "";
        position: fixed;
        bottom: 0;
        right: 0;
        background-color: ${COLOR_GREEN};
        opacity: 0.4;
        filter: blur(87px);
        width: 28%;
        height: 55%;
        transform: matrix(1, -1, 0.08, 1, 0, 0);
      }
    }

    :root {
      color-scheme: dark;
    }

    * {
      box-sizing: border-box;
      border: 0 solid;
    }
    
    html {
      scroll-behavior: smooth;
    }

    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    h1 {
      font-family: ${HankenGrotesk.style.fontFamily};
    }

    h1, h2, h3, h4, h5, p {
      margin: 0;
      color: ${({ darkTheme }) =>
        darkTheme ? COLOR_WHITE_LIGHT : COLOR_BLACK};
    }

    h2 {
      font-size: 28px;
      color: ${({ darkTheme }) => (darkTheme ? COLOR_GRAY_LIGHT : COLOR_BLACK)};
    }

    button {
      font-family: ${HelveticaMedium.style.fontFamily};
    }
`;

export const PageHideOuterScroll = createGlobalStyle<{
  shouldHide: boolean;
}>`
  @media ${devices.mobileM} {
    body {
      overflow-y: ${(p) => (p.shouldHide ? "hidden" : "auto")};
    }
  }
`;
