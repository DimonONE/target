import React from "react";
import styled from "styled-components";

import {
  TextHead,
  RoadMapIcons,
  Paragraph as P,
  StrokeLineDecore,
} from "core/atoms/index";

const BlockItems = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;

  background: #fff;
  box-shadow: 0px 3px 3px rgba(41, 47, 69, 0.05);
  border-radius: 30px;
  margin: 0 7px;
`;

const TextHeadCustom = styled(TextHead)`
  margin-bottom: 110px;
`;

const Paragraph = styled(P)`
  margin-bottom: 20px;
`;

const Block = styled.div`
  margin-top: 239px;
`;

export const RoadMap: React.FC<RoadMapProps> = (props) => {
  return (
    <Block>
      <div className="d-flex justify-content-center">
        <TextHeadCustom text="Road Map" />
      </div>
      <BlockItems>
        <div className="align-items-center d-lg-flex col">
          <Item>
            <div className="d-flex justify-content-center">
              <RoadMapIcons.OrangeIcon />
            </div>
            <Paragraph
              center
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco "
            />
          </Item>
          <StrokeLineDecore />
          <Item>
            <div className="d-flex justify-content-center">
              <RoadMapIcons.OrangeIcon />
            </div>
            <Paragraph
              center
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco "
            />
          </Item>
          <StrokeLineDecore />
          <Item>
            <div className="d-flex justify-content-center">
              <RoadMapIcons.OrangeIcon />
            </div>
            <Paragraph
              center
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco "
            />
          </Item>
        </div>

        <div className="mt-5 align-items-center d-lg-flex col">
          <Item>
            <div className="d-flex justify-content-center">
              <RoadMapIcons.OrangeIcon />
            </div>
            <Paragraph
              center
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco "
            />
          </Item>
          <StrokeLineDecore />
          <Item>
            <div className="mt-25 d-flex justify-content-center">
              <RoadMapIcons.OrangeIcon />
            </div>
            <Paragraph
              center
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco "
            />
          </Item>
          <StrokeLineDecore />
          <Item>
            <div className="d-flex justify-content-center">
              <RoadMapIcons.OrangeIcon />
            </div>
            <Paragraph
              center
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
           quis nostrud exercitation ullamco "
            />
          </Item>
        </div>
      </BlockItems>
    </Block>
  );
};

interface RoadMapProps {}
