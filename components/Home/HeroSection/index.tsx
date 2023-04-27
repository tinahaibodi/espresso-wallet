import Link from "next/link";
import { useAccount } from "wagmi";
import { useWeb3Modal } from "@web3modal/react";

import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { COLOR_BLACK } from "@/utils/colorPalette";
import {
  AbsoluteImage,
  ButtonsContainer,
  HeroSectionContainer,
} from "@/components/Home/HeroSection/styles";

const HeroSection = () => {
  const { open } = useWeb3Modal();
  const { isConnected } = useAccount();
  const handleConnectWallet = () => {
    open();
  };

  return (
    <SectionContainer>
      <HeroSectionContainer>
        <Heading
          homePage
          title="Empowering private transactions"
          subtitle="Introducing CAPE"
          description="CAPE is a smart contract application developed by Espresso Systems that enables digital asset creators to configure who can see data regarding the custody and transfer of the assets they create. Users can create new tokens and wrap existing Ethereum tokens to give them the desired privacy properties."
        />
        {!isConnected && (
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
            <Button
              variant="primary"
              text="I already have a wallet"
              onClick={handleConnectWallet}
            />
          </ButtonsContainer>
        )}
      </HeroSectionContainer>
      <AbsoluteImage src="/assets/png/illustration.png" />
    </SectionContainer>
  );
};

export default HeroSection;
