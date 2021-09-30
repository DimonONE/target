import React, { useState } from "react";
import styled from "styled-components";
import { BlankButton as BS } from "core/atoms/index";

const NavTabsBlock = styled.div`
  .btn-item:hover,
  .active {
    background: #fff;
    border-bottom: 2px solid #ff8324;
  }
`;

const BlankButton = styled(BS)`
  background: #fff;
  padding: 21px 0;
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;
  text-transform: uppercase;
  color: #292f45;
  border-bottom: 2px solid #f0f2f4;
  margin: 38px 0;
  min-width: 50px;
`;

export const NavTabs: React.FC<NavTabsType> = (props) => {
  const [isActive, setActive] = useState("Tab 1");
  return (
    <NavTabsBlock className={`${props.className}`}>
      <BlankButton
        onClick={() => setActive("Tab 1")}
        className={`btn-item text-start ${
          isActive === "Tab 1" ? "active" : ""
        }`}
      >
        Tab 1
      </BlankButton>
      <BlankButton
        onClick={() => setActive("Tab 2")}
        className={`btn-item text-center ${
          isActive === "Tab 2" ? "active" : ""
        }`}
      >
        Tab 2
      </BlankButton>
      <BlankButton
        onClick={() => setActive("Tab 3")}
        className={`btn-item text-end ${isActive === "Tab 3" ? "active" : ""}`}
      >
        Tab 3
      </BlankButton>
    </NavTabsBlock>
  );
};

interface NavTabsType {
  className?: string;
}
