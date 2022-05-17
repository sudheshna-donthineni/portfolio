import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import theme from "../styles/theme"
import media from "../styles/media"
import mixins from "../styles/mixins"
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
  DockerIcon,
  KubernetesIcon,
  GCPIcon,
  PostgreSQLIcon,
  MySQLIcon,
  NativeIcon
} from "./skillicons"
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip"
import Legend from "./legend"

const MainContainer = styled.div`
  margin-top: 50vh;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  width: 80vw;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  //border: 5px solid black;
`

const Title = styled.p`
  ${mixins.title}
  margin: 0;
`

const SkillContainer = styled.div`
`

const Skill = styled.div`
  display: inline-block;
  width: auto;
  margin-right: 4%;
  margin-left: 4%;
  margin-bottom: 4%;
  ${media.tablet`
  margin-right: 12%;
  margin-left: 12%;
  margin-bottom: 6%;`}
  &:hover {
    transform: translateY(17px);
  }

`
const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: `${theme.colors.brown}`,
    color: `${theme.colors.grey}`,
    maxWidth: 220,
    fontSize: "15px",
    fontFamily: `${theme.fonts.SFMono}`,
    marginTop: "-15px",
   border: "1px solid #dadde9",
  },
}))

class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)

    this.revealRefs = []
    this.restRefs = []
  }

  componentDidMount() {
    ScrollReveal().reveal(this.skills, srConfig())
    this.revealRefs.forEach((ref, i) =>
      ScrollReveal().reveal(ref, srConfig(i * 50))
    )
  }

  render() {
    const { data } = this.props
    const frontmatter = data[0].node.frontmatter
    const { title, skills } = frontmatter

    return (
      <MainContainer id="skills" ref={el => (this.skills = el)}>
        <Title>{title}</Title>
        <Legend/>
        <SkillContainer>
          {skills.map((skill, i) => (
            <HtmlTooltip key={i} title={skill}>
              <Skill ref={el => (this.revealRefs[i] = el)} key={i}>
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
                ) : skill === "Vue" ? (
                  <VueIcon />
                ) : skill === "Git" ? (
                  <GitIcon />
                ) : skill === "Firebase" ? (
                  <FirebaseIcon />
                ) : skill === "AWS" ? (
                  <AWSIcon />
                ) : skill === "Docker" ? (
                  <DockerIcon />
                ) :skill === "Kubernetes" ? (
                  <KubernetesIcon />
                ) : skill === "GCP" ? (
                  <GCPIcon />
                ) :skill === "PostgreSQL" ? (
                  <PostgreSQLIcon />
                ) :skill === "MySQL" ? (
                  <MySQLIcon />
                ):skill === "React Native" ? (
                  <NativeIcon />
                ):
                (
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
