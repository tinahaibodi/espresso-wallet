import styled from "styled-components";

import { Flex } from "@/common/Container/styles";
import {
  COLOR_BLACK_LIGHT,
  COLOR_GRAY,
  COLOR_WHITE,
} from "@/utils/colorPalette";

export const InnerContainer = styled(Flex)`
  gap: 10px;
  border-radius: 8px;
  padding: 20px 12px 20px 12px;
  height: 44px;
  width: 100%;

  div {
    cursor: pointer;
  }
`;

export const Container = styled.div<{ darkTheme: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;

  input {
    gap: 10px;
    border-radius: 8px;
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_BLACK_LIGHT : COLOR_WHITE};
    padding: 20px 12px 20px 12px;
    width: 100%;
    height: 100%;
    outline: none;
  }

  label {
    margin-bottom: 8px;
    color: ${COLOR_GRAY};
    font-size: 14px;
  }

  ${InnerContainer} {
    border: 1px solid
      ${({ darkTheme }) => (darkTheme ? COLOR_BLACK_LIGHT : COLOR_GRAY)};
    background-color: ${({ darkTheme }) =>
      darkTheme ? COLOR_BLACK_LIGHT : COLOR_WHITE};
  }
`;

export const ErrorMessage = styled.span<{ visible: boolean }>`
  color: #c70039;
  font-size: 12px;
  margin-top: 4px;
  position: absolute;
  bottom: -20px;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  display ${({ visible }) => (visible ? "block" : "none")};
  transition: all 0.3s ease-in-out;
`;
