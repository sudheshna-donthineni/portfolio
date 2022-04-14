import React, { Component, createElement } from "react"
import PropTypes from "prop-types"
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


class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  handleResize = () => {
    console.log("resixed")
    this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  })};

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
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
    const {  htmlAst } = data[0].node
    const smallDevice = (this.state.windowWidth < 750)

    return (

      <AboutContainer id="about" ref={el => (this.about = el)}>
        <FlexContainer>


          <ContentContainer id="content">
          <Name title="grandfather's name for me" placement="top"><QuestionMarkIcon/></Name>
          <div>{renderAst(htmlAst)}</div>
          </ContentContainer>
          <AvatarContainer id="avatar">
            <Lottie
              style={style}
              options={this.defaultOptions}
              height={window.innerWidth / (!smallDevice ? 2 : 3)}
              width={window.innerWidth / (!smallDevice ? 2 : 3)}
            />
            <Avatar src={Image} alt="Avatar" height={window.innerWidth / 3} width={window.innerWidth / 3} />
          </AvatarContainer>
        </FlexContainer>
      </AboutContainer>

    )
  }
}

export default About
