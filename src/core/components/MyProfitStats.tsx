import React from "react";
import styled from "styled-components";

import { HeadTextMy } from "core/atoms/index";
import { Graphic } from "core/components/Graphic";

const MyProfitStatsBlock = styled.div``;
const PieChart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MyProfitStats: React.FC<MyProfitStatsType> = (props) => {
  return (
    <MyProfitStatsBlock className={`${props.className}`}>
      <HeadTextMy>My profit stats</HeadTextMy>
      <div className="d-sm-block d-lg-flex">
        <Graphic className="col-12 col-lg-6" />
        <PieChart className="col-12 col-lg-6 m-auto">
          <svg
            width="230"
            height="230"
            viewBox="0 0 230 230"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="115.176"
              cy="115.176"
              r="102.176"
              stroke="#EBEBEC"
              stroke-width="25"
            />
            <path
              d="M13 115.176C13 171.607 58.7459 217.353 115.176 217.353C171.607 217.353 217.353 171.607 217.353 115.176C217.353 85.0147 204.284 57.9055 183.5 39.2023C165.399 22.9131 141.445 13 115.176 13"
              stroke="url(#paint0_linear)"
              stroke-width="25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="217.353"
                y1="115.176"
                x2="26.3029"
                y2="165.59"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FF8820" />
                <stop offset="0.744792" stop-color="#FF7B2C" />
                <stop offset="1" stop-color="#FF386A" />
              </linearGradient>
            </defs>
          </svg>
        </PieChart>
      </div>
    </MyProfitStatsBlock>
  );
};

interface MyProfitStatsType {
  className?: string;
}
