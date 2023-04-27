import styled from "styled-components";

import { COLOR_WHITE, COLOR_BLACK } from "@/utils/colorPalette";

export const OptionList = styled.ul<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  z-index: 2;
  flex-direction: column;

  button {
    border: none;
    border-radius: 0;
    font-size: 12px;
    padding: 6px 12px !important;
  }
`;

export const Container = styled.div<{ darkTheme: boolean }>`
  position: relative;

  button {
    border: ${({ darkTheme }) =>
      darkTheme ? `2px dotted ${COLOR_WHITE}` : `2px dotted ${COLOR_BLACK}`};
    text-transform: uppercase;
    padding: 10px 12px;
    font-size: 12px;
  }
`;
