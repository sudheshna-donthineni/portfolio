import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Hero from "../components/hero"
import About from "../components/about"

const IndexPage = ({ data }) => (
  <Layout>
    <Hero />
    {/* <About  data={data.about.edges}/> */}
  </Layout>
)

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object,
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/" } }) {
      edges {
        node {
          frontmatter {
            title
            avatar {
              childImageSharp {
                fluid(
                  maxWidth: 700
                  quality: 90
                  traceSVG: { color: "#64ffda" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            skills
          }
          html
        }
      }
    }
  }
`
