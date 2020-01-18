import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import styled from "styled-components";
import copy from "clipboard-copy";
import SnackBar from "@material-ui/core/Snackbar";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import device, { size } from "../../helpers/device";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import PosterMovie from "../layouts/PosterMovie";
import calendarPng from "../../assets/img/calendar.png";
import infoPng from "../../assets/img/info.png";
import timePng from "../../assets/img/regular-clock.png";
import imdbPng from "../../assets/img/imdb.png";
import metacriticPng from "../../assets/img/metacritic.png";
import rottenTomatoesPng from "../../assets/img/rotten-tomatoes.png";
import elStarPng from "../../assets/img/el-star.png";
import bookmarkPng from "../../assets/img/bookmark-border.png";
import sharePng from "../../assets/img/share-outline.png";

const DetailMovie = () => {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const { id } = useParams();
  const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`;

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  const [messageSnackbar, setMessageSnackbar] = useState("");

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      const response = await axios.get(endPoint);

      setMovie(response.data);
      setLoading(false);
    };

    getMovie();
  }, [endPoint]);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleCopy = () => {
    const current_url = window.location.href;

    const response = copy(current_url);
    response
      .then(data => {
        setMessageSnackbar("Link copied successfully");
        setOpenSnackBar(true);
      })
      .catch(error => {
        setMessageSnackbar("Failed to copy link");
        setOpenSnackBar(true);
      });
  };

  const seo = {
    title: `${movie.Title} | MovieQ`
  };

  return (
    <WrapperAll>
      <Helmet>
        <title>{seo.title}</title>
      </Helmet>
      <Background>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <Header handleOpenSidebar={handleOpenSidebar} />
            <Sidebar
              openSidebar={openSidebar}
              handleOpenSidebar={handleOpenSidebar}
            />
            <Main>
              <section style={{ padding: 0 }}>
                <TopPage>
                  <Container>
                    <div style={{ paddingTop: "5%" }}>
                      <LeftPoster>
                        <PosterMovie
                          poster={movie.Poster}
                          title={movie.Title}
                        />
                      </LeftPoster>
                      <RightPoster>
                        <Title>{movie.Title}</Title>
                        <FlexList wrap="true">
                          <InfoList>
                            <picture>
                              <img width="14" src={calendarPng} alt="Logo" />
                            </picture>
                            {movie.Year !== "N/A" ? movie.Year : "Unknown"}
                          </InfoList>
                          <InfoList>
                            <picture>
                              <img width="16" src={timePng} alt="Logo" />
                            </picture>
                            {movie.Runtime !== "N/A"
                              ? movie.Runtime
                              : "Unknown"}
                          </InfoList>
                          <InfoList>
                            <picture>
                              <img width="16" src={infoPng} alt="Logo" />
                            </picture>
                            {movie.Rated === "N/A" ||
                            movie.Rated === "Not Rated"
                              ? "Not Rated"
                              : `Rated ${movie.Rated}`}
                          </InfoList>
                        </FlexList>
                      </RightPoster>
                    </div>
                  </Container>
                </TopPage>
              </section>
              <section>
                <Container>
                  <FlexList>
                    <RightPoster>
                      <FlexList wrap="true">
                        {movie.Genre.split(", ").map((genre, index) => (
                          <GenreList key={index}>{genre}</GenreList>
                        ))}
                      </FlexList>
                    </RightPoster>
                  </FlexList>
                </Container>
              </section>
              <section style={{ paddingTop: 0, clear: "both" }}>
                <Container>
                  <FlexList style={{ maxWidth: "450px" }}>
                    {movie.Ratings.map((rating, index) => {
                      switch (rating.Source) {
                        case "Internet Movie Database":
                          return (
                            <RatingList key={index}>
                              <Imdb>
                                <img src={imdbPng} alt="imDB" />
                              </Imdb>
                              <strong>{rating.Value}</strong>
                            </RatingList>
                          );
                        case "Rotten Tomatoes":
                          return (
                            <RatingList key={index}>
                              <RottenTomatoes>
                                <img
                                  width="24"
                                  src={rottenTomatoesPng}
                                  alt="Rotten Tomatoes"
                                />
                              </RottenTomatoes>
                              <strong>{rating.Value}</strong>
                            </RatingList>
                          );
                        case "Metacritic":
                          return (
                            <RatingList key={index}>
                              <MetaCritic>
                                <img
                                  width="24"
                                  src={metacriticPng}
                                  alt="Meta Critic"
                                />
                              </MetaCritic>
                              <strong>{rating.Value}</strong>
                            </RatingList>
                          );
                        default:
                          return (
                            <RatingList>
                              <strong>There is no available rating</strong>
                            </RatingList>
                          );
                      }
                    })}
                  </FlexList>
                </Container>
              </section>
              <section>
                <Container>
                  <Actors>
                    {movie.Actors !== "N/A"
                      ? movie.Actors
                      : "Unknown actors / actresses"}
                  </Actors>
                </Container>
              </section>
              <section>
                <Container>
                  <Creators>
                    <FlexList>
                      <label>Director</label>
                      <Name>
                        {movie.Director !== "N/A" ? movie.Director : "Unknown"}
                      </Name>
                    </FlexList>
                    <FlexList>
                      <label>Writer</label>
                      <Name>
                        {movie.Writer !== "N/A" ? movie.Writer : "Unknown"}
                      </Name>
                    </FlexList>
                  </Creators>
                </Container>
              </section>
              <section>
                <Container>
                  <Plot>
                    <p>
                      {movie.Plot !== "N/A"
                        ? movie.Plot
                        : "No synopsis available"}
                    </p>
                  </Plot>
                </Container>
              </section>
              <section>
                <Container>
                  <FlexList style={{ justifyContent: "space-between" }}>
                    <ButtonBox variant="contained">
                      <picture>
                        <img width="13" src={bookmarkPng} alt="Save" />
                      </picture>
                      Save
                    </ButtonBox>
                    <ButtonBox variant="contained" onClick={handleCopy}>
                      <picture>
                        <img width="15" src={sharePng} alt="Share" />
                      </picture>
                      Share
                    </ButtonBox>
                  </FlexList>
                </Container>
              </section>
            </Main>
            <SnackBar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right"
              }}
              open={openSnackBar}
              onClose={() => {
                setOpenSnackBar(false);
                setMessageSnackbar("");
              }}
              TransitionComponent={Fade}
              autoHideDuration={3000}
              message={messageSnackbar}
            />
            <Footer />
          </>
        )}
      </Background>
    </WrapperAll>
  );
};

export default DetailMovie;

const InfoList = styled.div`
  min-width: 60px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  height: 24px;
  margin-right: 4.5%;
  margin-top: 0.5rem;
  > picture {
    margin-right: 5px;
    display: flex;
    align-items: center;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const GenreList = styled.div`
  background-color: #a4c12d;
  color: #fff;
  border-radius: 20px;
  padding: 5px 12px;
  letter-spacing: 0.3px;
  line-height: normal;
  font-size: 11px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;
  @media ${device.tablet} {
    font-size: 12px;
  }
`;

const Title = styled.h1`
  color: #fff;
  font-size: 5vw;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  &::before {
    content: " ";
    display: block;
    height: 10px;
  }
`;

const LeftPoster = styled.div`
  width: 40%;
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
  padding: 0.875rem;
  color: #666;
  font-size: 0.75rem;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  @media ${device.tablet} {
    font-size: 0.875rem;
  }
`;

const Actors = styled(BoxShadow)`
  background-image: url(${elStarPng});
  background-repeat: no-repeat;
  background-size: 38px;
  background-position: top left;
  font-weight: 700;
  color: #a78a4e;
  text-align: center;
  letter-spacing: 0.3px;
  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
`;

const Name = styled.div`
  font-weight: 500;
  flex: 1;
`;

const Creators = styled(BoxShadow)`
  color: #666;
  letter-spacing: 0.3px;
  line-height: 20px;

  @media ${device.tablet} {
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

const Plot = styled(BoxShadow)`
  color: #666;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
`;

const ButtonBox = withStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "0.5rem",
    color: "#666",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "0.75rem",
    [theme.breakpoints.up(size.tablet)]: {
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
}))(Button);

const MetaCritic = styled.picture`
  > img {
    width: 30px;
  }
`;

const RottenTomatoes = styled.picture`
  > img {
    width: 30px;
  }
`;

const Imdb = styled.picture`
  > img {
    width: 40px;
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

    @media ${device.tablet} {
      font-size: 0.8125rem;
    }
  }
`;

const FlexList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
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

  @media ${device.laptop} {
    max-width: 992px;
    margin: auto;
  }

  @media ${device.laptopM} {
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
  height: 100%;
`;
