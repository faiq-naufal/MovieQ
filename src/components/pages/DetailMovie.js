import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
// import device from "../../helpers/device";
import Header from "../layouts/Header";
// import PosterMovie from "./PosterMovie";
// import calendarPng from "../../assets/img/calendar.png";
// import infoPng from "../../assets/img/info.png";
// import timePng from "../../assets/img/regular-clock.png";
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

  useEffect(() => {
    const getMovie = async () => {
      setLoading(true);
      const response = await axios.get(endPoint);

      setMovie(response.data);
      setLoading(false);
      console.log(response.data);
    };

    getMovie();
  }, [endPoint]);

  return (
    <Background>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Header
            style={{
              background: "red"
            }}
          />
          <Container>
            <section style={{ maxWidth: "450px" }}>
              <FlexList>
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
                      return null;
                  }
                })}
              </FlexList>
            </section>
            <section>
              <Actors>{movie.Actors}</Actors>
            </section>
            <section>
              <Creators>
                <FlexList>
                  <label>Director</label>
                  <Name>{movie.Director}</Name>
                </FlexList>
                <FlexList>
                  <label>Writer</label>
                  <Name>{movie.Writer}</Name>
                </FlexList>
              </Creators>
            </section>
            <section>
              <Plot>
                <p>{movie.Plot}</p>
              </Plot>
            </section>
            <section>
              <FlexList style={{ justifyContent: "space-between" }}>
                <ButtonBox>
                  <picture>
                    <img width="13" src={bookmarkPng} alt="Save" />
                  </picture>
                  Save
                </ButtonBox>
                <ButtonBox>
                  <picture>
                    <img width="15" src={sharePng} alt="Share" />
                  </picture>
                  Share
                </ButtonBox>
              </FlexList>
            </section>
          </Container>
        </>
      )}
    </Background>
  );
};

export default DetailMovie;

const BoxShadow = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 0.875rem;
  color: #666;
  font-size: 0.875rem;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  min-height: 150px;
`;

const Actors = styled(BoxShadow)`
  background-image: url(${elStarPng});
  background-repeat: no-repeat;
  background-size: 38px;
  background-position: top left;
  font-weight: 700;
  color: #a78a4e;
  text-align: center;
`;

const Name = styled.div`
  font-weight: 500;
  flex: 1;
`;

const Creators = styled(BoxShadow)`
  color: #666;
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
  line-height: 18px;
`;

const ButtonBox = styled(BoxShadow)`
  flex: 0 0 40%;
  max-width: 250px;
  text-align: center;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  figure {
    display: flex;
    align-items: center;
  }
  img {
    margin-right: 0.75rem;
  }
`;

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
    font-size: 0.8125rem;
    color: #666;
    letter-spacing: 0.3px;
  }
`;

const FlexList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
`;

const Container = styled.div`
  margin-right: 5%;
  margin-left: 5%;

  > section {
    padding: 1rem 0;
  }
`;

const Background = styled.div`
  background-color: #f8f8f8;
  min-width: 100vw;
  min-height: 100%;
`;
