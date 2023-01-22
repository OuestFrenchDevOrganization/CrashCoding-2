import React from "react";
import styled from "styled-components";
import { ReactComponent as Play } from "../../assets/images/icon-play.svg";
export const Player = () => {
  return (
    <PlayerButton>
      <PlayerIcon fill={"blue"} />
    </PlayerButton>
  );
};

const PlayerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
  border: none;
`;

const PlayerIcon = styled(Play)`
  &:hover {
    & circle {
      opacity: 1;
    }
    & path {
      fill: white;
    }
  }
`;
