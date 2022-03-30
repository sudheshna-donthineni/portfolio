import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import theme from "../styles/theme"
import {
  HTMLIcon,
  PythonIcon,
  CSSIcon,
  JSIcon,
  ReactIcon,
  VueIcon,
  GitIcon,
  FirebaseIcon,
  AWSIcon,
} from "./skillicons"
const MainContainer = styled.div`
  margin-top: 100vh;
  align-items: center;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  width: 80vw;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: row;
`

const Title = styled.p`
  color: ${theme.colors.brown}
    font-size:4vw;
  display: inline-block;
  width:auto;
`

const SkillContainer = styled.div`
  flex: 1;
`

const Skill = styled.div`
  display: inline-block;
  width: auto;
  margin-right: 4%;
  margin-left: 4%;
  margin-bottom: 4%;
  &:hover {
    background: ${theme.colors.brown};
  }
  border-radius: 20%;
`

class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    ScrollReveal().reveal(this.skills, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title, skills } = frontmatter

    return (
      <MainContainer id="skills" ref={el => (this.skills = el)}>
        <SkillContainer>
          {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, i) => (
            <Skill key={i}>
              {skill === "Python" ? (
                <PythonIcon />
              ) : skill === "HTML5" ? (
                <HTMLIcon />
              ) : skill === "CSS" ? (
                <CSSIcon />
              ) : skill === "Javascript" ? (
                <JSIcon />
              ) : skill === "React" ? (
                <ReactIcon />
              ) : (
                <PythonIcon />
              )}
            </Skill>
          ))}
        </SkillContainer>

        <Title>{title}</Title>

        <SkillContainer>
          {skills.slice(-Math.ceil(skills.length / 2) + 1).map((skill, i) => (
            <Skill key={i}>
              {skill === "Vue" ? (
                <VueIcon />
              ) : skill === "Git" ? (
                <GitIcon />
              ) : skill === "Firebase" ? (
                <FirebaseIcon />
              ) : skill === "AWS" ? (
                <AWSIcon />
              ) : (
                <PythonIcon />
              )}
            </Skill>
          ))}
        </SkillContainer>
      </MainContainer>
    )
  }
}

export default Skills
