import React from "react";
import { ButtonDefault, TextHead } from "core/atoms/index";

import { Paragraph, InfosBlock_Image } from "core/atoms/index";
import styled from "styled-components";

const InfoBlock = styled.div`
  font-family: "Open Sans", sans-serif;
  font-style: normal;

  .right-block {
    margin-left: auto;
  }

  @media (min-width: 1280px) {
    position: relative;
    min-height: 850px;

    .right-block {
      margin-right: 70px;
    }
  }

  @media (max-width: 1280px) {
    min-height: 600px;

    .right-block {
      /* margin-left: 0; */
      margin-right: 70px;
    }
  }
  @media (max-width: 760px) {
    margin-bottom: 90px;
    .paragraph-container {
      margin-bottom: 20px;
    }
  }

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;

const BlockImg = styled.div`
  height: auto;
  position: absolute;

  @media (max-width: 1280px) {
    display: none;
  }

  @media (max-width: 560px) {
    display: block;
    position: relative;
  }
`;

const RightBlock = styled.div`
  z-index: 2;
`;

export const InfosBlock: React.FC<InfosBlockType> = (props) => {
  return (
    <InfoBlock className="d-flex align-items-center">
      <BlockImg className="block-img col-md-6 ">
        <InfosBlock_Image />
      </BlockImg>
      <RightBlock className="right-block col-sm-9 col-xl-6">
        <TextHead text="Wait XXP Trade Platform?" />
        <Paragraph
          className="paragraph-container"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum."
        />
        <ButtonDefault className="d-flex" text={"button"} />
      </RightBlock>
    </InfoBlock>
  );
};

interface InfosBlockType {}
