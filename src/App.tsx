import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import theme from "core/layouts/theme";

import styled from "styled-components";

import "core/assets/bootstrap.scss";
import "core/assets/general.scss";

import { Header } from "core/components/Header";
import { Footer } from "core/components/Footer";

import { Container } from "./core/atoms";
import { Profile } from "./core/pages/Profile";
import { Trade } from "./core/pages/Trade";

import { BlureContainer } from "core/components/OpacityMenu";

import { Switch, Route } from "react-router-dom";
import { useGlobalState } from "Data/GlobalState";

function App() {
  const [settings] = useGlobalState("settings");
  return (
    <ThemeProvider theme={theme}>
      <BlureContainer settings={settings}>
        <Header />
        <Switch>
          <Route exact path="/profile">
            <Container>
              <Profile />
            </Container>
          </Route>
          <Route exact path="/">
            <Container>
              <Trade />
            </Container>
          </Route>
        </Switch>
        <Footer />
      </BlureContainer>
    </ThemeProvider>
  );
}

export default App;
