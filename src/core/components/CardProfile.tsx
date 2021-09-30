import React from "react";
import styled from "styled-components";

import { BlockAvatar, ButtonExit } from "core/atoms/index";

const BF = styled.div`
  width: 100%;
  height: 100px;
  padding: 6px 0 6px 6px;
  display: flex;
  align-items: center;

  background: linear-gradient(
    255.22deg,
    #ff8820 10.44%,
    #ff7b2c 69.37%,
    #ff386a 89.56%
  );
  box-shadow: 0px 3px 3px rgba(41, 47, 69, 0.05);
  border-radius: 150px;
`;

const SpanCustom = styled.p`
  margin: 0;
  margin-left: 19px;
  margin-right: auto;

  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const CardProfile: React.FC<ButtonProfileType> = (props) => {
  return (
    <BF className={`${props.className ? props.className : ""}`}>
      <BlockAvatar>
        <img src="" alt="Avatar" />
      </BlockAvatar>
      <SpanCustom>Ivan Ivanov</SpanCustom>
      <ButtonExit />
    </BF>
  );
};

interface ButtonProfileType {
  className?: string;
}
