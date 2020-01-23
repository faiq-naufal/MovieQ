import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import logoPng from "../../assets/img/logo-white.png";
import logoWebp from "../../assets/img/logo-white.webp";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [title, setTitle] = useState("");

  let history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    if (title) {
      history.push(`/search/${title}`);
    }
  };

  const seo = {
    title: "Home - Search Your Movies Here | MovieQ"
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      <Background>
        <Container>
          <picture>
            <source srcSet={logoWebp} type="image/webp" />
            <img src={logoPng} alt="Logo" />
          </picture>
          <Form onSubmit={handleSubmit}>
            <InputSearch
              type="text"
              name="title"
              id="title"
              aria-label="Search Movie"
              aria-required="true"
              placeholder="Search Movie Title"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <InputButton type="submit">SEARCH</InputButton>
          </Form>
        </Container>
      </Background>
    </>
  );
};

export default Home;

const Background = styled.div`
  background: linear-gradient(to bottom, #ff6d5a, #ff4158);
  min-height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  min-height: -webkit-fill-available;
  min-height: -moz-available;
  min-height: stretch;
  align-items: center;
  justify-content: space-around;
  padding-top: 20vh;
  padding-bottom: 10vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputSearch = styled.input`
  min-width: 260px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.41);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.43px;
  border-radius: 20px;
  padding: 13.5px 15px;
  transition: 150ms ease-in;
  border: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.62);
    font-size: 0.75rem;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.85);
  }
`;

const InputButton = styled.button`
  margin-top: 1.5rem;
  min-width: 250px;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);
  color: #656565;
  text-align: center;
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 20px;
  padding: 14px 15px;
  transition: 150ms ease-in;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 18px 0 rgba(255, 255, 255, 0.5);
  }
`;
