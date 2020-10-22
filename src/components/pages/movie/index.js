import React, { useState } from "react"
import ContentLoaded from "react-content-loader"
import copy from "clipboard-copy"
import SnackBar from "@material-ui/core/Snackbar"
import Fade from "@material-ui/core/Fade"
import {
  InfoList,
  GenreList,
  Title,
  LeftPoster,
  RightPoster,
  Actors,
  Name,
  Creators,
  Plot,
  ButtonBox,
  MetaCritic,
  RottenTomatoes,
  Imdb,
  RatingList,
  FlexList,
  TopPage,
  Container,
  Main,
  Background,
  WrapperAll,
} from "./styled"
import Header from "../../commons/Header"
import Footer from "../../commons/Footer"
import Sidebar from "../../commons/Sidebar"
import PosterMovie from "../../commons/PosterMovie"
import PosterMovieLoader from "../../commons/PosterMovieLoader"
import calendarPng from "../../../images/calendar.png"
import infoPng from "../../../images/info.png"
import timePng from "../../../images/regular-clock.png"
import imdbPng from "../../../images/imdb.png"
import metacriticPng from "../../../images/metacritic.png"
import rottenTomatoesPng from "../../../images/rotten-tomatoes.png"
import useToggle from "../../hooks/useToggle"

export default function MovieLayout({ isLoading, movie }) {
  const [openSnackBar, setOpenSnackBar] = useState(false)
  const [messageSnackbar, setMessageSnackbar] = useState("")
  const [isSidebarOpen, toggleSidebar] = useToggle(false)
  const handleCopy = () => {
    const currentUrl = window.location.href
    const response = copy(currentUrl)
    response
      .then(() => {
        setMessageSnackbar("Link copied successfully")
        setOpenSnackBar(true)
      })
      .catch(error => {
        console.log(error)
        setMessageSnackbar("Failed to copy link")
        setOpenSnackBar(true)
      })
  }
  return (
    <>
      <WrapperAll>
        <Background>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <Main>
            <>
              <section style={{ padding: 0 }}>
                <TopPage>
                  <Container>
                    <div style={{ paddingTop: "5%" }}>
                      <LeftPoster>
                        {isLoading ? (
                          <PosterMovieLoader />
                        ) : (
                          <PosterMovie
                            poster={movie.Poster}
                            title={movie.Title}
                          />
                        )}
                      </LeftPoster>
                      <RightPoster>
                        {isLoading ? (
                          <ContentLoaded
                            style={{
                              width: "50%",
                              maxWidth: "450px",
                              height: "80px",
                            }}
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
                            <Title>{movie.Title}</Title>
                            <FlexList wrap="true">
                              <InfoList>
                                <picture>
                                  <img
                                    width="14"
                                    src={calendarPng}
                                    alt="Logo"
                                  />
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
                          </>
                        )}
                      </RightPoster>
                    </div>
                  </Container>
                </TopPage>
              </section>
              <section>
                <Container>
                  <FlexList>
                    <RightPoster>
                      {isLoading ? (
                        <ContentLoaded
                          style={{
                            maxWidth: "300px",
                            width: "100%",
                            height: "50px",
                          }}
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
                          {movie.Genre.split(", ").map((genre, index) => (
                            <GenreList key={index}>{genre}</GenreList>
                          ))}
                        </FlexList>
                      )}
                    </RightPoster>
                  </FlexList>
                </Container>
              </section>
              <section style={{ paddingTop: 0, clear: "both" }}>
                <Container>
                  {isLoading ? (
                    <ContentLoaded
                      style={{
                        maxWidth: "500px",
                        width: "100%",
                        height: "30px",
                      }}
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
                            )
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
                            )
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
                            )
                          default:
                            return (
                              <RatingList>
                                <strong>There is no available rating</strong>
                              </RatingList>
                            )
                        }
                      })}
                    </FlexList>
                  )}
                </Container>
              </section>
              <section>
                <Container>
                  <Actors>
                    {isLoading ? (
                      <ContentLoaded
                        style={{ width: "100%", height: "40px" }}
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
                    )}
                  </Actors>
                </Container>
              </section>
              <section>
                <Container>
                  <Creators>
                    {isLoading ? (
                      <ContentLoaded
                        style={{ width: "100%", height: "40px" }}
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
                          <span>Director</span>
                          <Name>
                            {movie.Director !== "N/A"
                              ? movie.Director
                              : "Unknown"}
                          </Name>
                        </FlexList>
                        <FlexList>
                          <span>Writer</span>
                          <Name>
                            {movie.Writer !== "N/A" ? movie.Writer : "Unknown"}
                          </Name>
                        </FlexList>
                      </>
                    )}
                  </Creators>
                </Container>
              </section>
              <section>
                <Container>
                  <Plot>
                    {isLoading ? (
                      <ContentLoaded
                        style={{ width: "100%", height: "40px" }}
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
                        {movie.Plot !== "N/A"
                          ? movie.Plot
                          : "No synopsis available"}
                      </p>
                    )}
                  </Plot>
                </Container>
              </section>
              <section>
                <Container>
                  <FlexList style={{ justifyContent: "center" }}>
                    <ButtonBox variant="contained" onClick={handleCopy}>
                      Copy Link
                    </ButtonBox>
                  </FlexList>
                </Container>
              </section>
            </>
          </Main>
          <Footer />
        </Background>
      </WrapperAll>
      <SnackBar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={openSnackBar}
        onClose={() => {
          setOpenSnackBar(false)
          setMessageSnackbar("")
        }}
        TransitionComponent={Fade}
        autoHideDuration={3000}
        message={messageSnackbar}
      />
    </>
  )
}
