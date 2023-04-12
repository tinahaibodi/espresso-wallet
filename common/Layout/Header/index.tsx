import Image from "next/image";

import { Button } from "@/common/Button";
import { Dropdown } from "@/common/Dropdown";
import { Flex } from "@/common/Container/styles";
import { SectionContainer } from "@/common/Container";
import { ThemeToggle } from "@/common/Layout/ThemeToggle";
import {
  LogoContainer,
  NavigationContainer,
} from "@/common/Layout/Header/styles";
import {
  COLOR_BLACK,
  COLOR_GREEN_LIGHT,
  COLOR_YELLOW,
  COLOR_PINK_LIGHT,
  COLOR_PURPLE,
} from "@/utils/colorPalette";

export const Header = () => {
  const NavigationItems = [
    {
      label: "Wallet",
      href: "/wallet",
      color: COLOR_BLACK,
    },
    {
      label: "Assets",
      href: "/assets",
      color: COLOR_YELLOW,
    },
    {
      label: "Play",
      href: "/play",
      color: COLOR_GREEN_LIGHT,
    },
    {
      label: "Faucet",
      href: "/faucet",
      color: COLOR_PINK_LIGHT,
    },
    {
      label: "Documentation",
      href: "/documentation",
      color: COLOR_PURPLE,
    },
  ];

  const DropdownOptions = [
    {
      label: "Cape",
      value: "cape",
    },
    {
      label: "Test",
      value: "test",
    },
    {
      label: "Third",
      value: "third",
    },
  ];

  const handleChange = (value: { label: string; value: string }) => {
    console.log(value);
  };

  return (
    <SectionContainer layout>
      <Flex>
        <LogoContainer href="/">
          <Image
            src={"/assets/png/logo.png"}
            alt="Sway logo"
            width="68"
            height="68"
            priority
          />
        </LogoContainer>
        <NavigationContainer>
          {NavigationItems.map((item) => (
            <Button
              reduceGap
              reducePadding={NavigationItems.indexOf(item) !== 0}
              key={item.label}
              text={item.label}
              ellipsis={{
                color: item.color,
                size: "5px",
              }}
              variant={
                NavigationItems.indexOf(item) !== 0 ? "primary" : "secondary"
              }
            />
          ))}
        </NavigationContainer>
        <Flex gap="10px">
          <Dropdown options={DropdownOptions} onChange={handleChange} />
          <Button text="Connect Wallet" variant="primary" />
          <ThemeToggle />
        </Flex>
      </Flex>
    </SectionContainer>
  );
};
