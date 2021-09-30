import React from "react";
import styled from "styled-components";

import { HeadTextMy, StyleDate } from "core/atoms/index";
import { Paragraph as ParagraphStyle } from "core/atoms/index";

import { NavTabs } from "../components/NavTabs";

const MyReportsBlock = styled.div`
  box-shadow: 0px 3px 3px rgba(41, 47, 69, 0.05);
  border-radius: 30px;
  padding: 38px 49px 50px 49px;
  background: #fff;

  .reports {
    padding-bottom: 20px;
    border-bottom: 2px solid #f0f2f4;
    margin-bottom: 33px;
  }

  .reports:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const Paragraph = styled(ParagraphStyle)`
  font-size: 14px;
  margin: 0;
`;

export const MyReports: React.FC<MyReportsType> = (props) => {
  return (
    <MyReportsBlock className={`${props.className}`}>
      <HeadTextMy>My reports</HeadTextMy>

      <NavTabs />
      <div className="reports">
        <StyleDate>01.07.2021</StyleDate>
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat "
        />
      </div>
      <div className="reports">
        <StyleDate>01.07.2021</StyleDate>
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat "
        />
      </div>
      <div className="reports">
        <StyleDate>01.07.2021</StyleDate>
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat "
        />
      </div>
    </MyReportsBlock>
  );
};

interface MyReportsType {
  className?: string;
}
