import { useTheme } from "next-themes";
import { useRef, useState } from "react";

import { EyeCrossedIcon, EyeIcon, LockIcon } from "@/common/Icons";
import { Container, InnerContainer, ErrorMessage } from "@/common/Input/styles";

export const Input = ({
  label,
  onChange,
  value,
  visible,
  setVisibility,
  errorMessage,
}: {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  visible: boolean;
  setVisibility: () => void;
  errorMessage: string;
}) => {
  const { resolvedTheme } = useTheme();

  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container darkTheme={resolvedTheme === "dark"}>
      <label>{label}</label>
      <InnerContainer>
        <LockIcon onClick={() => inputRef.current?.focus()} />
        <input
          ref={inputRef}
          type={visible ? "text" : "password"}
          onChange={onChange}
          value={value}
          onBlur={() => setError(errorMessage)}
          onInput={() => setError("")}
        />
        <div onClick={setVisibility}>
          {visible ? <EyeIcon /> : <EyeCrossedIcon />}
        </div>
      </InnerContainer>
      <ErrorMessage visible={Boolean(error)}>{error}</ErrorMessage>
    </Container>
  );
};
