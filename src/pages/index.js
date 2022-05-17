import * as React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
import Work from "../components/work"
import Projects from "../components/projects"
import Story from "../components/story"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <About data={data.about.edges} />
    <Story data={data.story.edges} />
    <Work data={data.work.edges} />
    <Projects data={data.projects.edges} />
    <Skills data={data.skills.edges} />
    <Contact data={data.contact.edges} />
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    about: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          htmlAst
        }
      }
    }
    story: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/story/" } }
    ) {
      edges {
        node {
          html
        }
      }
    }
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
    work: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/work/" } }
      sort: { fields: [frontmatter___id], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            company
            job
            url
            date
            skills
          }
          html
        }
      }
    }
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
    skills: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/skills/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
            skills
          }
          html
        }
      }
    }
  }
`
