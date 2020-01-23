import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled, { css } from "styled-components";
import device from "../../helpers/device";
import useToggle from "../hooks/useToggle";
import menuBarPng from "../../assets/img/menu-bar.png";
import searchWhitePng from "../../assets/img/search-white.png";
import searchGreyPng from "../../assets/img/search-grey.png";
import logoHeaderWebp from "../../assets/img/logo-header-white.webp";
import logoHeaderPng from "../../assets/img/logo-header-white.png";

const Header = ( { toggleSidebar } ) => {
  const [ query, setQuery ] = useState( "" );
  const [ isSearchOpen, toggleSearch ] = useToggle( false );

  const history = useHistory();

  const handleSearch = event => {
    event.preventDefault();
    if ( query ) {
      history.push( `/search/${ query }` );
    }
  };

  const handleChange = event => {
    setQuery( event.target.value );
  };

  return (
    <Container>
      <StyledHeader>
        <div>
          <Toggle
            type="button"
            style={ {
              display: isSearchOpen ? "none" : "inline-block",
              position: "relative",
              left: "10px"
            } }
            onClick={ toggleSidebar }
          >
            <picture>
              <img src={ menuBarPng } alt="Menu" />
            </picture>
          </Toggle>
        </div>
        <div>
          <Link to="/">
            <picture
              style={ { display: isSearchOpen ? "none" : "inline-block" } }
            >
              <source srcSet={ logoHeaderWebp } type="image/webp" />
              <img src={ logoHeaderPng } height="26" alt="Logo" />
            </picture>
          </Link>
        </div>
        <div>
          <SearchBox onSubmit={ handleSearch } toggle={ isSearchOpen }>
            <Input
              type="text"
              name="search"
              id="search"
              aria-label="Search Movie"
              aria-required="true"
              placeholder="Search movie …"
              onChange={ handleChange }
              autoFocus={ isSearchOpen }
              value={ query }
            />
            <Toggle
              type="button"
              onClick={ () => {
                toggleSearch();
                setQuery( "" );
              } }
            >
              <picture>
                <img
                  src={ isSearchOpen ? searchGreyPng : searchWhitePng }
                  alt="Search"
                />
              </picture>
            </Toggle>
          </SearchBox>
        </div>
      </StyledHeader>
    </Container>
  );
};

export default Header;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  color: rgba(102, 102, 102, 1);
  font-size: 12px;

  &::placeholder {
    font-style: italic;
    color: rgba(102, 102, 102, 0.58);
  }
`;

const SearchBox = styled.form`
  width: 20px;
  height: 40px;
  position: relative;
  transition: width 250ms linear, height 250ms linear;
  z-index: 10;
  ${props =>
    props.toggle &&
    css`
      position: absolute;
      top: 6px;
      right: 0;
      width: 100%;
      height: 40px;
      padding: 4px 30px 4px 20px;
      background: #fff;
      border-radius: 5px;
      box-shadow: 0 0 4px rgba(0, 0, 0, 0.29);

      button {
        top: 50%;
        transform: translateY(-50%);
      }
    `};

  ${Input } {
    display: ${props => ( props.toggle ? "block" : "none" ) };
  }

  button {
    position: absolute;
    right: 10px;
  }
`;

const Container = styled.div`
  margin-right: 3%;
  margin-left: 3%;

  @media ${device.laptop } {
    max-width: 992px;
    margin: auto;
  }

  @media ${device.laptopM } {
    max-width: 1140px;
    margin: auto;
  }
`;

const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  height: 61px;
  z-index: 1;
  padding: 6px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div:nth-child(1),
  > div:nth-child(3) {
    flex: 0 0 20px;
    height: 40px;
  }
  > div:nth-child(2) {
    flex: 1 0 0;
    height: 40px;
    text-align: center;
    padding-left: 10px;
    padding-right: 10px;

    a {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`;

const Toggle = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  height: 100%;

  img {
    width: 16px;
  }

  @media ${device.tablet } {
    img {
      width: 20px;
    }
  }
`;
