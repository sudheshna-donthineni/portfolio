import React,  { useEffect, useRef   } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { srConfig } from "../config"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"
import Paper from "@mui/material/Paper"
import Masonry from "@mui/lab/Masonry"
import { GithubIcon } from "../components/icons"
import mixins from "../styles/mixins"
import { graphql } from "gatsby"
import media from "../styles/media"
import Img from "gatsby-image"
import useMediaQuery from "@mui/material/useMediaQuery"
const ProjectsContainer = styled.div`
  margin-top: 70vh;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
 // border: 5px solid black;
`

const Title = styled.p`
  ${mixins.title}
`

const Tiles = styled(Masonry)`
&.MuiMasonry-root{
  margin-left: auto;
  margin-right: auto;
}
`
const Card = styled(Paper)`
&.MuiPaper-root {
  font-size: 1.1rem;
  text-align: left;
  border-radius: 10px;
  letter-spacing: 1px;
  background: #f2edf9;
  border: 1px solid ${theme.colors.purple};
  ${media.tablet`
  font-size: 1rem;
  line-height: 30px;
 `};
}
`
const Topbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`

const Heading = styled.p`
  font-size: 1.7rem;
  text-align: center;
  margin-bottom: 0;
  text-shadow: -1px -1px 0 ${theme.colors.brown},
    1px -1px 0 ${theme.colors.brown}, -1px 1px 0 ${theme.colors.brown},
    1px 1px 0 ${theme.colors.brown};
  color: ${theme.colors.pink};

`

const Button = styled.button`
  background: transparent;
  border: none;
  height: 3.5vh;
  width: 3.5vw;
  transition-timing-function: ease-in-out;
  transition-delay: 150ms;
  margin-top:auto;
  margin-bottom:auto;
  &:hover {
    transform: scale(1.5);
  }
  cursor: pointer;
  ${media.tablet`
  display: none;
`};
`

const Text = styled.p`
margin-left: 7%;
margin-right: 10%;
${media.tablet`
margin-left: 2%;
margin-right: 2%;
`};
`

const Overlay = styled.div`

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10%;
  color: ${theme.colors.pink};
  list-style: none;
  font-size: 0.9rem;
  font-family: ${theme.fonts.SFMono};
  justify-content: center;
  row-gap:10px;
`


const Projects = ({...props}) => {


  const projects = useRef()
  useEffect(() => {
    ScrollReveal().reveal(projects, srConfig())
  }, [])


    const { data } = props
    const breakpoints = {
      isSm: useMediaQuery("(max-width: 760px)")
    }
    const columns = breakpoints.isSm
      ? 1
      : 2
    console.log(columns)
    return (
      <ProjectsContainer id="projects" ref={projects}>
        <Title>some things I've built</Title>
        <Tiles columns={columns} spacing={5}>
          {data.map((child, index) => (
            <Card
              key={index}
            >
              <Topbar>
                <Heading>{child.node.frontmatter.title}</Heading>
                <Button target="_blank" rel="nofollow noopener noreferrer">
                  <GithubIcon />
                </Button>
              </Topbar>

              {/* <Image src={child.node.frontmatter.image}/> */}
              <Text dangerouslySetInnerHTML={{ __html: child.node.html }}></Text>
              <Overlay>
                {child.node.frontmatter.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </Overlay>
            </Card>
          ))}
        </Tiles>
      </ProjectsContainer>
    )
  }


export default Projects

export const query = graphql`
  query PageQuery {
projects: allMarkdownRemark(
  filter: { fileAbsolutePath: { regex: "/projects/" } }
  sort: { fields: [frontmatter___id], order: ASC }
) {
  edges {
    node {
      frontmatter {
        title
        skills
        image
        github
      }
      html
    }
  }
}
}
`