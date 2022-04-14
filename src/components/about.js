import React, { useEffect, useRef } from "react"
import ScrollReveal from "scrollreveal"
import { srConfig } from "../config"
import styled from "styled-components"
import theme from "../styles/theme"
import Image from "../content/me.png"
import Lottie from "react-lottie"
import animationData from "../styles/avatar.json"
import Tooltip from '@mui/material/Tooltip';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import RehypeReact from "rehype-react"
import media from "../styles/media"
import useMediaQuery from '@mui/material/useMediaQuery';

const AboutContainer = styled.section`
  margin-top: 120vh;
  //border: 5px solid black;
`

const FlexContainer = styled.div`
${media.thone`
flex-direction: column;
#content {order:2}
`};
  display: flex;
  flex-direction: row;
  align-items: center;

`
const ContentContainer = styled.div`

  left: 15vw;
  max-width: 45vw;
  font-family: ${theme.fonts.Serif};
  font-size: 1.8rem;
  text-align: left;
  position: relative;
  line-height: 1.5;
  ${media.tablet`font-size: 1.4rem;`};
  ${media.thone`
  max-width: 80vw;
  left: 8vw;
  font-size: 1.3rem;
`};

`

const AvatarContainer = styled.div`
position: relative;
// border: 1px solid black;
left: 10vw;
${media.thone`

  left: 0;
`};
`

const Avatar = styled.img`
position: absolute;
right: 20%;
top:0;
z-index:3

`
const style  = {
  display:"inline-block",
  position: "relative",
  left:"0",
  zIndex: "1",
}

const Name = styled(Tooltip)`

&.MuiSvgIcon-root{
  position: absolute;
  left: 47%;
  top:-5%;
  color: ${theme.colors.pink}
  ${media.thone`left: 50%;
  top: -9%`};
}`

const List = styled.li`
&::marker{
color: ${theme.colors.pink}
}
`

const Strike = styled.s`
opacity:0.2;
`
const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    li: (props) => <List {...props} />,
    s: (props) => <Strike {...props}/>
  },
}).Compiler;


const About = ({...props}) => {


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }
    const about = useRef()
    useEffect(() => {
      ScrollReveal().reveal(about, srConfig())
    },[])



    const {  htmlAst } = props.data[0].node
    const imageWidth = useMediaQuery('(max-width:760px)') ? [400, 400] : [700, 500]
    console.log(imageWidth)
    return (

      <AboutContainer ref={about}>
        <FlexContainer>
          <ContentContainer id="content">
          <Name title="grandfather's name for me" placement="top"><QuestionMarkIcon/></Name>
          <div>{renderAst(htmlAst)}</div>
          </ContentContainer>
          <AvatarContainer id="avatar">
            <Lottie
              style={style}
              options={defaultOptions}
              height={imageWidth[0]}
              width={imageWidth[0]}
            />
            <Avatar src={Image} alt="Avatar" height={imageWidth[1]} width={imageWidth[1]} />
          </AvatarContainer>
        </FlexContainer>
      </AboutContainer>


    )
  }


export default About
