import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from 'styled-components';

const DetailMovie = () => {
  const [movie, setMovie] = useState({});
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  let { id } = useParams();

  const genre = [];

  useEffect(() => {
    
    const getMovie = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );

      setMovie(response.data);
      console.log(response.data);
      
    };

    getMovie();
    
    
  }, [id]);

  return (
    <>
      <div>
        <h1>
        {movie.Title}
        </h1>
        <StyledGenre>
          {movie.Genre ? movie.Genre.split(', ').map((genre, index) => (
            <li key={index}>{genre}</li>
          )) : ''}
        </StyledGenre>
        <StyledBoxShadow>
          {movie.Actors}
        </StyledBoxShadow>
        <StyledBoxShadow>
          {movie.Director}
          {movie.Writer}
        </StyledBoxShadow>
        <StyledBoxShadow>
          <Paragraph>
          {movie.plot}
          </Paragraph>
        </StyledBoxShadow>
      </div>
      <StyledRating>
        {movie.Ratings ? movie.Ratings.map((rating, index) => (
          <li key={index}>
          <img src="" alt=""/>
        </li>
        )) : ''}
      </StyledRating>
  </>);
};

export default DetailMovie;

const StyledBoxShadow = styled.div`
  padding: 1rem;
  box-shadow: 0 0 5px 1px rgba(0 ,0,0,0.25);
`

const Paragraph = styled.p`
  font-size: 0.875rem;
`

const StyledGenre = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;

  & > li {
    background-color: #a4c12d;
  color: #fff;
  border-radius: 8px;
  padding: 4px 12px;
  letter-spacing: 0.3px;
  font-size: 10px;
  margin: 5px;
  }
`;

const StyledRating = styled.ul`
  display: flex;
  flex-direction: row;
  & > li {
    flex: 1;
  }
`;