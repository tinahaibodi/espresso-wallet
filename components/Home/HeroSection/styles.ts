import styled from "styled-components";

const CONTAINER_MAX_WIDTH = "33.25rem";

export const ButtonsContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  gap: 12px;

  a {
    text-decoration: none;
  }
`;

export const HeroSectionContainer = styled.div`
  max-width: ${CONTAINER_MAX_WIDTH};
  width: 100%;
  min-height: 550px;
`;

export const AbsoluteImage = styled.div<{ src: string }>`
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
  right: 15px;
  width: 100%;
  height: 100%;
  max-width: 325px;
  max-height: 395px;
`;
