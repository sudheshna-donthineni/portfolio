import React, { Component } from "react"
import styled from "styled-components"
import { srConfig } from "../config"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"

const ProjectsContainer = styled.div`
  margin-top: 50vh;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
`
const Title = styled.p`
  color: ${theme.colors.brown}
    font-size:4vw;
  display: inline-block;
  width:auto;
`

class Projects extends Component {
  componentDidMount() {
    ScrollReveal().reveal(this.skills, srConfig())
  }
  render() {
    return (
      <ProjectsContainer>
        <Title>things I've built</Title>
      </ProjectsContainer>
    )
  }
}

export default Projects
