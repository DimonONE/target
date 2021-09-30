import React from "react";
import styled from "styled-components";
import { SideBar } from "../components/SideBarProfile";
import { MyProfitStats } from "../components/MyProfitStats";
import { Table } from "../components/BlockTable";
import { MyReports } from "../components/MyReports";

import { HeadTextMy } from "core/atoms/index";

const ProfileContent = styled.div`
  margin-top: 71px;

  .content {
    margin-left: 50px;
  }

  .block-my_ {
    margin-top: 50px;
    box-shadow: 0px 3px 3px rgba(41, 47, 69, 0.05);
    border-radius: 30px;
    padding: 38px 49px 50px 49px;
    background: #fff;
  }

  .block-my_:last-child {
    margin-bottom: 132px;
  }
`;

export const Profile = () => {
  return (
    <>
      <ProfileContent className="d-flex">
        <SideBar />
        <div className="content w-md-100">
          <MyProfitStats className="block-my_ mt-0" />
          <Table
            className="block-my_"
            textHead={<HeadTextMy>My markets</HeadTextMy>}
          />
          <MyReports className="block-my_" />
        </div>
      </ProfileContent>
    </>
  );
};
