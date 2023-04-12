import { useState } from "react";

import { MoonIcon, SunIcon } from "@/common/Icons";
import {
  Container,
  IconsContainer,
  InnerContainer,
} from "@/common/Layout/ThemeToggle/styles";

export const ThemeToggle = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleState = () => {
    setIsEnabled((prevState) => !prevState);
  };

  return (
    <Container onClick={toggleState}>
      <InnerContainer isEnabled={isEnabled}>
        <IconsContainer>
          <SunIcon />
          <MoonIcon />
        </IconsContainer>
      </InnerContainer>
    </Container>
  );
};
