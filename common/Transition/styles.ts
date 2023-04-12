import styled from "styled-components";
import { TransitionGroup } from "react-transition-group";

import { devices } from "@/utils/devices";

const TIMEOUT: string = "400ms";

interface TransitionProps {
  [string: string]: Record<string, string | number>;
}

export const transitionStyles: TransitionProps = {
  entering: {
    position: `absolute`,
    opacity: 0,
    transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT} ease, transform ${TIMEOUT} ease`,
    opacity: 1,
    transform: `translateX(0px)`,
    animation: "blink .3s linear 2",
  },
  exiting: {
    transition: `opacity ${TIMEOUT} ease, transform ${TIMEOUT} ease`,
    opacity: 0,
    transform: `translateX(-50px)`,
  },
};

export const StyledTransitionGroup = styled(TransitionGroup)`
  position: relative;
`;

export const ReactAnimation = styled.div`
  @media ${devices.tabletM} {
    transform: none !important;
  }
`;
