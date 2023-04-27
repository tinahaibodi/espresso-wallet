import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { COLOR_BLUE_LIGHT, COLOR_PURPLE } from "@/utils/colorPalette";
import {
  InnerContainer,
  SuccessButtonsContainer,
} from "@/components/WalletCreation/PhraseGeneration/styles";

export const SuccessStep = () => (
  <SectionContainer>
    <InnerContainer>
      <Heading
        titleColor={COLOR_BLUE_LIGHT}
        title="Wallet created successfully"
        description="This is for your CAPE Wallet"
      />
      <SuccessButtonsContainer>
        <a href="https://cape.network" target="_blank" rel="noreferrer">
          <Button text="Open Wallet" variant="secondary" />
        </a>
        <a href="https://cape.network" target="_blank" rel="noreferrer">
          <Button
            text="Open CAPE"
            variant="primary"
            ellipsis={{
              color: COLOR_PURPLE,
              size: "6px",
            }}
          />
        </a>
      </SuccessButtonsContainer>
    </InnerContainer>
  </SectionContainer>
);
