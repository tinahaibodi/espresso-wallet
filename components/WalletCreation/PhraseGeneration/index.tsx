import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { CopyIcon, DownloadIcon } from "@/common/Icons";
import { SectionContainer } from "@/common/Container";
import {
  InnerContainer,
  PhraseContainer,
  PhraseWrapper,
  ButtonsContainer,
  PhraseOuterContainer,
  NavigationButtons,
} from "@/components/WalletCreation/PhraseGeneration/styles";

export const PhraseGeneration = ({
  state,
  handleNext,
}: {
  state: Record<string, unknown>;
  handleNext: () => void;
}) => {
  const { resolvedTheme } = useTheme();

  const handleCopy = () => {
    const phrase = (state.phrase as string[]).join(" ");
    navigator.clipboard.writeText(phrase);
  };

  const handleDownload = () => {
    const phrase = (state.phrase as string[]).join(" ");
    const element = document.createElement("a");
    const file = new Blob([phrase], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "recovery-phrase.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <SectionContainer>
      <InnerContainer>
        <Heading
          title="Write down your Recover Phrase"
          description="You will need it on the next step"
        />
        <PhraseOuterContainer darkTheme={resolvedTheme === "dark"}>
          <PhraseContainer>
            {(state.phrase as string[]).map((phrase: string, index: number) => (
              <PhraseWrapper key={index}>
                <span>{index + 1}</span>
                <p>{phrase}</p>
              </PhraseWrapper>
            ))}
          </PhraseContainer>
          <ButtonsContainer>
            <Button
              text="Copy"
              icon={<CopyIcon />}
              variant="secondary"
              onClick={handleCopy}
            />
            <Button
              text="Download"
              icon={<DownloadIcon />}
              variant="primary"
              onClick={handleDownload}
            />
          </ButtonsContainer>
        </PhraseOuterContainer>
        <NavigationButtons>
          <Link href="/">
            <Button text="Back" variant="primary" />
          </Link>
          <Button text="Next" variant="secondary" onClick={handleNext} />
        </NavigationButtons>
      </InnerContainer>
    </SectionContainer>
  );
};
