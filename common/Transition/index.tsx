import { Transition as ReactTransition } from "react-transition-group";

import {
  transitionStyles,
  StyledTransitionGroup,
  ReactAnimation,
} from "@/common/Transition/styles";

interface TransitionProps {
  children: React.ReactNode;
  location: string;
}

const TIMEOUT = 400;

export const Transition = ({ children, location }: TransitionProps) => (
  <StyledTransitionGroup>
    <ReactTransition
      key={location}
      timeout={{
        enter: TIMEOUT,
        exit: TIMEOUT,
      }}
    >
      {(status) => (
        <ReactAnimation
          style={{
            ...transitionStyles[status],
          }}
        >
          {children}
        </ReactAnimation>
      )}
    </ReactTransition>
  </StyledTransitionGroup>
);
