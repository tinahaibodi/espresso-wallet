import { useEffect, useRef, useState } from "react";

import { Button } from "@/common/Button";
import { COLOR_PURPLE } from "@/utils/colorPalette";
import { Container, OptionList } from "@/common/Dropdown/styles";

export const Dropdown = ({
  options,
  onChange,
}: {
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: { label: string; value: string }) => void;
}) => {
  const [isOpened, updateIsOpened] = useState(false);
  const [activeItem, updateActiveItem] = useState(options[0]);
  const optionsListRef = useRef(null);

  const handleOptionClick = (item: { label: string; value: string }) => {
    onChange(item);
    updateActiveItem(item);
    updateIsOpened(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        optionsListRef.current &&
        !(optionsListRef.current as HTMLUListElement).contains(e.target as Node)
      ) {
        updateIsOpened(false);
      }
    };

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        updateIsOpened(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isOpened]);

  return (
    <Container>
      <Button
        reduceGap
        variant="primary"
        icon={isOpened ? "arrowUp" : "arrowDown"}
        ellipsis={{ color: COLOR_PURPLE, size: "6px" }}
        text={activeItem.label}
        onClick={() => updateIsOpened(!isOpened)}
      />
      <OptionList ref={optionsListRef} isOpened={isOpened}>
        {options.map((option) => (
          <Button
            reduceGap
            text={option.label}
            key={option.value}
            ellipsis={{ color: COLOR_PURPLE, size: "6px" }}
            onClick={() => handleOptionClick(option)}
            aria-selected={activeItem.value === option.value}
            variant={
              activeItem.value === option.value ? "secondary" : "primary"
            }
          />
        ))}
      </OptionList>
    </Container>
  );
};
