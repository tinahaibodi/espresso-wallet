import { Container, Subtitle } from "@/common/Heading/styles";

export const Heading = ({
  title,
  subtitle,
  description,
  homePage,
}: {
  title: string;
  subtitle?: string;
  description: string;
  homePage?: boolean;
}) => {
  return (
    <Container homePage={homePage}>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
      {homePage ? <h1>{title}</h1> : <h2>{title}</h2>}
      <p>{description}</p>
    </Container>
  );
};
