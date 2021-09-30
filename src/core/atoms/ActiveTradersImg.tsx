import React from "react";
import InfosBlock_Image from "core/img/Graphic.svg";
import styled from "styled-components";

const BlockImage = styled.div`
  display: block;

  img {
    width: 100%;
  }
`;

export const Image = () => {
  return (
    <BlockImage>
      <img src={InfosBlock_Image} alt="InfosBlock_Image" />
    </BlockImage>
  );
};
