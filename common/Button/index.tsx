import Image from "next/image";

import { Container, Ellipsis } from "@/common/Button/styles";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  icon?: "copy" | "download" | "arrowDown" | "arrowUp";
  reduceGap?: boolean;
  reducePadding?: boolean;
  ellipsis?: {
    color: string;
    size: string;
  };
}

export const Button = ({
  text,
  onClick,
  variant,
  icon,
  ellipsis,
  reduceGap,
  reducePadding,
}: ButtonProps) => (
  <Container
    onClick={onClick}
    variant={variant}
    reduceGap={reduceGap}
    reducePadding={reducePadding}
  >
    {ellipsis && <Ellipsis color={ellipsis.color} size={ellipsis.size} />}
    {icon && !ellipsis && (
      <Image
        src={`/assets/svg/${icon}.svg`}
        alt={icon}
        width={15}
        height={15}
      />
    )}
    {text}
    {icon && ellipsis && (
      <Image
        src={`/assets/svg/${icon}.svg`}
        alt={icon}
        width={15}
        height={15}
      />
    )}
  </Container>
);
