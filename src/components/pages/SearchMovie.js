import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import device from "../../helpers/device";
import logo from "../../assets/img/logo-white.png";
import Header from "../layouts/Header";

const SearchMovie = props => {
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  let { query } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );

      setMovies(response.data.Search);
    };

    getMovie();
  }, [query]);

  return (
    <>
      <Header />
      <StyledSearchResult>
        <h2>
          Search results for <strong>"{query}"</strong>
        </h2>
        {movies ? (
          <StyledListMovie>
            {movies.map(movie => (
              <StyledMovieCard key={movie.imdbID}>
                <StyledLink to={`/movie/${movie.imdbID}`}>
                  {movie.Poster !== "N/A" ? (
                    <StyledThumbnail>
                      <StyledImageThumbnail
                        src={movie.Poster}
                        alt={movie.Title}
                      />
                    </StyledThumbnail>
                  ) : (
                    <StyledThumbnail noImage={true}>
                      <StyledLogo src={logo} alt="Logo" />
                    </StyledThumbnail>
                  )}
                  <div style={{ margin: "1.5rem 0" }}>{movie.Title}</div>
                </StyledLink>
              </StyledMovieCard>
            ))}
          </StyledListMovie>
        ) : (
          "No Movies Found"
        )}
      </StyledSearchResult>
    </>
  );
};

export default SearchMovie;

const StyledSearchResult = styled.div`
  text-align: center;

  h2 {
    color: #666;
    font-weight: 400;
    font-size: 1rem;
    margin: 1.75rem 0;
  }
`;

const StyledListMovie = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`;

const StyledMovieCard = styled.li`
  width: 50%;
  display: inline-block;
  padding: 0 1rem;

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

const StyledLink = styled(Link)`
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
  /* padding-top: 56.25%; */
`;

const StyledThumbnail = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding-bottom: 125%;
  background: ${props =>
    props.noImage
      ? "linear-gradient(to bottom, #ff6d5a, #ff4158)"
      : "transparent"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const StyledImageThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;
