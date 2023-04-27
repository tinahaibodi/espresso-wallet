import { useTheme } from "next-themes";

import { Container, Subtitle } from "@/common/Heading/styles";

export const Heading = ({
  title,
  subtitle,
  description,
  homePage,
  titleColor,
}: {
  title: string;
  subtitle?: string;
  description: string;
  homePage?: boolean;
  titleColor?: string;
}) => {
  const { resolvedTheme } = useTheme();
  return (
    <Container
      homePage={homePage}
      titleColor={titleColor}
      darkTheme={resolvedTheme === "dark"}
    >
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {homePage ? <h1>{title}</h1> : <h2>{title}</h2>}
      <p>{description}</p>
    </Container>
  );
};
