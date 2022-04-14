import styled from "styled-components"
import theme from "../styles/theme"
import Fab from "@mui/material/Fab"
import React, { Component } from "react"

const Container = styled.div`
  position: fixed;
  margin-bottom: 10vh;
  top: 0;
  right: 0;
  margin-right: 3vw;
  margin-top: 5vh;
`

const style = {
  background: `${theme.colors.pink}`,

  height: "7vh",
  border: "1px solid black",
  color: `${theme.colors.brown}`,
  fontFamily: `${theme.fonts.SFMono}`,
}

class Resume extends Component {
  render() {
    return (
      <Container>
        <Fab variant="extended" style={style}>
          Resume
        </Fab>
      </Container>
    )
  }
}
export default Resume
