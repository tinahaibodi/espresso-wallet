import { useTheme } from "next-themes";

import {
  Section,
  SectionWrapper,
  SectionCenter,
  Container,
} from "@/common/Container/styles";
import { GlobalStyle } from "@/styles/globalStyles";

interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  layout?: boolean;
}

export const SectionContainer = ({
  children,
  padding,
  layout,
}: ContainerProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Section
      padding={padding}
      layout={layout}
      darkTheme={resolvedTheme === "dark"}
    >
      <GlobalStyle darkTheme={resolvedTheme === "dark"} />
      <SectionWrapper>
        <SectionCenter>
          <Container layout={layout}>{children}</Container>
        </SectionCenter>
      </SectionWrapper>
    </Section>
  );
};
