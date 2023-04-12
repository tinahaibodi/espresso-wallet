import styled from "styled-components";

import { COLOR_WHITE } from "@/utils/colorPalette";

export const Container = styled.div`
  position: relative;

  button {
    border: 2px dotted ${COLOR_WHITE};
    text-transform: uppercase;
    padding: 10px 12px;
    font-size: 12px;
  }
`;

export const OptionList = styled.ul<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? "flex" : "none")};
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  position: absolute;
  z-index: 2;
  border: 1px solid ${COLOR_WHITE};
  flex-direction: column;

  button {
    border: none;
    border-radius: 0;
    font-size: 12px;
  }
`;
