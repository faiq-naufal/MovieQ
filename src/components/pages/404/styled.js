import styled from "@emotion/styled"
import device from "../../../utils/device"

export const WrapperAll = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 7rem;
    color: #ff4158;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2.5rem;
    color: #ff6d5a;
  }

  p {
    font-size: 1.375rem;
    margin-top: 1rem;
    font-weight: 400;
  }

  a {
    color: #ff4158;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Gradient = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -25%;
    z-index: -1;
    background: linear-gradient(to bottom, #ff6d5a, #ff4158);
    box-shadow: 0 2px 12px 0 #ff6d5a;
    width: 150%;
    min-height: 125px;
    border-radius: 50%;
  }
`

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
