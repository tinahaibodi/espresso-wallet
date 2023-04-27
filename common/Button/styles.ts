import styled from "styled-components";

import { COLOR_BLACK, COLOR_WHITE_LIGHT } from "@/utils/colorPalette";

export const Container = styled.button<{
  variant: string;
  darkTheme: boolean;
  reduceGap?: boolean;
  reducePadding?: boolean;
  disabled?: boolean;
}>`
  font-size: 14px;
  padding: ${({ reducePadding }) =>
    reducePadding ? "10px 16px" : "10px 24px"};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${({ reduceGap }) => (reduceGap ? "6px" : "16px")};
  color: ${({ variant }) =>
    variant === "primary" ? COLOR_WHITE_LIGHT : COLOR_BLACK};
  background: ${({ variant }) =>
    variant === "primary" ? COLOR_BLACK : COLOR_WHITE_LIGHT};
  border-radius: 50px;
  border: ${({ reduceGap, darkTheme }) =>
    reduceGap
      ? "none"
      : darkTheme
      ? `1px solid ${COLOR_WHITE_LIGHT}`
      : `1px solid ${COLOR_BLACK}`};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  svg > path {
    fill: ${({ variant }) =>
      variant === "primary" ? COLOR_WHITE_LIGHT : COLOR_BLACK};
  }
`;

export const Ellipsis = styled.div<{
  color: string;
  size: string;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  background: ${({ color }) => color};
`;
