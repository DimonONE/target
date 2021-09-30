import React from "react";
import styled from "styled-components";

const GraphicBlock = styled.div`
  ul {
    padding: 0;
  }

  li {
    position: relative;
    display: flex;
    align-items: center;
    margin: 31px 0;

    span {
      text-align: end;
      width: 40px;
    }
  }
`;

const Line = styled.div`
  width: 100%;
  margin-left: 20px;
  border-bottom: 2px solid #f0f2f4;
`;

const Column = styled.div.attrs((props: ColumnProps) => props)`
  width: 51px;
  height: ${(props) => props.height}px;
  position: absolute;
  bottom: 50%;
  margin-left: ${(props) =>
    props.marginLeft! > 50
      ? `calc(${props.marginLeft}% - 40px - 51px - 17px)`
      : `${props.marginLeft}%`};

  background: linear-gradient(
    195.48deg,
    #ff8820 13.51%,
    #ff7b2c 53.06%,
    #ff386a 110.02%
  );
`;

const Segment = styled.div.attrs((props: SegmentProps) => props)`
  width: ${(props) => `calc(${props.width}% - 40px - 20px + 5px)`};
  height: 2px;
  position: absolute;
  bottom: 50%;
  margin-left: ${(props) => props.marginLeft}%;

  background: linear-gradient(
    195.48deg,
    #ff8820 13.51%,
    #ff7b2c 53.06%,
    #ff386a 110.02%
  );

  &::after,
  &::before {
    position: absolute;
    display: block;
    bottom: 50%;
    transform: translateY(50%);
    border-radius: 50%;

    content: "";
    width: 10px;
    height: 10px;

    background: linear-gradient(
      195.48deg,
      #ff8820 13.51%,
      #ff7b2c 53.06%,
      #ff386a 110.02%
    );
  }
  &::before {
    right: 0;
  }
`;

export const Graphic: React.FC<GraphicType> = (props) => {
  return (
    <GraphicBlock className={`${props.className}`}>
      <ul>
        <li>
          <span>2500</span> <Line />
        </li>
        <li>
          <span>2000</span> <Line />
        </li>
        <li>
          <span>1500</span> <Line />
        </li>
        <li>
          <span>1000</span> <Line />
        </li>
        <li>
          <span>500</span> <Line />
        </li>
        <li>
          <span>0</span>
          <Line>
            <Column height={2} marginLeft={10} />
            <Column height={200} marginLeft={30} />
            <Column height={70} marginLeft={50} />
            <Segment width={36} marginLeft={25} />
          </Line>
        </li>
      </ul>
    </GraphicBlock>
  );
};

interface GraphicType {
  className?: string;
}

interface ColumnProps {
  height: number;
  marginLeft?: number;
}

interface SegmentProps {
  width: number;
  marginLeft: number;
}
