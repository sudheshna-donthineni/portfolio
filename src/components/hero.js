import React, { Component } from "react"
// import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components"
import theme from "../styles/theme"
import media from "../styles/media"

const MainAnimation = keyframes`
  0% { opacity: 0;  }
  25% { opacity: 1;  }
  75% { opacity: 1;  }
  100% { opacity: 1;  }
`

const MainContainer = styled.div`
  font-family: ${theme.fonts.Serif};
  font-size: 8vw;
  letter-spacing: 2px;
  width: 80%;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`font-size: 60px;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`text-align: right;`};
  ${media.tiny`
    text-align: right;`};
  animation-name: ${MainAnimation};
  animation-duration: 10s;
  border: 5px solid black;
  padding: 10px;
`

const FirstText = styled.div`
  width: auto;
  display: inline-block;
`

const NameText = styled.div`
  color: ${theme.colors.purple};
  width: auto;
  display: inline-block;
  text-shadow: -2px -2px 0 ${theme.colors.brown},
    2px -2px 0 ${theme.colors.brown}, -2px 2px 0 ${theme.colors.brown},
    2px 2px 0 ${theme.colors.brown};
`

const SecondText = styled.div`
  width: auto;
  display: inline-block;
`

const DescriptiveAnimation = keyframes`
0%,
12.66%,
100% {
  transform: translate3d(0, 0, 0);
}
16.66%,
29.32% {
  transform: translate3d(0, -25%, 0);
}
33.32%,
45.98% {
  transform: translate3d(0, -50%, 0);
}
49.98%,
62.64% {
  transform: translate3d(0, -75%, 0);
}
66.64%,
79.3% {
  transform: translate3d(0, -50%, 0);
}
83.3%,
95.96% {
  transform: translate3d(0, -25%, 0);
}`

const DescriptiveText = styled.div`
  overflow: hidden;
  width: 87vw;
  height: 16vh;
  font-size: 8vw;
  position: relative;
  left: -4%;
  ${media.desktop`font-size: 70px;`};
  ${media.tablet`height: 10vh;
    font-size: 8vw;`};
  ${media.phablet`font-size: 50px;`};
  ${media.phone`
        height: 10vh;
        font-size: 8vw;`};
  ${media.tiny`height: 10vh;
    font-size: 8vw;`};
`
const DescriptiveList = styled.ul`
  animation-name: ${DescriptiveAnimation};
  animation-duration: 10s;
  animation-iteration-count: infinite;
  margin-top: 0;
  list-style: none;
  padding: 0;
`

const Mark = styled.mark`
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
`

class Hero extends Component {
  render() {
    return (
      <div>
        <MainContainer>
          <FirstText>I'm</FirstText>
          <br />

          <NameText>Krrupa</NameText>

          <br />
          <SecondText>and I am a</SecondText>
          <br />
          <DescriptiveText>
            <DescriptiveList style={{ transitionDelay: "300ms" }}>
              <li key={"1"}>
                <Mark>builder</Mark>
              </li>
              <li key={"2"}>
                <Mark>food critic</Mark>
              </li>
              <li key={"3"}>
                <Mark>dog worshipper</Mark>
              </li>
              <li key={"4"}>
                <Mark>dancer</Mark>
              </li>
            </DescriptiveList>
          </DescriptiveText>
        </MainContainer>
      </div>
    )
  }
}

export default Hero
