import React from "react";
import styled, { css } from "styled-components";

type ParagraphBlockType = {
  center: boolean;
};

const ParagraphBlock = styled.div.attrs((props: ParagraphBlockType) => props)`
  font-weight: 300;
  font-size: 20px;
  line-height: 150%;

  margin-top: 30px;
  margin-bottom: 91px;
  color: #60667e;
  opacity: 0.6;
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}

  p {
    margin: 0;
  }
`;

export const Paragraph: React.FC<ParagraphType> = (props) => {
  return (
    <ParagraphBlock className={props.className} center={props.center}>
      <p>{props.text}</p>
    </ParagraphBlock>
  );
};

interface ParagraphType {
  text: string;
  center?: boolean;
  className?: string;
}
