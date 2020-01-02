import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/pages/Home";
import DetailMovie from "./components/pages/DetailMovie";
import SearchMovie from "./components/pages/SearchMovie";
import PageNotFound from "./components/pages/PageNotFound";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,700&display=swap");
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans&display=swap");

  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: "Ubuntu", sans-serif;
  }
`;

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" render={routeProps => <Home />}></Route>
        <Route
          exact
          path="/search/:query"
          render={routeProps => <SearchMovie />}
        ></Route>
        <Route
          exact
          path="/movie/:id"
          render={routeProps => <DetailMovie />}
        ></Route>
        <Route render={() => <PageNotFound />}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
