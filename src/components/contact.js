import React, { Component } from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"
import { srConfig, email } from "../config"
import media from "../styles/media"
import mixins from "../styles/mixins"

const ContactWrapper = styled.div`
  display: inline-block;
  width: auto;
  margin-top: 50vh;
  margin-bottom: 10vh;
  text-align: center;
  //border: 5px solid black;
`

const Title = styled.p`
  ${mixins.title};
  margin: 0;
`

const Text = styled.p`
  color: ${theme.colors.brown};
  font-size: 2rem;
  margin-left: auto;
  margin-right: auto;
  ${media.tablet`font-size: 1.5rem`}
`

const EmailLink = styled.a`
  background: #bfa5e2;
  padding: 20px;

  text-decoration: none;
  color: ${theme.colors.brown};
  text-align: center;
  width: auto;
  cursor: pointer;
  border: none;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  font-family: ${theme.fonts.SFMono};
  font-size: 1rem;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: ${theme.colors.pink};
    box-shadow: 0px 7px 9px ${theme.colors.brown};
    color: ${theme.colors.grey};
    transform: translateY(-10px);
  }
`
class Contact extends Component {
  constructor(props) {
    super(props)
    this.revealRefs = []
    this.restRefs = []
  }

  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig())
    this.revealRefs.forEach((ref, i) =>
      ScrollReveal().reveal(ref, srConfig(i * 15))
    )
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <ContactWrapper id="contact" ref={el => (this.contact = el)}>
        <Title>{title}</Title>
        <Text
          ref={el => (this.revealRefs[0] = el)}
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <EmailLink
          href={`mailto:${email}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          hit me up!
        </EmailLink>
      </ContactWrapper>
    )
  }
}

export default Contact
