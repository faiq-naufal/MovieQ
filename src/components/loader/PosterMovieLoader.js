import React from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

const PosterMovie = () => {
  return (
    <Poster>
      <PosterBody>
        <ContentLoader style={{ width: "100%", height: "100%" }}>
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="100%" />
        </ContentLoader>
      </PosterBody>
    </Poster>
  );
};

export default PosterMovie;

const Poster = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding-bottom: 145%;
`;

const PosterBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;
