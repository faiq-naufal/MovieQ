import React from "react";
import CodeIcon from "@material-ui/icons/Code";
import FavoriteIcon from "@material-ui/icons/Favorite";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <CodeIcon fontSize="small" />
        &nbsp;with&nbsp;
        <FavoriteIcon fontSize="small" />
        &nbsp;by&nbsp;
        <a
          href="https://www.faiqnaufal.com"
          target="_blank"
          rel="noopener  noreferrer"
        >
          Faiq Naufal
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;

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
    font-size: 0.8125rem;
  }

  a {
    color: #ff6d5a;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
