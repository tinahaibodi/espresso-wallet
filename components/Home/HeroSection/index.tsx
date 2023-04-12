import Link from "next/link";

import { Button } from "@/common/Button";
import { SectionContainer } from "@/common/Container";
import { Heading } from "@/common/Heading";
import { COLOR_BLACK } from "@/utils/colorPalette";
import {
  AbsoluteImage,
  ButtonsContainer,
  HeroSectionContainer,
} from "@/components/Home/HeroSection/styles";

export const HeroSection = () => {
  return (
    <SectionContainer>
      <HeroSectionContainer>
        <Heading
          homePage
          title="Empowering private transactions"
          subtitle="Introducing CAPE"
          description="CAPE is a smart contract application developed by Espresso Systems that enables digital asset creators to configure who can see data regarding the custody and transfer of the assets they create. Users can create new tokens and wrap existing Ethereum tokens to give them the desired privacy properties."
        />
        <ButtonsContainer>
          <Link href="/create-wallet">
            <Button
              variant="secondary"
              text="Create new wallet"
              ellipsis={{
                color: COLOR_BLACK,
                size: "10px",
              }}
            />
          </Link>
          <Button variant="primary" text="I already have a wallet" />
        </ButtonsContainer>
      </HeroSectionContainer>
      <AbsoluteImage src="/assets/png/illustration.png" />
    </SectionContainer>
  );
};
