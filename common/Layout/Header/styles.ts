import Link from "next/link";
import styled from "styled-components";

import { Flex } from "@/common/Container/styles";
import { COLOR_WHITE, COLOR_BLACK } from "@/utils/colorPalette";

export const LogoContainer = styled(Link)`
  position: relative;
`;

export const NavigationContainer = styled(Flex)`
  border-radius: 50px;
  padding: 6px;

  a {
    text-decoration: none;
  }
`;

export const HeaderContainer = styled(Flex)<{
  darkTheme: boolean;
}>`
  ${NavigationContainer} {
    border: ${({ darkTheme }) =>
      darkTheme ? `1px solid ${COLOR_WHITE}` : `1px solid ${COLOR_BLACK}`};
  }
`;
