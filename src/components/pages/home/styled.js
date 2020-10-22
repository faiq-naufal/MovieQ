import styled from "@emotion/styled"

export const Background = styled.div`
  background: linear-gradient(to bottom, #ff6d5a, #ff4158);
  flex: 1;
  display: flex;
  flex-direction: column;
  height: auto;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 20vh;
  padding-bottom: 10vh;
  flex: 1;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const InputSearch = styled.input`
  min-width: 260px;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.41);
  color: #fff;
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  font-size: 0.813rem;
  letter-spacing: 0.43px;
  border-radius: 20px;
  padding: 10.5px 15px;
  transition: 150ms ease-in;
  border: none;

  ::placeholder {
    color: rgba(255, 255, 255, 0.62);
    opacity: 1;
    font-size: 0.8rem;
    font-family: "Noto Sans", sans-serif;
  }
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.85);
  }
`

export const InputButton = styled.button`
  margin-top: 1.5rem;
  min-width: 250px;
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(255, 255, 255, 0.5);
  color: #656565;
  text-align: center;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  border-radius: 20px;
  padding: 11px 15px;
  transition: 150ms ease-in;
  border: none;
  cursor: pointer;
  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 18px 0 rgba(255, 255, 255, 0.5);
  }
`
