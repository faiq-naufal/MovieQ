import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../assets/img/logo-white.png";
import styled from "styled-components";

const Home = props => {
  const [title, setTitle] = useState("");

  let history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    if (title) {
      history.push(`/search/${title}`);
    }
  };

  return (
    <StyledBackground>
      <StyledContainer>
        <StyledLogo src={logo} alt="Logo" />
        <StyledForm onSubmit={handleSubmit}>
          <StyledInputSearch
            type="text"
            name="title"
            id="title"
            placeholder="Search Movie Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
          <StyledInputButton type="submit">SEARCH</StyledInputButton>
        </StyledForm>
      </StyledContainer>
    </StyledBackground>
  );
};

export default Home;

const StyledBackground = styled.div`
  background: linear-gradient(to bottom, #ff6d5a, #ff4158);
`;

const StyledContainer = styled.div`
  min-width: 100vw;
  /* 100% height */
  min-height: 100vh;
  min-height: -webkit-fill-available;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  padding-top: 20vh;
  padding-bottom: 10vh;
`;

const StyledLogo = styled.img`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInputSearch = styled.input`
  min-width: 250px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 1px 0.5px #fff;
  color: #fff;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  border-radius: 20px;
  padding: 10px 15px;
  transition: 150ms ease-in;
  border: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.85rem;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 1px 1px #fff;
  }
`;

const StyledInputButton = styled.button`
  margin-top: 1.5rem;
  min-width: 250px;
  background-color: #fff;
  box-shadow: 0 0 2px 2px rgba(255, 255, 255, 0.5);
  color: #656565;
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 20px;
  padding: 10px 15px;
  transition: 150ms ease-in;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 4px 4px rgba(255, 255, 255, 0.5);
  }
`;
