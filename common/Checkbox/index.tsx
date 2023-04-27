import { useTheme } from "next-themes";

import { Container, Checkmark } from "@/common/Checkbox/styles";

export const Checkbox = ({
  href,
  checked,
  setChecked,
}: {
  href: string;
  checked: boolean;
  setChecked: () => void;
}) => {
  const { resolvedTheme } = useTheme();

  return (
    <Container darkTheme={resolvedTheme === "dark"}>
      <label>
        I agree with{" "}
        <a href={href} target="_blank" rel="noreferrer">
          Terms of Service
        </a>
        <input type="checkbox" checked={checked} onChange={setChecked} />
        <Checkmark />
      </label>
    </Container>
  );
};
