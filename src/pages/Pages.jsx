import Home from "./Home"
import Category from "../components/Category"
import styled from "styled-components"


function Pages() {
  return (
    <>
      <Category/>
      <Contain>
        <Home/>
      </Contain>
    </>


  )
}

const Contain = styled.div`
    padding: 10px 3rem;
`
const Border = styled.div`
    *{
      border:1px solid red;
    }
`

export default Pages