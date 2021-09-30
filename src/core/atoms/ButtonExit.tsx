import React from "react";

import styled from "styled-components";
import exit from "core/img/exit.png";

export const ButtonExitS = styled.span`
  display: flex;
  cursor: pointer;
  margin-right: 26px;
  height: 18px;
  width: 18px;
`;

export const ButtonExit: React.FC<ButtonExitType> = (props) => {
  return (
    <ButtonExitS className={`${props.className}`}>
      <img src={exit} alt="Exit" />
    </ButtonExitS>
  );
};

interface ButtonExitType {
  className?: string;
}
