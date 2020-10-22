import React from "react"
import { Link } from "gatsby"
import useToggle from "../../hooks/useToggle"
import Header from "../../commons/Header"
import Footer from "../../commons/Footer"
import Sidebar from "../../commons/Sidebar"
import { WrapperAll, NotFoundWrapper, Gradient, Container } from "./styled"
export default function NotFoundLayout() {
  const [isSidebarOpen, toggleSidebar] = useToggle(false)
  return (
    <WrapperAll>
      <Gradient>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </Gradient>
      <Container>
        <NotFoundWrapper>
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>
            Uh, oh... I think you are getting lost! <br />
            <br />
            You might want to return to homepage, <Link to="/">click here</Link>
          </p>
        </NotFoundWrapper>
      </Container>
      <Footer />
    </WrapperAll>
  )
}
