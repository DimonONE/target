import React from "react";
import styled from "styled-components";

import { Tweets } from "core/components/BlockTweets";
import { NavBar } from "core/components/NavBarProfile";
import { CardProfile } from "core/components/CardProfile";

const SideBarBlock = styled.div``;

export const SideBar: React.FC<SideBarType> = (props) => {
  return (
    <SideBarBlock
      className={`d-none d-md-block col-md-4 col-lg-3 ${
        props.className ? props.className : ""
      }`}
    >
      <CardProfile />
      <NavBar />
      <Tweets />
    </SideBarBlock>
  );
};

interface SideBarType {
  className?: string;
}
