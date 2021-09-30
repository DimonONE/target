import React from "react";
import styled from "styled-components";

import { HeadTextMy } from "core/atoms/index";

const TweetBlock = styled.div`
  margin-top: 50px;
  padding: 27px 19px 40px 19px;
  height: 833px;
`;

export const Tweets: React.FC<TweetsType> = (props) => {
  return (
    <TweetBlock className={`${props.className}`}>
      <HeadTextMy>my tweets</HeadTextMy>
    </TweetBlock>
  );
};

interface TweetsType {
  className?: string;
}
