import { useEffect, useState } from "react";

import { PhraseGeneration } from "@/components/WalletCreation/PhraseGeneration";
import { PhraseConfirmation } from "@/components/WalletCreation/PhraseConfirmation";

export const WalletCreation = () => {
  const [state, setState] = useState({
    step: 1,
    phrase: [""],
  });

  useEffect(() => {
    const randomPhrases = [
      "film",
      "dynamic",
      "salon",
      "table",
      "myth",
      "gesture",
      "awake",
      "brain",
      "churn",
      "victory",
      "lecture",
      "candy",
      "cruise",
      "cannon",
      "squirrel",
      "sunset",
      "tattoo",
    ];

    const randomPhrase = randomPhrases.sort(() => Math.random() - 0.5);
    const phrase = randomPhrase.slice(0, 12);

    setState((prevState) => ({
      ...prevState,
      phrase,
    }));
  }, []);

  const handleNext = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step + 1,
    }));
  };

  const handleBack = () => {
    setState((prevState) => ({
      ...prevState,
      step: prevState.step - 1,
    }));
  };

  return (
    <>
      {state.step === 1 && (
        <PhraseGeneration state={state} handleNext={handleNext} />
      )}
      {state.step === 2 && (
        <PhraseConfirmation
          state={state}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
    </>
  );
};
