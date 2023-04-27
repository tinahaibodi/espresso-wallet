import { useEffect, useState } from "react";

import { PhraseGeneration } from "@/components/WalletCreation/PhraseGeneration";
import { PhraseConfirmation } from "@/components/WalletCreation/PhraseConfirmation";
import { PasswordCreation } from "@/components/WalletCreation/PasswordCreation";
import { SuccessStep } from "@/components/WalletCreation/SuccessStep";

export const WalletCreation = () => {
  const [state, setState] = useState({
    step: 1,
    phrase: [""],
    checked: false,
    newPassword: "",
    newPasswordError: "",
    confirmPassword: "",
    confirmPasswordError: "",
    newPasswordVisibility: false,
    confirmPasswordVisibility: false,
    copiedPhrase: Array.from({ length: 12 }, () => "_______"),
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

  const setCopiedPhrase = (phrase: string[]) => {
    setState((prevState) => ({
      ...prevState,
      copiedPhrase: phrase,
    }));
  };

  const handleChangeNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      newPassword: e.target.value,
      newPasswordError:
        e.target.value.length < 8
          ? "Password must be at least 8 characters long"
          : "",
    }));
  };

  const handleChangeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState((prevState) => ({
      ...prevState,
      confirmPassword: e.target.value,
      confirmPasswordError:
        e.target.value.length < 8
          ? "Password must be at least 8 characters long"
          : "",
    }));
  };

  const handleChangeNewPasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      newPasswordVisibility: !prevState.newPasswordVisibility,
    }));
  };

  const handleChangeConfirmPasswordVisibility = () => {
    setState((prevState) => ({
      ...prevState,
      confirmPasswordVisibility: !prevState.confirmPasswordVisibility,
    }));
  };

  const handleSetChecked = () => {
    setState((prevState) => ({
      ...prevState,
      checked: !prevState.checked,
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
          setCopiedPhrase={setCopiedPhrase}
        />
      )}
      {state.step === 3 && (
        <PasswordCreation
          state={state}
          handleBack={handleBack}
          handleNext={handleNext}
          handleSetChecked={handleSetChecked}
          handleChangeNewPassword={handleChangeNewPassword}
          handleChangeConfirmPassword={handleChangeConfirmPassword}
          handleChangeNewPasswordVisibility={handleChangeNewPasswordVisibility}
          handleChangeConfirmPasswordVisibility={
            handleChangeConfirmPasswordVisibility
          }
        />
      )}
      {state.step === 4 && <SuccessStep />}
    </>
  );
};
