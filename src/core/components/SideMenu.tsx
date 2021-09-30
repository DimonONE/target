import React, { useState } from "react";
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

interface MenyPropsType {
  open: boolean;
}

const Menu = styled.nav.attrs((props: MenyPropsType) => ({ open: props.open }))`
  position: absolute;
  display: none;
  z-index: 278;
  top: 0px;
  right: 0px;
  background: #fff;
  height: 100%;
  padding-top: 80px;

  ${(props) =>
    props.open &&
    css`
      display: block;
      width: 75%;
    `};
`;

export const MenuLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  width: 140px;
  margin-top: 8px;
  margin-left: auto;
  padding: 27px 30px 27px 0;
  border-bottom: 1px solid #f0f2f4;

  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 15px;
  text-align: right;
  letter-spacing: 0.08em;
  color: #292f45;
`;

export const SideMenu = (props: { isMenuOpen: boolean }) => {
  return (
    <Menu open={props.isMenuOpen}>
      <MenuLink to="/">HOME</MenuLink>
      <MenuLink to="/profile">PROFILE</MenuLink>
      <MenuLink to="/">MESSAGES</MenuLink>
    </Menu>
  );
};
