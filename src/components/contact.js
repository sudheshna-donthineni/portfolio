import React, { Component } from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"
import { srConfig, email } from "../config"

const ContactContainer = styled.div`
  margin-top: 50vh;
  height: 100vh;
  text-align: center;
  font-family: ${theme.fonts.Serif};
`

const Title = styled.p`
  color: ${theme.colors.brown}
    font-size:4vw;
  display: inline-block;
  width:auto;
`

const Text = styled.p`
  color: ${theme.colors.brown};
  font-size: 2vw;
  margin-top: -5%;
  margin-bottom: 3%;
`

const EmailLink = styled.a`
  background-color: ${theme.colors.purple};
  border-radius: ${theme.borderRadius};
  padding: 18px 23px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.brown};
  font-family: ${theme.fonts.Serif};
  font-size: 23px;
  transition: ${theme.transition};
  &:hover,
  &:focus,
  &:active {
    background-color: ${theme.colors.grey};
  }
`

class Contact extends Component {
  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig())
  }
  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <ContactContainer id="contact" ref={el => (this.contact = el)}>
        <Title>{title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: html }} />

        <EmailLink
          href={`mailto:${email}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Say Hello!
        </EmailLink>
      </ContactContainer>
    )
  }
}

export default Contact
