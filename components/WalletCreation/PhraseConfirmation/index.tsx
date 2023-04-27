import { useTheme } from "next-themes";
import { useCallback, useEffect, useRef } from "react";

import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
import { CopyIcon, DownloadIcon } from "@/common/Icons";
import {
  InnerContainer,
  PhraseContainer,
  PhraseWrapper,
  ButtonsContainer,
  PhraseOuterContainer,
  NavigationButtons,
} from "@/components/WalletCreation/PhraseGeneration/styles";

export const PhraseConfirmation = ({
  state,
  handleBack,
  handleNext,
  setCopiedPhrase,
}: {
  state: Record<string, unknown>;
  handleBack: () => void;
  handleNext: () => void;
  setCopiedPhrase: (phrase: string[]) => void;
}) => {
  const { resolvedTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      if (text.split(" ").length === 12) {
        const phrase = text.split(" ");
        setCopiedPhrase(phrase);
      }
    });
  };

  const handleUpload = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }

    const file = inputRef.current?.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const phrase = text.split(" ");
        setCopiedPhrase(phrase);
      };

      reader.readAsText(file);
    }
  }, [setCopiedPhrase]);

  const phrasesMatch = () => {
    const generatedPhrase = state.phrase as string[];
    const copiedPhrase = state.copiedPhrase as string[];

    return generatedPhrase.every(
      (phrase, index) => phrase === copiedPhrase[index]
    );
  };

  useEffect(() => {
    inputRef.current?.addEventListener("change", handleUpload);
  }, [handleUpload]);

  return (
    <SectionContainer>
      <InnerContainer>
        <Heading
          title="Confirm your Recover Phrase "
          description="This is to verify you have the recovery phrase in a safe place"
        />
        <PhraseOuterContainer darkTheme={resolvedTheme === "dark"}>
          <PhraseContainer>
            {(state.copiedPhrase as string[]).map(
              (phrase: string, index: number) => (
                <PhraseWrapper key={index}>
                  <span>{index + 1}</span>
                  <p>{phrase}</p>
                </PhraseWrapper>
              )
            )}
          </PhraseContainer>
          <ButtonsContainer>
            <Button
              text="Paste"
              icon={<CopyIcon />}
              variant="secondary"
              onClick={handlePaste}
            />
            <Button
              text="Upload"
              icon={<DownloadIcon />}
              variant="primary"
              onClick={handleUpload}
            />
            <input type="file" ref={inputRef} accept="text/plain" />
          </ButtonsContainer>
        </PhraseOuterContainer>
        <NavigationButtons>
          <Button text="Back" variant="primary" onClick={handleBack} />
          <Button
            text="Next"
            variant="secondary"
            disabled={!phrasesMatch()}
            onClick={handleNext}
          />
        </NavigationButtons>
      </InnerContainer>
    </SectionContainer>
  );
};
