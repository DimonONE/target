import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LogoBlack as Logo } from "../atoms/LogoBlack";

import { Container } from "core/atoms";
import { NavLink } from "react-router-dom";
import { SideMenu } from "./SideMenu";

import { useGlobalState } from "Data/GlobalState";

import buttonMenuDefault from "../img/buttonMenuDefault.svg";
import exitMenu from "../img/exitMenu.png";

const HeaderBlock = styled.header`
  .nav-pc {
    display: flex;
  }
  @media (max-width: 760px) {
    display: flex;

    .nav-pc {
      display: none;
    }
  }
`;

const SideMenuBlock = styled.div`
  width: max-content;
  display: none;

  .button {
    position: relative;
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    z-index: 9999;
    background: linear-gradient(
      255.22deg,
      #ff8820 10.44%,
      #ff7b2c 69.37%,
      #ff386a 89.56%
    );

    &::after,
    &.act::after {
      content: "";
      position: absolute;
      background-repeat: no-repeat;
      transform: translateX(-45%) translateY(-50%);
    }
    &::after {
      background-image: ${`url(${buttonMenuDefault})`};
      width: 20px;
      height: 16px;
    }
    &.act::after {
      background-image: ${`url(${exitMenu})`};
      height: 20px;
    }
  }
  @media (max-width: 760px) {
    display: flex;
  }
`;

const Link = styled(NavLink)`
  text-decoration: none;
  text-transform: uppercase;
  color: #292f45;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: bold;

  width: 200px;
  height: 78px;
  display: block;
  text-align: center;
  padding: 27px 0;

  &:hover {
    color: #292f45;
    border-bottom: 2px solid #ff8324;
  }
`;

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [settings, setSettings] = useGlobalState("settings");

  useEffect(() => {
    setSettings({
      ...settings,
      background: isMenuOpen ? "rgba(41, 47, 69, 0.1)" : "",
      overflow: isMenuOpen,
    });
  }, [isMenuOpen]);

  return (
    <Container>
      <HeaderBlock className="d-sm-flex ps-sm-4 pe-sm-4 p-md-0 justify-content-between">
        <Logo />
        <nav className="col-sm-5 col-md-4 col-auto pe-sm-3 p-md-0 float-end nav-pc">
          <Link to="/">HOME</Link>
          <Link to="/profile">PROFILE</Link>
          <Link to="/">MESSAGES</Link>
        </nav>
        <SideMenuBlock>
          <button
            className={`button ${isMenuOpen ? "act" : ""}`}
            onClick={() => setMenuOpen(!isMenuOpen)}
          ></button>
          <SideMenu isMenuOpen={isMenuOpen} />
        </SideMenuBlock>
      </HeaderBlock>
    </Container>
  );
};
