import { Link } from "gatsby"
import styled from "@emotion/styled"
import device from "../../../utils/device"

export const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`

export const Gradient = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -37.5%;
    z-index: -1;
    background: linear-gradient(to bottom, #ff6d5a, #ff4158);
    box-shadow: 0 2px 12px 0 #ff6d5a;
    width: 175%;
    min-height: 110px;
    border-radius: 50%;
  }
  ${device.mobileL} {
    &::before {
      min-height: 125px;
    }
  }
`

export const Container = styled.div`
  margin-right: 5.5%;
  margin-left: 5.5%;

  @media ${device.laptop} {
    max-width: 992px;
    margin: auto;
  }

  @media ${device.laptopM} {
    max-width: 1140px;
    margin: auto;
  }
`

export const SearchResult = styled.div`
  text-align: center;

  h1 {
    color: #666;
    font-weight: 400;
    font-size: 0.875rem;
    margin: 1.75rem 0 1.625rem 0;

    @media ${device.tablet} {
      font-size: 1.25rem;
    }
  }
`

export const ListMovie = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
`

export const MovieCard = styled.li`
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
`

export const MovieLabel = styled.div`
  margin: 0.688rem 0 1.5rem 0;
  line-height: 18px;
  letter-spacing: 0.39px;
`

export const WrapperLink = styled(Link)`
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
`
