import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import styled from "styled-components";
import device from "../../helpers/device";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import ContentLoader from "react-content-loader";
import PosterMovieLoader from "../loader/PosterMovieLoader";
import PosterMovie from "../layouts/PosterMovie";

const SearchMovie = props => {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  const { query } = useParams();
  const endPoint = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`;
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getMovie = async () => {
      setIsLoading(true);
      const response = await axios.get(endPoint);

      setMovies(response.data.Search);
      setIsLoading(false);
    };

    getMovie();
  }, [endPoint]);

  const seo = {
    title: `Search results for ${query} | MovieQ`
  };

  return (
    <WrapperAll>
      <Helmet>
        <title>{seo.title}</title>
      </Helmet>
      <Gradient>
        <Header />
      </Gradient>
      <Container>
        <SearchResult>
          <h1>
            Search results for <strong>"{query}"</strong>
          </h1>
          {isLoading ? (
            <ListMovie>
              {Array.from(Array(10), (item, index) => (
                <MovieCard key={index}>
                  <PosterMovieLoader />
                  <MovieLabel>
                    <ContentLoader
                      style={{ width: "100%", height: "60px" }}
                      viewBox="0 0 100 60"
                    >
                      <rect
                        x="0"
                        y="10"
                        rx="3"
                        ry="3"
                        width="100%"
                        height="15px"
                      />
                      <rect
                        x="0"
                        y="35"
                        rx="3"
                        ry="3"
                        width="35%"
                        height="15px"
                      />
                    </ContentLoader>
                  </MovieLabel>
                </MovieCard>
              ))}
            </ListMovie>
          ) : movies ? (
            <ListMovie>
              {movies.map(movie => (
                <MovieCard key={movie.imdbID}>
                  <WrapperLink to={`/movie/${movie.imdbID}`}>
                    <PosterMovie poster={movie.Poster} title={movie.Title} />
                    <MovieLabel>{movie.Title}</MovieLabel>
                  </WrapperLink>
                </MovieCard>
              ))}
            </ListMovie>
          ) : (
            <div>No Movies Found</div>
          )}
        </SearchResult>
      </Container>
      <Footer />
    </WrapperAll>
  );
};

export default SearchMovie;

const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const Gradient = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -25%;
    z-index: -1;
    background: linear-gradient(to bottom, #ff6d5a, #ff4158);
    box-shadow: 0 2px 12px 0 #ff6d5a;
    width: 150%;
    min-height: 125px;
    border-radius: 50%;
  }
`;

const Container = styled.div`
  margin-right: 5%;
  margin-left: 5%;

  @media ${device.laptop} {
    max-width: 1200px;
    margin: auto;
  }
`;

const SearchResult = styled.div`
  text-align: center;

  h1 {
    color: #666;
    font-weight: 400;
    font-size: 1rem;
    margin: 1.75rem 0;
  }
`;

const ListMovie = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const MovieCard = styled.li`
  width: 50%;
  display: inline-block;
  padding: 0 0.75rem;

  @media ${device.mobileL} {
    width: 33.333%;
  }

  @media ${device.tablet} {
    width: 25%;
  }

  @media ${device.laptop} {
    width: 20%;
  }
`;

const MovieLabel = styled.div`
  margin: 1rem 0 2rem 0;
  line-height: 18px;
`;

const WrapperLink = styled(Link)`
  width: 100%;
  display: inline-block;
  font-size: 0.875rem;
  color: #666;
  font-weight: 700;
  text-decoration: none;
  text-align: left;
  &:hover {
    text-decoration: none;
  }
`;
