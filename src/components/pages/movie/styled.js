import styled from "@emotion/styled"
import { withStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import device from "../../../utils/device"
import elStarPng from "../../../images/el-star.png"

export const InfoList = styled.div`
  min-width: 60px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  height: 24px;
  margin-right: 4.5%;
  margin-top: 6px;
  > picture {
    margin-right: 5px;
    display: flex;
    align-items: center;
  }
  @media ${device.tablet} {
    font-size: 1rem;
  }
`

export const GenreList = styled.div`
  background: #a9ca23;
  color: #fff;
  border-radius: 20px;
  padding: 4px 12px;
  letter-spacing: 0.36px;
  line-height: normal;
  font-size: 11px;
  margin-right: 5px;
  margin-bottom: 10px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 12px;
  }
`

export const Title = styled.h1`
  color: #fff;
  font-size: 5vw;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin: 0;
  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  &::before {
    content: " ";
    display: block;
    height: 10px;
  }
`

export const LeftPoster = styled.div`
  width: 44%;
  max-width: 240px;
  > div {
    width: 100%;
    float: left;
    margin-bottom: 2rem;
    margin-right: 3vw;
  }
`

export const RightPoster = styled.div`
  width: auto;
`

export const BoxShadow = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 0.625rem 1rem;

  color: #666;
  font-size: 0.75rem;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

  @media ${device.mobileL} {
    padding: 1rem;
    font-size: 0.813rem;
  }
  @media ${device.tablet} {
    font-size: 0.875rem;
  }
`

export const Actors = styled(BoxShadow)`
  background-image: url(${elStarPng});
  background-repeat: no-repeat;
  background-size: 38px;
  background-position: top left;
  font-weight: 700;
  color: #a78a4e;
  text-align: center;
  letter-spacing: 0.3px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
`

export const Name = styled.div`
  font-weight: 500;
  flex: 1;
`

export const Creators = styled(BoxShadow)`
  color: #666;
  letter-spacing: 0.3px;
  line-height: 20px;

  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
  span {
    flex: 0 0 80px;
    font-weight: 400;
    margin-right: 0.5rem;
  }

  > div:not(:first-of-type) {
    margin-top: 0.875rem;
  }
`

export const Plot = styled(BoxShadow)`
  color: #666;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.4px;
  @media ${device.tablet} {
    padding: 1.5rem 1rem;
  }
`

export const ButtonBox = withStyles(theme => ({
  root: {
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "0.5rem",
    color: "#666",
    fontFamily: "Ubuntu, sans-serif",
    fontSize: "0.75rem",
    [theme.breakpoints.up("768")]: {
      fontSize: "0.875rem",
    },
    textTransform: "initial",
    letterSpacing: "0.3px",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
    flex: " 0 0 40%",
    maxWidth: "250px",
    textAlign: "center",
    fontWeight: 400,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& picture": {
      display: "flex",
      alignItems: "center",
    },
    "& img": {
      marginRight: "0.5rem",
    },
  },
}))(Button)

export const MetaCritic = styled.picture`
  img {
    width: 24px;
  }
  @media ${device.tablet} {
    > img {
      width: 30px;
    }
  }
`

export const RottenTomatoes = styled.picture`
  img {
    width: 24px;
  }
  @media ${device.tablet} {
    > img {
      width: 30px;
    }
  }
`

export const Imdb = styled.picture`
  > img {
    width: 30px;
  }
  @media ${device.tablet} {
    > img {
      width: 40px;
    }
  }
`

export const RatingList = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  > picture {
    display: flex;
    align-items: center;
  }

  > strong {
    margin-left: 0.5rem;
    font-size: 0.75rem;
    color: #666;
    letter-spacing: 0.3px;

    @media ${device.tablet} {
      font-size: 0.8125rem;
    }
  }
`

export const FlexList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
`

export const TopPage = styled.div`
  margin-top: -125px;
  margin-left: -50%;
  padding-top: 125px;
  padding-left: 50%;
  padding-right: 50%;
  padding-bottom: 20px;
  z-index: -1;
  background: linear-gradient(to bottom, #ff6d5a, #ff4158);
  box-shadow: 0 2px 12px 0 #ff6d5a;
  width: 200%;
  border-radius: 50%;
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

export const Main = styled.main`
  section {
    padding: 1rem 0;
  }
`

export const Background = styled.div`
  background-color: #f8f8f8;
  min-height: 100%;
  opacity: 0.99;
`

export const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`
