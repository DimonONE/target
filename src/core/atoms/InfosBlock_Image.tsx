import React from "react";
import InfosBlock_Image from "core/img/InfosBlock_Image.jpg";
import styled from "styled-components";

const BlockImage = styled.div`
  display: flex;
  margin-right: 20px;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 576px) {
    margin-right: 0;
    justify-content: center;
    margin-bottom: -50px;
    overflow: hidden;
    img {
      width: 115%;
    }
  }
`;

export const Image = () => {
  return (
    <BlockImage>
      <img src={InfosBlock_Image} alt="InfosBlock_Image" />
    </BlockImage>
  );
};
