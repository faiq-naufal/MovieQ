import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Sidebar from "../layouts/Sidebar";
import device from "../../helpers/device";

const PageNotFound = () => {
  const [isSidebarOpen, toggleSidebar] = useToggle(false);
  const seo = {
    title: "404 Page Not Found | MovieQ"
  };
  return (
    <WrapperAll>
      <Helmet>
        <title>{seo.title}</title>
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />
      </Helmet>
      <Gradient>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </Gradient>
      <Container>
        <NotFound>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Uh, oh... I think you are getting lost!
            <br />
            <br />
            You might want to return to homepage, <Link to="/">click here</Link>
          </p>
        </NotFound>
      </Container>
      <Footer />
    </WrapperAll>
  );
};

export default PageNotFound;

const WrapperAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

const NotFound = styled.div`
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
`;

const Gradient = styled.div`
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
`;

const Container = styled.div`
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
`;
