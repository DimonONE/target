import { SettingsType } from "Data/GlobalState";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface ContainerProps extends SettingsType {}

interface BlureContainerType extends SettingsType {
  children: object;
}

const Container = styled.div.attrs((props: ContainerProps) => props)`
  .blur {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    background: ${(props) => props.settings.background};

    @media (max-width: 760px) {
      display: flex;
    }
  }
`;

export const BlureContainer = (props: BlureContainerType) => {
  window.document.body.style.overflow = props.settings.overflow
    ? "hidden"
    : "visible";

  useEffect(() => {
    console.log("new Settings", props.settings);
  }, [props.settings]);
  return (
    <Container settings={props.settings}>
      <div className="blur"></div>
      {props.children}
    </Container>
  );
};
