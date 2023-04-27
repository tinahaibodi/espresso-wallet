import { useTheme } from "next-themes";

import { Container, Ellipsis } from "@/common/Button/styles";

export interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | "secondary";
  icon?: JSX.Element;
  reduceGap?: boolean;
  reducePadding?: boolean;
  disabled?: boolean;
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
  disabled,
}: ButtonProps) => {
  const { resolvedTheme } = useTheme();

  return (
    <Container
      onClick={onClick}
      variant={variant}
      reduceGap={reduceGap}
      reducePadding={reducePadding}
      disabled={disabled}
      darkTheme={resolvedTheme === "dark"}
    >
      {ellipsis && <Ellipsis color={ellipsis.color} size={ellipsis.size} />}
      {icon && !ellipsis && icon}
      {text}
      {icon && ellipsis && icon}
    </Container>
  );
};
