import React from "react";
import styled from "styled-components";
import menuBarPng from "../../assets/img/menu-bar.png";
import searchPng from "../../assets/img/search.png";
import logoHeaderWebp from "../../assets/img/logo-header-white.webp";
import logoHeaderPng from "../../assets/img/logo-header-white.png";

const Header = props => {
  // const [query, setQuery] = useState("");
  // const [activeSearch, setActiveSearch] = useState(false);

  // const handleToggleSearch = event => {

  // };

  return (
    <StyledHeader>
      <Toggle>
        <picture>
          <img src={menuBarPng} width="20" alt="Menu" />
        </picture>
      </Toggle>
      <div>
        <picture>
          <source srcSet={logoHeaderWebp} type="image/webp" />
          <img src={logoHeaderPng} height="30" alt="Logo" />
        </picture>
      </div>
      <Toggle>
        <picture>
          <img src={searchPng} width="20" alt="Search" />
        </picture>
      </Toggle>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  width: 100%;
  height: 70px;
  z-index: 1;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > div:nth-child(1),
  > div:nth-child(3) {
    flex: 0 0 20px;
  }
  > div:nth-child(2) {
    flex: 1 0 0;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Toggle = styled.div`
  cursor: pointer;
`;
