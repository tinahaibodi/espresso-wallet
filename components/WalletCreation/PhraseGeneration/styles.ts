import styled from "styled-components";

import { COLOR_BLACK } from "@/utils/colorPalette";
import { SourceCodePro } from "@/public/assets/fonts/fonts";

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
  width: 400px;
`;

export const PhraseOuterContainer = styled.div`
  background: ${COLOR_BLACK};
  border: 1.22872px dashed #202425;
  border-radius: 9.82979px;
  margin: 24px 0 32px 0;
`;

export const PhraseWrapper = styled.div`
  display: flex;
  gap: 10px;
  font-family: ${SourceCodePro.style.fontFamily};
  background-color: #151718;
  width: max-content;
  padding: 5px 1px;
  font-size: 14px;
  min-width: 92px;
  overflow: hidden;
  width: 100%;

  span {
    color: #3a3f42;
    font-weight: 700;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1.22872px dashed #202425;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-radius: 50px;
  gap: 20px;

  button {
    max-width: 160px;
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
