import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import useFetch from "../hooks/useFetch";
import useToggle from "../hooks/useToggle";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import device from "../../helpers/device";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import PosterMovie from "../layouts/PosterMovie";
import PosterMovieLoader from "../loader/PosterMovieLoader";
import calendarPng from "../../assets/img/calendar.png";
import infoPng from "../../assets/img/info.png";
import timePng from "../../assets/img/regular-clock.png";
import imdbPng from "../../assets/img/imdb.png";
import metacriticPng from "../../assets/img/metacritic.png";
import rottenTomatoesPng from "../../assets/img/rotten-tomatoes.png";
import elStarPng from "../../assets/img/el-star.png";
import bookmarkPng from "../../assets/img/bookmark-border.png";
import sharePng from "../../assets/img/share-outline.png";
import ContentLoaded from "react-content-loader";

const DetailMovie = () => {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const { id } = useParams();
  const endPoint = `http://www.omdbapi.com/?apikey=${ API_KEY }&i=${ id }`;
  const response = useFetch( endPoint, { isLoading: true, data: null } );
  const { isLoading, data: movieResponses } = response;

  let movie = {};
  if ( movieResponses ) {
    movie = movieResponses.data;

  }
  const seo = {
    title: `${ movie.Title || `Detail of Movie` } | MovieQ`
  };

  const [ isSidebarOpen, toggleSidebar ] = useToggle( false );

  const currentUrl = window.location.href;


  return (
    <WrapperAll>
      <Helmet>
        <title>{ seo.title }</title>
        <meta property="og:title" content={ seo.title } />
        <meta name="twitter:title" content={ seo.title } />
        <meta property="og:url" content={ window.location.href } />
      </Helmet>
      <Background>
        <Header toggleSidebar={ toggleSidebar } />
        <Sidebar isSidebarOpen={ isSidebarOpen } toggleSidebar={ toggleSidebar } />
        <Main>
          { !movie.Error ? (
            <>
              <section style={ { padding: 0 } }>
                <TopPage>
                  <Container>
                    <div style={ { paddingTop: "5%" } }>
                      <LeftPoster>
                        { isLoading ? (
                          <PosterMovieLoader />
                        ) : (
                            <PosterMovie
                              poster={ movie.Poster }
                              title={ movie.Title }
                            />
                          ) }
                      </LeftPoster>
                      <RightPoster>
                        { isLoading ? (
                          <ContentLoaded
                            style={ {
                              width: "50%",
                              maxWidth: "450px",
                              height: "80px"
                            } }
                            viewBox="0 0 450 80"
                          >
                            <rect
                              x="0"
                              y="15"
                              rx="2"
                              ry="2"
                              width="100%"
                              height="25px"
                            />
                            <rect
                              x="0"
                              y="60"
                              rx="2"
                              ry="2"
                              width="30%"
                              height="14px"
                            />
                            <rect
                              x="35%"
                              y="60"
                              rx="2"
                              ry="2"
                              width="35%"
                              height="14px"
                            />
                            <rect
                              x="75%"
                              y="60"
                              rx="2"
                              ry="2"
                              width="35%"
                              height="14px"
                            />
                          </ContentLoaded>
                        ) : (
                            <>
                              <Title>{ movie.Title }</Title>
                              <FlexList wrap="true">
                                <InfoList>
                                  <picture>
                                    <img
                                      width="14"
                                      src={ calendarPng }
                                      alt="Logo"
                                    />
                                  </picture>
                                  { movie.Year !== "N/A" ? movie.Year : "Unknown" }
                                </InfoList>
                                <InfoList>
                                  <picture>
                                    <img width="16" src={ timePng } alt="Logo" />
                                  </picture>
                                  { movie.Runtime !== "N/A"
                                    ? movie.Runtime
                                    : "Unknown" }
                                </InfoList>
                                <InfoList>
                                  <picture>
                                    <img width="16" src={ infoPng } alt="Logo" />
                                  </picture>
                                  { movie.Rated === "N/A" ||
                                    movie.Rated === "Not Rated"
                                    ? "Not Rated"
                                    : `Rated ${ movie.Rated }` }
                                </InfoList>
                              </FlexList>
                            </>
                          ) }
                      </RightPoster>
                    </div>
                  </Container>
                </TopPage>
              </section>
              <section>
                <Container>
                  <FlexList>
                    <RightPoster>
                      { isLoading ? (
                        <ContentLoaded
                          style={ {
                            maxWidth: "300px",
                            width: "100%",
                            height: "50px"
                          } }
                          viewBox="0 0 300 50"
                        >
                          <rect
                            x="0"
                            y="5"
                            rx="2"
                            ry="2"
                            width="20%"
                            height="13px"
                          />
                          <rect
                            x="25%"
                            y="5"
                            rx="2"
                            ry="2"
                            width="25%"
                            height="13px"
                          />
                          <rect
                            x="55%"
                            y="5"
                            rx="2"
                            ry="2"
                            width="35%"
                            height="13px"
                          />
                          <rect
                            x="0"
                            y="35"
                            rx="2"
                            ry="2"
                            width="40%"
                            height="13px"
                          />
                          <rect
                            x="45%"
                            y="35"
                            rx="2"
                            ry="2"
                            width="30%"
                            height="13px"
                          />
                        </ContentLoaded>
                      ) : (
                          <FlexList wrap="true">
                            { movie.Genre.split( ", " ).map( ( genre, index ) => (
                              <GenreList key={ index }>{ genre }</GenreList>
                            ) ) }
                          </FlexList>
                        ) }
                    </RightPoster>
                  </FlexList>
                </Container>
              </section>
              <section style={ { paddingTop: 0, clear: "both" } }>
                <Container>
                  { isLoading ? (
                    <ContentLoaded
                      style={ {
                        maxWidth: "500px",
                        width: "100%",
                        height: "30px"
                      } }
                      viewBox="0 0 400 30"
                    >
                      <rect
                        x="0"
                        y="5"
                        rx="2"
                        ry="2"
                        width="30%"
                        height="14px"
                      />
                      <rect
                        x="35%"
                        y="5"
                        rx="2"
                        ry="2"
                        width="35%"
                        height="14px"
                      />
                      <rect
                        x="75%"
                        y="5"
                        rx="2"
                        ry="2"
                        width="35%"
                        height="14px"
                      />
                    </ContentLoaded>
                  ) : (
                      <FlexList style={ { maxWidth: "450px" } }>
                        { movie.Ratings.map( ( rating, index ) => {
                          switch ( rating.Source ) {
                            case "Internet Movie Database":
                              return (
                                <RatingList key={ index }>
                                  <Imdb>
                                    <img src={ imdbPng } alt="imDB" />
                                  </Imdb>
                                  <strong>{ rating.Value }</strong>
                                </RatingList>
                              );
                            case "Rotten Tomatoes":
                              return (
                                <RatingList key={ index }>
                                  <RottenTomatoes>
                                    <img
                                      width="24"
                                      src={ rottenTomatoesPng }
                                      alt="Rotten Tomatoes"
                                    />
                                  </RottenTomatoes>
                                  <strong>{ rating.Value }</strong>
                                </RatingList>
                              );
                            case "Metacritic":
                              return (
                                <RatingList key={ index }>
                                  <MetaCritic>
                                    <img
                                      width="24"
                                      src={ metacriticPng }
                                      alt="Meta Critic"
                                    />
                                  </MetaCritic>
                                  <strong>{ rating.Value }</strong>
                                </RatingList>
                              );
                            default:
                              return (
                                <RatingList>
                                  <strong>There is no available rating</strong>
                                </RatingList>
                              );
                          }
                        } ) }
                      </FlexList>
                    ) }
                </Container>
              </section>
              <section>
                <Container>
                  <Actors>
                    { isLoading ? (
                      <ContentLoaded
                        style={ { width: "100%", height: "40px" } }
                        viewBox="0 0 100 40"
                      >
                        <rect
                          x="12.5%"
                          y="5"
                          rx="2"
                          ry="2"
                          width="75%"
                          height="12px"
                        />
                        <rect
                          x="25%"
                          y="28"
                          rx="2"
                          ry="2"
                          width="50%"
                          height="12px"
                        />
                      </ContentLoaded>
                    ) : movie.Actors !== "N/A" ? (
                      movie.Actors
                    ) : (
                          "Unknown actors / actresses"
                        ) }
                  </Actors>
                </Container>
              </section>
              <section>
                <Container>
                  <Creators>
                    { isLoading ? (
                      <ContentLoaded
                        style={ { width: "100%", height: "40px" } }
                        viewBox="0 0 100 40"
                      >
                        <rect
                          x="12.5%"
                          y="5"
                          rx="2"
                          ry="2"
                          width="75%"
                          height="12px"
                        />
                        <rect
                          x="25%"
                          y="28"
                          rx="2"
                          ry="2"
                          width="50%"
                          height="12px"
                        />
                      </ContentLoaded>
                    ) : (
                        <>
                          <FlexList>
                            <label>Director</label>
                            <Name>
                              { movie.Director !== "N/A"
                                ? movie.Director
                                : "Unknown" }
                            </Name>
                          </FlexList>
                          <FlexList>
                            <label>Writer</label>
                            <Name>
                              { movie.Writer !== "N/A" ? movie.Writer : "Unknown" }
                            </Name>
                          </FlexList>
                        </>
                      ) }
                  </Creators>
                </Container>
              </section>
              <section>
                <Container>
                  <Plot>
                    { isLoading ? (
                      <ContentLoaded
                        style={ { width: "100%", height: "40px" } }
                        viewBox="0 0 100 40"
                      >
                        <rect
                          x="12.5%"
                          y="5"
                          rx="2"
                          ry="2"
                          width="75%"
                          height="12px"
                        />
                        <rect
                          x="25%"
                          y="28"
                          rx="2"
                          ry="2"
                          width="50%"
                          height="12px"
                        />
                      </ContentLoaded>
                    ) : (
                        <p>
                          { movie.Plot !== "N/A"
                            ? movie.Plot
                            : "No synopsis available" }
                        </p>
                      ) }
                  </Plot>
                </Container>
              </section>
              <section>
                <Container>
                  <FlexList style={ { justifyContent: "space-between" } }>
                    <ButtonBox variant="contained">
                      <picture>
                        <img width="13" src={ bookmarkPng } alt="Copy Link" />
                      </picture>
                      <span>Save</span>
                    </ButtonBox>
                    <ButtonBox variant="contained">
                      <ShareLink
                        href={ `https://facebook.com/sharer/sharer.php?u=${ currentUrl }` }
                        target="_blank"
                      >
                        <picture>
                          <img width="15" src={ sharePng } alt="Share" />
                        </picture>
                        <span>Share</span>
                      </ShareLink>
                    </ButtonBox>
                  </FlexList>
                </Container>
              </section>
            </>
          ) : (
              <div style={ { textAlign: "center" } }>{ movie.Error }</div>
            ) }
        </Main>
        <Footer />
      </Background>
    </WrapperAll>
  );
};

