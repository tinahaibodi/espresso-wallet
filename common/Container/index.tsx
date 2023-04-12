import {
  Section,
  SectionWrapper,
  SectionCenter,
  Container,
} from "@/common/Container/styles";

interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  layout?: boolean;
}

export const SectionContainer = ({
  children,
  padding,
  layout,
}: ContainerProps) => (
  <Section padding={padding} layout={layout}>
    <SectionWrapper>
      <SectionCenter>
        <Container layout={layout}>{children}</Container>
      </SectionCenter>
    </SectionWrapper>
  </Section>
);
