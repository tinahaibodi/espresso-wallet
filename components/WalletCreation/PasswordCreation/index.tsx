import { Input } from "@/common/Input";
import { Button } from "@/common/Button";
import { Heading } from "@/common/Heading";
import { Checkbox } from "@/common/Checkbox";
import { SectionContainer } from "@/common/Container";
import { COLOR_BLUE_LIGHT } from "@/utils/colorPalette";
import {
  InnerContainer,
  NavigationButtons,
  InputContainer,
} from "@/components/WalletCreation/PhraseGeneration/styles";

export const PasswordCreation = ({
  state,
  handleBack,
  handleNext,
  handleChangeNewPassword,
  handleChangeConfirmPassword,
  handleChangeNewPasswordVisibility,
  handleChangeConfirmPasswordVisibility,
  handleSetChecked,
}: {
  state: Record<string, unknown>;
  handleBack: () => void;
  handleNext: () => void;
  handleChangeNewPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeConfirmPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeNewPasswordVisibility: () => void;
  handleChangeConfirmPasswordVisibility: () => void;
  handleSetChecked: () => void;
}) => {
  const passWordsMatch =
    state.newPassword === state.confirmPassword && state.newPassword !== "";

  return (
    <SectionContainer>
      <InnerContainer>
        <Heading
          titleColor={COLOR_BLUE_LIGHT}
          title="Create your password"
          description="Add a safe password for access your wallet"
        />
        <InputContainer>
          <Input
            label="New Password"
            onChange={handleChangeNewPassword}
            value={state.newPassword as string}
            visible={state.newPasswordVisibility as boolean}
            setVisibility={handleChangeNewPasswordVisibility}
            errorMessage={state.newPasswordError as string}
          />
          <Input
            label="Confirm password"
            onChange={handleChangeConfirmPassword}
            value={state.confirmPassword as string}
            visible={state.confirmPasswordVisibility as boolean}
            setVisibility={handleChangeConfirmPasswordVisibility}
            errorMessage={state.confirmPasswordError as string}
          />
        </InputContainer>
        <Checkbox
          href="https://www.google.com/"
          checked={Boolean(state.checked)}
          setChecked={handleSetChecked}
        />
        <NavigationButtons>
          <Button text="Back" variant="primary" onClick={handleBack} />
          <Button
            text="Next"
            variant="secondary"
            onClick={handleNext}
            disabled={!passWordsMatch || !state.checked}
          />
        </NavigationButtons>
      </InnerContainer>
    </SectionContainer>
  );
};
