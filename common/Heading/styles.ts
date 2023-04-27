import styled from "styled-components";

import { devices } from "@/utils/devices";
import {
  COLOR_BLACK_LIGHT,
  COLOR_GRAY,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";

export const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
  margin: 0;
  opacity: 0.5;
`;

export const Container = styled.div<{
  homePage?: boolean;
  titleColor?: string;
  darkTheme: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: ${({ homePage }) => (homePage ? "40px" : "28px")};
    line-height: ${({ homePage }) => (homePage ? "44px" : "29.4px")};
    font-weight: ${({ homePage }) => (homePage ? "600" : "400")};
  }

  p {
    font-size: ${({ homePage }) => (homePage ? "12px" : "16px")};
    line-height: ${({ homePage }) => (homePage ? "17.07px" : "20px")};
    color ${({ homePage, titleColor, darkTheme }) =>
      homePage && darkTheme
        ? COLOR_WHITE_LIGHT
        : homePage && !darkTheme
        ? COLOR_BLACK_LIGHT
        : titleColor
        ? titleColor
        : COLOR_GRAY};
    opacity: ${({ homePage }) => (homePage ? "0.75" : "1")};
    margin: ${({ homePage }) => (homePage ? "10px 0 20px 0" : "0")};
  }

  @media ${devices.tabletL} {
    h1 {
      font-size: ${({ homePage }) => (homePage ? "32px" : "24px")};
      line-height: ${({ homePage }) => (homePage ? "36px" : "25.6px")};
    }
  }

  ${Subtitle} {
    color: ${({ darkTheme }) =>
      darkTheme ? COLOR_WHITE_LIGHT : COLOR_BLACK_LIGHT};
  }
`;
