import React, { useState } from "react"
import { navigate } from "gatsby"
import logoPng from "../../../images/logo-white.png"
import { Background, Container, Form, InputSearch, InputButton } from "./styled"

export default function HomeLayout() {
  const [input, setInput] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    if (input) {
      navigate(`/search/${input}`)
    }
  }

  return (
    <Background>
      <Container>
        <img src={logoPng} alt="Logo" />
        <Form onSubmit={handleSubmit}>
          <InputSearch
            type="text"
            name="input"
            aria-label="Search Movie"
            aria-required="true"
            placeholder="Search Movie Title"
            value={input}
            onChange={event => setInput(() => event.target.value)}
          />
          <InputButton type="submit">SEARCH</InputButton>
        </Form>
      </Container>
    </Background>
  )
}
