import styled from "styled-components";

import { Flex } from "@/common/Container/styles";
import { COLOR_GRAY_LIGHT, COLOR_YELLOW } from "@/utils/colorPalette";

export const Checkmark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 25px;
  border-radius: 7px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid ${COLOR_GRAY_LIGHT};
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;

export const Container = styled(Flex)<{ darkTheme: boolean }>`
  gap: 12px;
  max-width: 300px;
  width 100%;
  justify-content: flex-start;
  margin-bottom: 34px;
  padding-left: 35px;
  height: 25px;
  position: relative;

  a {
    text-decoration: none;
    color: ${COLOR_YELLOW};
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  
  input:checked ~ ${Checkmark} {
    background-color: ${COLOR_YELLOW};
  }

  input:checked ~ ${Checkmark}:after {
    display: block;
  }

  ${Checkmark}{
    background-color: ${({ darkTheme }) =>
      darkTheme ? "#1a1d1e" : COLOR_GRAY_LIGHT};
  }

  ${Checkmark}:after {
   left: 9px;
   top: 5px;
   width: 5px;
   height: 10px;
   border: solid white;
   border-width: 0 3px 3px 0;
   -webkit-transform: rotate(45deg);
   -ms-transform: rotate(45deg);
   transform: rotate(45deg);
 }
`;
