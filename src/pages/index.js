import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"
import Contact from "../components/contact"
import Skills from "../components/skills"
import Work from "../components/work"
import Projects from "../components/projects"
const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    <About data={data.about.edges} />
    <Work />
    <Skills data={data.skills.edges} />
    <Projects />
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
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
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
