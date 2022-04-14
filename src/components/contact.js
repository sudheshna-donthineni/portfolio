import React, { Component } from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"
import { srConfig, email } from "../config"
import Lottie from "react-lottie"
import animationData from "../styles/contact.json"
import media from "../styles/media"
import { ContactIcon } from "./icons"

const ContactWrapper = styled.div`
  display: inline-block;
  width: auto;
  margin-top: 50vh;
  margin-bottom: 10vh;
  //height: 80vh;
  text-align: center;
  font-family: ${theme.fonts.Serif};
  display: flex;
  flex-direction: row;
  //border: 5px solid black;
`

const ContactContainer = styled.div`
  flex: 1;
  margin-left: 20vh;
  ${media.thone`margin-left:10vh`};

`

const Title = styled.p`
  color: ${theme.colors.brown}
  font-size: 5rem;
  font-family: Bradley Hand, cursive;
  ${media.thone`font-size: 3rem`}
  display: inline-block;
  width:auto;
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
`

const FlexChild = styled.div`
  width: 28vw;
  height: 28vw;
  margin-right: 10vh;
  ${media.thone`display: none;`};
  margin-top:auto;
  margin-bottom: auto;
`

const Text = styled.p`
  color: ${theme.colors.brown};
  font-size: 2.5rem;
  ${media.thone`font-size: 2rem`}
  margin-top: -10%;
  margin-bottom: -2%;
`

const EmailLink = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`
class Contact extends Component {
  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  componentDidMount() {
    ScrollReveal().reveal(this.contact, srConfig())
  }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title } = frontmatter

    return (
      <ContactWrapper id="contact" ref={el => (this.contact = el)}>
        <ContactContainer>
          <Title>{title}</Title>
          <Text dangerouslySetInnerHTML={{ __html: html }} />

          <EmailLink
            href={`mailto:${email}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <ContactIcon />
          </EmailLink>
        </ContactContainer>
        <FlexChild>
          <Lottie options={this.defaultOptions} />
        </FlexChild>
      </ContactWrapper>
    )
  }
}

export default Contact