export default DetailMovie;

const ShareLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #666;
  text-decoration: none;
`;

const InfoList = styled.div`
  min-width: 60px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  height: 24px;
  margin-right: 4.5%;
  margin-top: 6px;
  > picture {
    margin-right: 5px;
    display: flex;
    align-items: center;
  }
  @media ${device.tablet } {
    font-size: 1rem;
  }
`;

const GenreList = styled.div`
  background: #a9ca23;
  color: #fff;
  border-radius: 20px;
  padding: 4px 12px;
  letter-spacing: 0.36px;
  line-height: normal;
  font-size: 11px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;

  @media ${device.tablet } {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 5vw;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0;
  @media ${device.tablet } {
    font-size: 2.5rem;
  }

  &::before {
    content: " ";
    display: block;
    height: 10px;
  }
`;

const LeftPoster = styled.div`
  width: 44%;
  max-width: 240px;
  > div {
    width: 100%;
    float: left;
    margin-bottom: 2rem;
    margin-right: 3vw;
  }
`;

const RightPoster = styled.div`
  width: auto;
`;

const BoxShadow = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 0.625rem 1rem;

  color: #666;
  font-size: 0.75rem;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  @media ${device.mobileL } {
    padding: 1rem;
    font-size: 0.813rem;
  }
  @media ${device.tablet } {
    font-size: 0.875rem;
  }
`;

const Actors = styled( BoxShadow )`
  background-image: url(${elStarPng });
  background-repeat: no-repeat;
  background-size: 38px;
  background-position: top left;
  font-weight: 700;
  color: #a78a4e;
  text-align: center;
  letter-spacing: 0.3px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  @media ${device.tablet } {
    padding: 1.5rem 1rem;
  }
`;

const Name = styled.div`
  font-weight: 500;
  flex: 1;
`;

const Creators = styled( BoxShadow )`
  color: #666;
  letter-spacing: 0.3px;
  line-height: 20px;

  @media ${device.tablet } {
    padding: 1.5rem 1rem;
  }
  label {
    flex: 0 0 80px;
    font-weight: 400;
    margin-right: 0.5rem;
  }

  > div:not(:first-child) {
    margin-top: 0.875rem;
  }
`;

const Plot = styled( BoxShadow )`
  color: #666;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  @media ${device.tablet } {
    padding: 1.5rem 1rem;
  }
`;

const ButtonBox = withStyles( theme => ( {
  root: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "0.5rem",
    color: "#666",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "0.75rem",
    [ theme.breakpoints.up( "768" ) ]: {
      fontSize: "0.875rem"
    },
    textTransform: "initial",
    letterSpacing: "0.3px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    flex: " 0 0 40%",
    maxWidth: "250px",
    textAlign: "center",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& picture": {
      display: "flex",
      alignItems: "center"
    },
    "& img": {
      marginRight: "0.5rem"
    }
  }
} ) )( Button );

