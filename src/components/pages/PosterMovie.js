import React from "react";
import styled from "styled-components";
import logoWebp from "../../assets/img/logo-white.webp";
import logoPng from "../../assets/img/logo-white.png";
import { LazyLoadImage as LazyImg } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";

const PosterMovie = props => {
  return (
    <>
      {props.poster !== "N/A" ? (
        <Poster>
          <PosterImg effect="blur" src={props.poster} alt={props.title} />
        </Poster>
      ) : (
        <Poster noImage={true}>
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <Logo effect="blur" src={logoPng} alt="Logo" />
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

  .lazy-load-image-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`;

const PosterImg = styled(LazyImg)`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Logo = styled(LazyImg)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  height: 100%;
  object-fit: scale-down;
  object-position: center center;
  margin-left: auto;
  margin-right: auto;
`;
