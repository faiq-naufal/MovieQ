import React from "react";
import styled, { css } from "styled-components";
import logoWebp from "../../assets/img/logo-white.webp";
import logoPng from "../../assets/img/logo-white.png";
import { LazyLoadImage as LazyImg } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const PosterMovie = ({ poster, title }) => {
  const imageExists = poster !== "N/A";
  return (
    <>
      <Poster>
        <PosterBody noImage={!imageExists}>
          <picture>
            {!imageExists ? (
              <source srcSet={logoWebp} type="image/webp" />
            ) : null}
            <PosterImg
              effect="blur"
              src={imageExists ? poster : logoPng}
              alt={imageExists ? title : "Logo"}
              imgexists={imageExists ? 1 : 0}
            />
          </picture>
        </PosterBody>
      </Poster>
    </>
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

  picture {
    display: inline-block;
    width: inherit;
    height: inherit;
    background: ${props =>
      props.noImage
        ? "linear-gradient(to bottom, #ff6d5a, #ff4158)"
        : "transparent"};
  }

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
  ${props =>
    props.imgexists === 1 &&
    css`
      max-width: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 50%;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    `}
  ${props =>
    props.imgexists === 0 &&
    css`
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
    `}
`;
