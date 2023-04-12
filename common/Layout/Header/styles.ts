import Link from "next/link";
import styled from "styled-components";

import { Flex } from "@/common/Container/styles";
import { COLOR_WHITE } from "@/utils/colorPalette";

export const LogoContainer = styled(Link)`
  position: relative;
`;

export const NavigationContainer = styled(Flex)`
  border: 1px solid ${COLOR_WHITE};
  border-radius: 50px;
  padding: 6px;
`;
