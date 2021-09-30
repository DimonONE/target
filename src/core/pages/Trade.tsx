import React from "react";

import { OneTradeComponents } from "core/components/OneTradeComponents";
import { TopTradesContainer } from "core/components/TopTrades";
import { InfosBlock } from "core/components/InfosBlock";
import { RoadMap } from "core/components/RoadMap";
import { ActiveTraders } from "core/components/ActiveTradersToPlatform";

export const Trade: React.FC<TradeProps> = (props) => {
  return (
    <>
      <OneTradeComponents />
      <InfosBlock />
      <TopTradesContainer />
      <RoadMap />
      <ActiveTraders />
    </>
  );
};

interface TradeProps {}
