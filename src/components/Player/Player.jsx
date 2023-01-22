import React from "react";
import styled from "styled-components";
import { ReactComponent as Play } from "../../assets/images/icon-play.svg";
export const Player = () => {
  return (
    <div>
      <Play />
    </div>
  );
};

const PlayerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
`;
