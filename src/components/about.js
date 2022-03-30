import React, { Component } from "react"
import PropTypes from "prop-types"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import styled from "styled-components"
import theme from "../styles/theme"
import Image from "../content/me.png"
import Lottie from "react-lottie"
import animationData from "../styles/avatar.json"

const AboutContainer = styled.section`
  margin-top: 120vh;
  height: 100vh;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ContentContainer = styled.div`
  margin-top: 10%;
  left: 15%;
  max-width: 40vw;
  font-family: ${theme.fonts.Serif};
  font-size: 2vw;
  text-align: center;
  position: relative;
  z-index: 3;
`

const AvatarContainer = styled.div``
const Avatar = styled.img`
position:relative
z-index:3
left:30%;

`

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  componentDidMount() {
    ScrollReveal().reveal(this.about, srConfig())
  }

  render() {
    const { data } = this.props
    const { html } = data[0].node

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        <FlexContainer>
          <AvatarContainer>
            <Lottie
              style={{ position: "absolute", zIndex: "1", left: "3%" }}
              options={this.defaultOptions}
              height={800}
              width={800}
            />
            <Avatar src={Image} alt="Avatar" height={500} width={500} />
          </AvatarContainer>
          <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </ContentContainer>
        </FlexContainer>
      </AboutContainer>
    )
  }
}

export default About