const MetaCritic = styled.picture`
  img {
    width: 24px;
  }
  @media ${device.tablet } {
    > img {
      width: 30px;
    }
  }
`;

const RottenTomatoes = styled.picture`
  img {
    width: 24px;
  }
  @media ${device.tablet } {
    > img {
      width: 30px;
    }
  }
`;

const Imdb = styled.picture`
  > img {
    width: 30px;
  }
  @media ${device.tablet } {
    > img {
      width: 40px;
    }
  }
`;

const RatingList = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > picture {
    display: flex;
    align-items: center;
  }

  > strong {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    color: #666;
    letter-spacing: 0.3px;

    @media ${device.tablet } {
      font-size: 0.8125rem;
    }
  }
`;

const FlexList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => ( props.wrap ? "wrap" : "nowrap" ) };
`;

const TopPage = styled.div`
  margin-top: -125px;
  margin-left: -50%;
  padding-top: 125px;
  padding-left: 50%;
  padding-right: 50%;
  padding-bottom: 20px;
  z-index: -1;
  background: linear-gradient(to bottom, #ff6d5a, #ff4158);
  box-shadow: 0 2px 12px 0 #ff6d5a;
  width: 200%;
  border-radius: 50%;
`;

const Container = styled.div`
  margin-right: 5.5%;
  margin-left: 5.5%;

  @media ${device.laptop } {
    max-width: 992px;
    margin: auto;
  }

  @media ${device.laptopM } {
    max-width: 1140px;
    margin: auto;
  }
`;

const Main = styled.main`
  section {
    padding: 1rem 0;
  }
`;

const Background = styled.div`
  background-color: #f8f8f8;
  min-height: 100%;
  opacity: 0.99;
`;

const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;
