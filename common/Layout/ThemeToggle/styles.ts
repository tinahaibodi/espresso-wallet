import styled from "styled-components";

import { COLOR_BLACK, COLOR_WHITE } from "@/utils/colorPalette";

export const Container = styled.div`
  width: 54px;
  display: block;
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  margin: 0 5px;

  svg {
    height: 12px;
    width: 12px;
    z-index: 0;
  }
`;

export const InnerContainer = styled.div<{ darkMode: boolean }>`
  height: 30px;
  width: 54px;
  background: ${({ darkMode }) => (darkMode ? COLOR_BLACK : COLOR_WHITE)};
  border-radius: 40px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  border: 1px solid ${({ darkMode }) => (darkMode ? COLOR_WHITE : COLOR_BLACK)};

  &:before {
    content: "";
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 30px;
    background: ${({ darkMode }) => (darkMode ? COLOR_WHITE : COLOR_BLACK)};
    position: absolute;
    z-index: 2;
    transform: ${({ darkMode }) =>
      darkMode ? "translateX(24px)" : "translate(0)"};
    transition: transform 0.5s ease;
  }

  ${IconsContainer} {
    svg {
      path {
        fill: ${({ darkMode }) => (darkMode ? COLOR_WHITE : COLOR_BLACK)};
      }
    }
  }
`;
