import React from "react";
import styled from "styled-components";

const Line = styled.div`
  @media (max-width: 560px) {
    transform: rotate(90deg);
    width: min-content;
    margin: 20px auto;
  }
`;

export const StrokeLineDecore = () => {
  return (
    <Line>
      <svg
        width="33"
        height="2"
        viewBox="0 0 33 2"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="1"
          y1="1"
          x2="32"
          y2="1"
          stroke="url(#paint0_linear)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-dasharray="5 5"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="33"
            y1="2.5"
            x2="32.5705"
            y2="6.24033"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF8820" />
            <stop offset="0.744792" stop-color="#FF7B2C" />
            <stop offset="1" stop-color="#FF386A" />
          </linearGradient>
        </defs>
      </svg>
    </Line>
  );
};
