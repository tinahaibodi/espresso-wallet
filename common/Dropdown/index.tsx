import { useEffect, useRef, useState } from "react";

import { Button } from "@/common/Button";
import { COLOR_PURPLE } from "@/utils/colorPalette";
import { ArrowDownIcon, ArrowUpIcon } from "@/common/Icons";
import { Container, OptionList } from "@/common/Dropdown/styles";

export const Dropdown = ({
  options,
  onChange,
  darkTheme,
}: {
  options: string[];
  onChange: (value: string) => void;
  darkTheme: boolean;
}) => {
  const [isOpened, updateIsOpened] = useState(false);
  const [activeItem, updateActiveItem] = useState(options[0]);
  const optionsListRef = useRef(null);

  const handleOptionClick = (item: string) => {
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
    <Container darkTheme={darkTheme}>
      <Button
        reduceGap
        variant={darkTheme ? "primary" : "secondary"}
        icon={isOpened ? <ArrowUpIcon /> : <ArrowDownIcon />}
        ellipsis={{ color: COLOR_PURPLE, size: "6px" }}
        text={activeItem}
        onClick={() => updateIsOpened(!isOpened)}
      />
      <OptionList ref={optionsListRef} isOpened={isOpened}>
        {options.map((option) => (
          <Button
            reduceGap
            text={option}
            key={option}
            ellipsis={{ color: COLOR_PURPLE, size: "6px" }}
            onClick={() => handleOptionClick(option)}
            aria-selected={activeItem === option}
            variant={
              activeItem === option && darkTheme
                ? "secondary"
                : activeItem === option || darkTheme
                ? "primary"
                : "secondary"
            }
          />
        ))}
      </OptionList>
    </Container>
  );
};
