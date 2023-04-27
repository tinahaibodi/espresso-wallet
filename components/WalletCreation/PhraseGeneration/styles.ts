import styled from "styled-components";

import { devices } from "@/utils/devices";
import { Flex } from "@/common/Container/styles";
import { SourceCodePro } from "@/public/assets/fonts/fonts";
import {
  COLOR_BLACK,
  COLOR_BLACK_LIGHT,
  COLOR_GRAY,
  COLOR_GRAY_LIGHT,
  COLOR_WHITE,
  COLOR_WHITE_LIGHT,
} from "@/utils/colorPalette";

export const InnerContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  text-align: center;
  flex-direction: column;
`;

export const PhraseContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
  row-gap: 10px;
  padding: 20px;
  max-width: 400px;
  width: 100%;

  @media ${devices.tabletM} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const PhraseWrapper = styled.div`
  display: flex;
  gap: 10px;
  font-family: ${SourceCodePro.style.fontFamily};
  width: max-content;
  padding: 5px 1px;
  font-size: 14px;
  min-width: 92px;
  overflow: hidden;
  width: 100%;

  span {
    font-weight: 700;
  }
`;

export const PhraseOuterContainer = styled.div<{ darkTheme: boolean }>`
  background: ${({ darkTheme }) => (darkTheme ? COLOR_BLACK : COLOR_WHITE)};
  border: 1.22872px dashed #202425;
  border-radius: 9.82979px;
  margin: 24px 0 32px 0;

  ${PhraseWrapper} {
    background: ${({ darkTheme }) =>
      darkTheme ? COLOR_BLACK_LIGHT : COLOR_GRAY_LIGHT};

    span {
      color: ${({ darkTheme }) => (darkTheme ? "#9BA1A6" : COLOR_GRAY)};
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1.22872px dashed #202425;
  border-radius: 50px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom: 0;
  border-right: 0;
  border-left: 0;
  gap: 20px;

  button {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  input {
    display: none;
  }
`;

export const NavigationButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;

  a {
    text-decoration: none;
  }
`;

export const InputContainer = styled(Flex)`
  gap: 28px;
  flex-direction: column;
  margin: 24px 0 32px 0;
  max-width: 300px;
  width: 100%;
`;

export const SuccessButtonsContainer = styled(Flex)`
  margin: 33px 0;
  flex-direction: column;
  gap: 20px;

  a {
    text-decoration: none;
  }

  button {
    gap: 7px;
    min-width: 150px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
