import React from "react"
import { MdCode } from "react-icons/md"
import styled from "@emotion/styled"
import device from "../../utils/device"

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Code&nbsp;
        <MdCode size={20} />
        &nbsp;by&nbsp;
        <a
          href="https://faiqnaufal.com"
          target="_blank"
          rel="noopener  noreferrer"
        >
          Faiq Naufal
        </a>
      </p>
    </StyledFooter>
  )
}

export default Footer

const StyledFooter = styled.footer`
  padding: 1rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.5px;
    line-height: 24px;
    font-weight: 400px;
    color: #ff6d5a;
    font-size: 0.75rem;

    @media ${device.tablet} {
      font-size: 0.8125rem;
    }
  }

  a {
    color: #ff6d5a;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`
