import React, { useState } from "react";
import styled from "styled-components";

import PosterMovie from "./PosterMovie";
import device from "../../helpers/device";
import ContentLoader from "react-content-loader";

const MovieCard = ({ movie }) => {
  const [imgStatus, setImgStatus] = useState("loading");

  return (
    // <StyledMovieCard>
    //   <WrapperLink to={`/movie/${movie.imdbID}`}>
    //     <PosterMovie
    //       poster={movie.Poster}
    //       title={movie.Title}
    //       imgStatus={imgStatus}
    //       setImgStatus={setImgStatus}
    //     />
    //     {imgStatus === "loading" ? (
    //       <ContentLoader
    //         style={{ width: "100%", height: "100px" }}
    //         viewBox="0 0 100 100"
    //       >
    //         <rect x="0" y="15" rx="3" ry="3" width="100%" height="14px" />
    //         <rect x="0" y="40" rx="3" ry="3" width="35%" height="14px" />
    //       </ContentLoader>
    //     ) : (
    //       <div style={{ margin: "1rem 0 2rem 0", lineHeight: "18px" }}>
    //         {movie.Title}
    //       </div>
    //     )}
    //   </WrapperLink>
    // </StyledMovieCard>
    <div></div>
  );
};

export default MovieCard;
