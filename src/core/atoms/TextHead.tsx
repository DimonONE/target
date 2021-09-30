import React from "react";
import styled from "styled-components";

interface TextProps {
  className?: string;
  text: string;
}

const Span = styled.h2`
  margin: 0;
  width: max-content;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 58px;
  color: #292f45;

  @media (max-width: 720px) {
    width: auto;
    font-size: 40px;
  }
  @media (max-width: 420px) {
    width: auto;
    font-size: 40px;
  }
`;

export const TextHead: React.FC<TextProps> = (props) => {
  return <Span className={props.className}>{props.text}</Span>;
};
