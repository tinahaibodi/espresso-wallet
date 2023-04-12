import { useEffect, useRef, useState } from "react";

import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { SectionContainer } from "@/common/Container";
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
}: {
  state: Record<string, unknown>;
  handleBack: () => void;
  handleNext: () => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [copiedPhrase, setCopiedPhrase] = useState<string[]>(
    Array.from({ length: 12 }, () => "_______")
  );

  const handlePaste = () => {
    navigator.clipboard.readText().then((text) => {
      if (text.split(" ").length === 12) {
        const phrase = text.split(" ");
        setCopiedPhrase(phrase);
      }
    });
  };

  const handleUpload = () => {
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
  };

  useEffect(() => {
    inputRef.current?.addEventListener("change", handleUpload);
  }, []);

  return (
    <SectionContainer>
      <InnerContainer>
        <Heading
          title="Confirm your Recover Phrase "
          description="This is to verify you have the recovery phrase in a safe place"
        />
        <PhraseOuterContainer>
          <PhraseContainer>
            {copiedPhrase.map((phrase: string, index: number) => (
              <PhraseWrapper key={index}>
                <span>{index + 1}</span>
                <p>{phrase}</p>
              </PhraseWrapper>
            ))}
          </PhraseContainer>
          <ButtonsContainer>
            <Button
              text="Paste"
              icon="copy"
              variant="secondary"
              onClick={handlePaste}
            />
            <Button
              text="Upload"
              icon="download"
              variant="primary"
              onClick={handleUpload}
            />
            <input type="file" ref={inputRef} accept="text/plain" />
          </ButtonsContainer>
        </PhraseOuterContainer>
        <NavigationButtons>
          <Button text="Back" variant="primary" onClick={handleBack} />
          <Button text="Next" variant="secondary" />
        </NavigationButtons>
      </InnerContainer>
    </SectionContainer>
  );
};
