import React, { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import styled from "styled-components"
import theme from "../styles/theme"
import Image from "../content/me.png"
import Lottie from "react-lottie"
import animationData from "../styles/avatar.json"
import Tooltip from "@mui/material/Tooltip"
import QuestionMarkIcon from "@mui/icons-material/QuestionMark"
import RehypeReact from "rehype-react"
import media from "../styles/media"
import useMediaQuery from "@mui/material/useMediaQuery"

const AboutContainer = styled.section`
  margin-top: 120vh;
  //border: 5px solid black;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${media.thone`
  flex-direction: column;
  #content {order:2}
  `};
`
const ContentContainer = styled.div`
  left: calc(14%);
  max-width: 45vw;
  font-family: ${theme.fonts.Serif};
  font-size: 1.5rem;
  text-align: left;
  position: relative;
  line-height: 1.5;
  ${media.ipad`font-size: 1.2rem;left: 12%;`};
  ${media.tablet`font-size: 1.4rem;`};
  ${media.thone`
  max-width: 85vw;
  left: 3vw;
  font-size: 1.1rem;
`};
`

const AvatarContainer = styled.div`
  position: relative;
  margin-left: 10vw;
  left:1vw;
  ${media.giant`
  margin-left: 1%;
`};
${media.ipad`
margin-left: -1%;
`};
  ${media.tablet`
left: -7%;
`};
`

const Avatar = styled.img`
position: absolute;
left: 8vw;
z-index:3
top:7vh;
width: 30vw;
${media.giant`
right: 10%;

top:7%;

width: 35vw;
`};
${media.ipad`
width: 33vw;
left: 20%;
right:0;
 `};
${media.tablet`
width: 60vw;
top:0
 `};


`
const style = {
  display: "inline-block",
  position: "relative",
  left: "10%",
  zIndex: "1",
  //border: "1px solid black"
}

const Name = styled(Tooltip)`
  &.MuiSvgIcon-root {
    position: absolute;
    left: 47%;
    top: -5%;
    color: ${theme.colors.pink} ${media.thone`left: 50%;
  top: -9%`};
  }
`

const List = styled.li`
  &::marker {
    color: ${theme.colors.pink};
  }
`

const Strike = styled.s`
  opacity: 0.2;
`
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    li: props => <List {...props} />,
    s: props => <Strike {...props} />,
  },
}).Compiler

const About = ({ ...props }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
  const about = useRef()
  useEffect(() => {
    ScrollReveal().reveal(about, srConfig())
  }, [])

  const { htmlAst } = props.data[0].node
  const breakpoints = {
    isSm: useMediaQuery("(max-width: 760px)"),
    isMd: useMediaQuery("(max-width: 1024px)"),
    isLg: useMediaQuery("(max-width: 1600px)"),
  }
  const imageWidth = breakpoints.isSm
    ? 450
    : breakpoints.isMd
      ? 500
      : breakpoints.isLg
        ? 700
        : 800

  return (
    <AboutContainer ref={about}>
      <FlexContainer>
        <ContentContainer id="content">
          <Name title="grandfather's name for me" placement="top">
            <QuestionMarkIcon />
          </Name>
          <div>{renderAst(htmlAst)}</div>
        </ContentContainer>
        <AvatarContainer id="avatar">
          <Lottie
            style={style}
            options={defaultOptions}
            height={imageWidth}
            width={imageWidth}
          />
          <Avatar src={Image} alt="Avatar" />
        </AvatarContainer>
      </FlexContainer>
    </AboutContainer>
  )
}

export default About
