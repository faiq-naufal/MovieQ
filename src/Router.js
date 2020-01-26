import React, { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./components/pages/Home"));
const DetailMovie = lazy(() => import("./components/pages/DetailMovie"));
const SearchMovie = lazy(() => import("./components/pages/SearchMovie"));
const PageNotFound = lazy(() => import("./components/pages/PageNotFound"));

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: "Ubuntu", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  body, html, #root {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-height: 100%;
    overflow-x: hidden;
  }

`;

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HelmetProvider>
        <Suspense fallback={<></>}>
          <Switch>
            <Route exact path="/" render={() => <Home />}></Route>
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
        </Suspense>
      </HelmetProvider>
    </BrowserRouter>
  );
};

export default Router;
