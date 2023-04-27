import { MoonIcon, SunIcon } from "@/common/Icons";
import {
  Container,
  IconsContainer,
  InnerContainer,
} from "@/common/Layout/ThemeToggle/styles";

export const ThemeToggle = ({
  theme,
  onClick,
}: {
  theme: string | undefined;
  onClick: () => void;
}) => (
  <Container onClick={onClick}>
    <InnerContainer darkMode={theme === "dark"}>
      <IconsContainer>
        <SunIcon />
        <MoonIcon />
      </IconsContainer>
    </InnerContainer>
  </Container>
);
