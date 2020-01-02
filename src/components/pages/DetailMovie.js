import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailMovie = () => {
  const [movie, setMovie] = useState({});
  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
  let { id } = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`
      );

      setMovie(response.data);
    };

    getMovie();
  }, [id]);

  return <div>{movie.Title}</div>;
};

export default DetailMovie;
