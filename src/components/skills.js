import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import theme from "../styles/theme"
import media from "../styles/media"
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
import Tooltip, {  tooltipClasses }  from '@mui/material/Tooltip';

const MainContainer = styled.div`
  margin-top: 50vh;
  align-items: center;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  width: 80vw;
  text-align: center;
  margin-left: auto;
  margin-right: 5vw;
  display: flex;
  flex-direction: row;
  //border: 5px solid black;

  ${media.thone`display: block`};
`

const Title = styled.p`
  color: ${theme.colors.brown}
    font-size:5rem;
  display: inline-block;
  font-family: Bradley Hand, cursive;
  width:auto;
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
  ${media.thone`display: none`}
`
const SmallTitle = styled.p`
  color: ${theme.colors.brown}
    font-size:5rem;
  display: inline-block;
  font-family: Bradley Hand, cursive;
  width:auto;
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
  display: none
  ${media.thone`display: block`}
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
    transform: scale(1.2);
  }
  border-radius: 20%;
`
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '${theme.colors.brown}',
    color: '${theme.colors.pink}',
    maxWidth: 220,
    fontSize: '20px',
    border: '1px solid #dadde9',
  },
}));

class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  componentDidMount() {
    ScrollReveal().reveal(this.skills, srConfig())
  }

  render() {
    const { data } = this.props
    const frontmatter = data[0].node.frontmatter
    const { title, skills } = frontmatter

    return (
      <MainContainer id="skills" ref={el => (this.skills = el)}>
        <SmallTitle>{title}</SmallTitle>
        <SkillContainer>
          {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, i) => (
            <HtmlTooltip key={i} title={skill}>
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
            </HtmlTooltip>
          ))}
        </SkillContainer>

        <Title>{title}</Title>

        <SkillContainer>
          {skills.slice(-Math.ceil(skills.length / 2) + 1).map((skill, i) => (
            <HtmlTooltip key={i} title={skill}>
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
            </HtmlTooltip>
          ))}
        </SkillContainer>
      </MainContainer>
    )
  }
}

export default Skills
