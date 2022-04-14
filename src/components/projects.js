import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { srConfig } from "../config"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"
import Paper from "@mui/material/Paper"
import Masonry from "@mui/lab/Masonry"
import { GithubIcon } from "./icons"
import mixins from "../styles/mixins"

const ProjectsContainer = styled.div`
  margin-top: 70vh;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  width: 90vw;
  margin-left: auto;
`
const Title = styled.p`
  ${mixins.title}
  font-family: Bradley Hand, cursive;
`
const Card = styled(Paper)`
  font-size: 1.4rem;
  text-align: left;
  border-radius: 10px;
  padding: 30px;
  overflow: hidden;
  border: 1px solid ${theme.colors.purple};
`
const Heading = styled.p`
  font-size: 1.8rem;
  text-align: center;
  font-weight: bold;
  margin-bottom: 0;
`

const Button = styled.button`
  background: transparent;
  border: none;
  height: 3.5vh;
  width: 3.5vw;
  transition-timing-function: ease-in-out;
  transition-delay: 150ms;
  margin-top: 2vh;
  margin-bottom: 2vh;
  &:hover {
    transform: scale(1.5);
  }
  cursor: pointer;
`

const Topbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 30px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  z-index: 1;
  border-radius: 7px;
  color: ${theme.colors.pink};
  transform: translateY(100%);
  transition: 0.2s ease-in-out;
  list-style: none;
  align-items: center;
  font-size: 1rem;
  font-family: ${theme.fonts.SFMono};
  justify-content: center;
`
class Projects extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)
    this.revealRefs = []
    this.restRefs = []
  }
  componentDidMount() {
    ScrollReveal().reveal(this.projects, srConfig())
    this.revealRefs.forEach((ref, i) =>
      ScrollReveal().reveal(ref, srConfig(i * 10))
    )
  }

  //heights = [500, 250, 250, 250]
  render() {
    const { data } = this.props

    return (
      <ProjectsContainer>
        <Title>some things I've built</Title>
        <Masonry columns={2} spacing={7}>
          {data.map((child, index) => (
            <Card
              ref={el => (this.revealRefs[index] = el)}
              key={index}

            >
              <Topbar>
                <Heading>{child.node.frontmatter.title}</Heading>
                <Button target="_blank" rel="nofollow noopener noreferrer">
                  <GithubIcon />
                </Button>
              </Topbar>
              <p dangerouslySetInnerHTML={{ __html: child.node.html }}></p>
              <Overlay>
                {child.node.frontmatter.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </Overlay>
            </Card>
          ))}
        </Masonry>
      </ProjectsContainer>
    )
  }
}

export default Projects
