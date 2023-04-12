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
    fill: ${COLOR_WHITE};
    height: 12px;
    width: 12px;
    z-index: 0;
  }
`;

export const InnerContainer = styled.div<{ isEnabled: boolean }>`
  height: 30px;
  width: 54px;
  background: ${COLOR_BLACK};
  border-radius: 40px;
  position: relative;
  padding: 5px;
  transition: background 0.5s ease;
  cursor: pointer;
  border: 1px solid ${COLOR_WHITE};

  &:before {
    content: "";
    display: block;
    height: 18px;
    width: 18px;
    border-radius: 30px;
    background: ${COLOR_WHITE};
    position: absolute;
    z-index: 2;
    transform: ${({ isEnabled }) =>
      isEnabled ? "translateX(24px)" : "translate(0)"};
    transition: transform 0.5s ease, background 0.5s ease;
  }
`;
