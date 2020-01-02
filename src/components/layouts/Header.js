import React, { useState } from "react";
import styled from "styled-components";
import menuBar from "../../assets/img/menu-bar.png";
import search from "../../assets/img/search.png";
import logoHeader from "../../assets/img/logo-header-white.png";

const Header = () => {
  const [query, setQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);

  const handleToggleSearch = event => {};

  return (
    <StyledHeader>
      <StyleToggle>
        <img src={menuBar} width="22" height="22" alt="Menu" />
      </StyleToggle>
      <div>
        <img src={logoHeader} height="32" alt="Logo" />
      </div>
      <StyleToggle onClick={event => setActiveSearch(true)}>
        <img src={search} width="22" height="22" alt="Search" />
      </StyleToggle>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background: linear-gradient(to bottom, #ff6d5a, #ff4158);
  height: 70px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  & > div:nth-child(1),
  & > div:nth-child(3) {
    flex: 0 0 20px;
  }
  & > div:nth-child(2) {
    flex: 1 0 0;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const StyleToggle = styled.div`
  cursor: pointer;
`;
