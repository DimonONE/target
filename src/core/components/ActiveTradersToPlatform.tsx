import React from "react";
import styled from "styled-components";
import { TextHead, Paragraph, ActiveTradersImg } from "core/atoms/index";

const ActiveTradersBlock = styled.div`
  margin-top: 177px;

  .text-head {
    margin: 0 auto;
    margin-bottom: 85px;
  }
`;

export const ActiveTraders: React.FC<FooterType> = (props) => {
  return (
    <ActiveTradersBlock className={props.className}>
      <TextHead className="text-head " text="Active traders to platform" />
      <div>
        <ActiveTradersImg />
      </div>
      <Paragraph
        center
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
         incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
         exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
      />
    </ActiveTradersBlock>
  );
};

interface FooterType {
  className?: string;
}
