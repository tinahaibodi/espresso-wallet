import Link from "next/link";
import Image from "next/image";
import { useAccount } from "wagmi";
import { useTheme } from "next-themes";
import { useWeb3Modal } from "@web3modal/react";

import { Button } from "@/common/Button";
import { Dropdown } from "@/common/Dropdown";
import { Flex } from "@/common/Container/styles";
import { SectionContainer } from "@/common/Container";
import { ThemeToggle } from "@/common/Layout/ThemeToggle";
import {
  LogoContainer,
  NavigationContainer,
  HeaderContainer,
} from "@/common/Layout/Header/styles";
import {
  COLOR_BLACK,
  COLOR_GREEN_LIGHT,
  COLOR_YELLOW,
  COLOR_PINK_LIGHT,
  COLOR_PURPLE,
  COLOR_WHITE,
} from "@/utils/colorPalette";

const Header = () => {
  const { open } = useWeb3Modal();
  const { resolvedTheme, setTheme } = useTheme();
  const { address, isConnected } = useAccount();

  const NavigationItems = [
    {
      label: "Assets",
      href: "https://google.com/",
      color: COLOR_YELLOW,
    },
    {
      label: "Play",
      href: "https://google.com/",
      color: COLOR_GREEN_LIGHT,
    },
    {
      label: "Faucet",
      href: "https://google.com/",
      color: COLOR_PINK_LIGHT,
    },
    {
      label: "Documentation",
      href: "https://google.com/",
      color: COLOR_PURPLE,
    },
  ];

  const DropdownOptions = ["Cape", "Test", "Test2"];

  const handleChange = (value: string) => {
    console.log(value);
  };

  const handleConnectWallet = () => {
    open();
  };

  return (
    <SectionContainer layout>
      <HeaderContainer darkTheme={resolvedTheme === "dark"}>
        <Flex gap="75px">
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
            <Link href="/create-wallet">
              <Button
                reduceGap
                text={"Wallet"}
                ellipsis={{
                  color: resolvedTheme === "dark" ? COLOR_BLACK : COLOR_WHITE,
                  size: "5px",
                }}
                variant={resolvedTheme === "dark" ? "secondary" : "primary"}
              />
            </Link>
            {NavigationItems.map((item) => (
              <a
                href={item.href}
                key={item.label}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  reduceGap
                  reducePadding
                  key={item.label}
                  text={item.label}
                  ellipsis={{
                    color: item.color,
                    size: "5px",
                  }}
                  variant={resolvedTheme === "dark" ? "primary" : "secondary"}
                />
              </a>
            ))}
          </NavigationContainer>
        </Flex>
        <Flex gap="10px">
          <Dropdown
            options={DropdownOptions}
            onChange={handleChange}
            darkTheme={resolvedTheme === "dark"}
          />
          {!isConnected ? (
            <Button
              text="Connect Wallet"
              variant={resolvedTheme === "dark" ? "primary" : "secondary"}
              onClick={handleConnectWallet}
            />
          ) : (
            <Button
              text={
                address?.slice(0, 6) +
                "..." +
                address?.slice(address.length - 4)
              }
              variant="primary"
            />
          )}
          <ThemeToggle
            theme={resolvedTheme}
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          />
        </Flex>
      </HeaderContainer>
    </SectionContainer>
  );
};

export default Header;
