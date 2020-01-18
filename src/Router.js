import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Helmet from "react-helmet";

const Home = lazy(() => import("./components/pages/Home"));
const DetailMovie = lazy(() => import("./components/pages/DetailMovie"));
const SearchMovie = lazy(() => import("./components/pages/SearchMovie"));
const PageNotFound = lazy(() => import("./components/pages/PageNotFound"));

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Ubuntu:400,400i,500,700&display=swap');
  @import url("https://fonts.googleapis.com/css?family=Noto+Sans&display=swap");

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
    height: -webkit-fill-available;
    height: -moz-available;
    height: stretch;
    min-height: 100%;
    overflow-x: hidden;
  }
`;

const Router = () => {
  const seo = {
    description: "MovieQ, A web-based movies data based on OMDB API",
    keywords: "Movie, MovieQ, Search Movie"
  };
  return (
    <BrowserRouter>
      <Helmet>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Helmet>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
