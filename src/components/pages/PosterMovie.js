import React from "react";
import styled from "styled-components";
import logoWebp from "../../assets/img/logo-white.webp";
import logoPng from "../../assets/img/logo-white.png";

const PosterMovie = props => {
  return (
    <>
      {props.poster !== "N/A" ? (
        <Poster>
          <PosterImage src={props.poster} alt={props.title} />
        </Poster>
      ) : (
        <Poster noImage={true}>
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <Logo src={logoPng} alt="Logo" />
          </picture>
        </Poster>
      )}
    </>
  );
};

export default PosterMovie;

const Poster = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding-bottom: 145%;
  background: ${props =>
    props.noImage
      ? "linear-gradient(to bottom, #ff6d5a, #ff4158)"
      : "transparent"};
`;

const PosterImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
