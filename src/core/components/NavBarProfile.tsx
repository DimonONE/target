import React from "react";
import styled from "styled-components";

import {
  IconForHome,
  IconForReports,
  IconForMessages,
  IconForSettings,
} from "core/atoms/IconForSidebar";

const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px;
  text-decoration: none;

  p {
    opacity: 0.6;
  }

  .active {
    display: none;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #c4c4c4;
  }

  &:active .active,
  &:hover p {
    display: block;
    opacity: 1;
  }

  &:hover .active,
  &:hover p {
    display: block;
    opacity: 1;
  }
`;

const BlockNavBar = styled.div`
  margin-top: 56px;
  box-shadow: 0px 3px 3px rgba(41, 47, 69, 0.05);
  border-radius: 30px;
  padding: 15px 3px 25px 27px;
`;

const LinkParagraph = styled.a`
  && {
    text-decoration: none;
    font-family: "Open Sans", sans-serif;
    font-style: normal;
    font-size: 12px;
    line-height: 70px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #292f45;

    margin: 0;
    margin-left: 15px;
  }
`;

export const NavBar: React.FC<NavBarType> = (props) => {
  return (
    <BlockNavBar>
      <Link href="/">
        <span className={`align-items-center d-flex `}>
          <IconForHome />
          <LinkParagraph>Home</LinkParagraph>
        </span>
        <div className="active"></div>
      </Link>
      <Link href="/">
        <span className={`align-items-center d-flex `}>
          <IconForReports />
          <LinkParagraph>Reports</LinkParagraph>
        </span>
        <div className="active"></div>
      </Link>
      <Link href="/">
        <span className={`align-items-center d-flex `}>
          <IconForMessages />
          <LinkParagraph>Message</LinkParagraph>
        </span>
        <div className="active"></div>
      </Link>
      <Link href="/">
        <span className={`align-items-center d-flex `}>
          <IconForSettings />
          <LinkParagraph>Settings</LinkParagraph>
        </span>
        <div className="active"></div>
      </Link>
      <Link href="/">
        <span className={`align-items-center d-flex `}>
          <IconForHome />
          <LinkParagraph>Profile</LinkParagraph>
        </span>
        <div className="active"></div>
      </Link>
    </BlockNavBar>
  );
};

interface NavBarType {
  className?: string;
}
