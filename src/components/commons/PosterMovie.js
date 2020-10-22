import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import logoPng from "../../images/logo-white.png"
import { LazyLoadImage as LazyImg } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const PosterMovie = ({ poster, title }) => {
  const imageExists = poster !== "N/A"
  return (
    <>
      <Poster>
        <PosterBody noImage={!imageExists}>
          <div className="wrapper">
            <PosterImg
              effect="blur"
              src={imageExists ? poster : logoPng}
              alt={imageExists ? title : "Logo"}
              imgexists={imageExists}
            />
          </div>
        </PosterBody>
      </Poster>
    </>
  )
}

export default PosterMovie

const Poster = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  padding-bottom: 145%;
`

const PosterBody = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  .wrapper {
    display: inline-block;
    width: inherit;
    height: inherit;
    background: linear-gradient(to bottom, #ff6d5a, #ff4158);
  }

  .lazy-load-image-background {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
`

const PosterImg = styled(LazyImg)`
  ${props =>
    props.imgexists
      ? css`
          max-width: 100%;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        `
      : css`
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
`
