import React from "react";
import styled from "styled-components";
import { Table } from "./BlockTable";

import { TextHead, Paragraph, ItemDropdown } from "core/atoms/index";

const TableBlock = styled.div`
  margin-left: 65px;

  @media (max-width: 960px) {
    margin-left: 0;
  }
`;

export const TopTradesContainer: React.FC<TopTradesType> = (props) => {
  return (
    <div className="d-lg-flex">
      <div className="col-sm-9 col-lg-5 m-auto ">
        <TextHead text="Top Trades" />
        <Paragraph
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
           incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore "
        />
        <ItemDropdown
          textButton="Item 1"
          itemMenu={["Sub-item 2.1", "Sub-item 3.1"]}
        />
        <ItemDropdown textButton="Item 2" itemMenu={["Sub-item 2.1"]} />
      </div>
      <TableBlock className="col">
        <Table />
      </TableBlock>
    </div>
  );
};

interface TopTradesType {
  className?: string;
}
