import React, { Component } from "react"
import PropTypes from "prop-types"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import styled from "styled-components"
import theme from "../styles/theme"
import animationData from "../styles/avatar.json"
import media from "../styles/media"

const StoryContainer = styled.section`
margin-top: 20vh;
`

const ContentContainer = styled.div`
  margin-left: 13vw
 width: 80vw;
  font-family: ${theme.fonts.Serif};
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.5;
  ${media.tablet`font-size: 1.4rem;`};
  ${media.thone`

  font-size: 1.3rem;
`};
`



class Story extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  componentDidMount() {
    ScrollReveal().reveal(this.story, srConfig())
  }

  render() {
    const { data } = this.props
    const { html } = data[0].node

    return (
      <StoryContainer id="about" ref={el => (this.story = el)}>
         <ContentContainer><div dangerouslySetInnerHTML={{ __html: html }} /></ContentContainer>
      </StoryContainer>
    )
  }
}

export default Story
