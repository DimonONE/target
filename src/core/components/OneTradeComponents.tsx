import React from "react";
import {
  ButtonDefault,
  TextHead,
  WhitePeopleICO,
  OneTradeC_Image,
  EditIco,
  Paragraph,
} from "core/atoms/index";
import styled from "styled-components";

const OneTrade = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;

  .head-text {
    z-index: 2;
  }

  @media (max-width: 1900px) and (min-width: 1480px) {
    min-height: 1120px;
    .block-img {
      height: auto;
    }
  }

  @media (max-width: 1280px) {
    margin: 90px 0;
    .block-img {
      display: none;
    }
  }
`;

const BlockImg = styled.div`
  margin-left: auto;
`;

const ButtonReg = styled(ButtonDefault)`
  background: #fff;
  color: #292f45;
  border: 2px solid #f58d2d;
  margin-left: 20px;

  &:hover {
    background: #ff8820;
    color: #fff;
  }

  @media (max-width: 420px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;
const ButtonsContainer = styled.div`
  display: flex;

  @media (max-width: 420px) {
    display: block;
  }
`;

export const OneTradeComponents: React.FC<OneTradeType> = (props) => {
  return (
    <OneTrade className="col-au d-flex align-items-center col-12 col-md-auto">
      <div className="head-text col-sm-9 m-sm-auto m-md-0 m-xl-0 col-xl-5">
        <TextHead text="XXP Trade Platform" />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod
            tempor incididunt ut labore et dolore magna aliqua. "
        />
        <ButtonsContainer>
          <ButtonDefault
            className="button-default d-flex"
            icon={<WhitePeopleICO />}
            text={"login"}
          />
          <ButtonReg
            className="d-flex"
            icon={<EditIco />}
            text={"registration"}
          />
        </ButtonsContainer>
      </div>

      <BlockImg className="block-img col-xl-7">
        <OneTradeC_Image />
      </BlockImg>
    </OneTrade>
  );
};

interface OneTradeType {}
