import React, { Component } from "react"
import styled from "styled-components"
import Paper from "@mui/material/Paper"
import trifacta from "../images/trifacta.jpeg"
import dasera from "../images/dasera.jpeg"
import af from "../images/af.png"
import PropTypes from "prop-types"
import { srConfig } from "../config"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"
import mixins from "../styles/mixins"
import media from "../styles/media"


const MainContainer = styled.div`

  text-align: center;
  margin-top: 100vh;
`

const Heading = styled.p`
  ${mixins.title}
`

const TimelineContainer = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  }
`

const Item = styled.div`
display: flex;
  margin-bottom: 8vh;
justify-content: center;
flex-direction: row;
  align-content: center;
  &:nth-child(2){
    margin-right:15%;
  }
  &:nth-child(1){
    margin-left:15%;
  }
  &:nth-child(3){
    margin-left:15%;
  }
  ${media.tablet`&:nth-child(2){
    margin-right:0%;
  }
  &:nth-child(1){
    margin-left:0%;
  }
  &:nth-child(3){
    margin-left:0%;
  }`}
`
const BoxHeading = styled.p`
text-align: center;
margin:0;
margin-top:15px;
font-family: ${theme.fonts.SFMono};
letter-spacing: 4px;

font-size: 1.7rem;
text-shadow: -1px -1px 0 ${theme.colors.brown},
    1px -1px 0 ${theme.colors.brown}, -1px 1px 0 ${theme.colors.brown},
    1px 1px 0 ${theme.colors.brown};
color: ${theme.colors.pink};

`

const Image = styled.img`
// border:1px solid ${theme.colors.purple}


border-radius: 50%;

`

const Box = styled(Paper)`
  &.MuiPaper-root {

background: #f2edf9;
    text-align: left;
    border: 1px solid ${theme.colors.purple};
    border-radius: 10px;
    letter-spacing: 1px;
    width: 60vw;
    ${media.tablet`width: 100vw;`}
  }
`

const BoxContent = styled.p`
text-align: center;
  font-family: ${theme.fonts.SFMono};
  font-size: 1rem;
  margin-top: -2%;
  letter-spacing: 3px;
  color: ${theme.colors.pink}
margin-bottom: 0;

`

const BoxDescription = styled.p`
padding-left: 25px;
padding-right: 25px;
padding-bottom: 10px;
line-height: 30px;
font-family: ${theme.fonts.Serif}
font-size: 1.1rem
`

const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 5%;
`
class Work extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)
    this.revealRefs = []
    this.restRefs = []
  }
  componentDidMount() {
    ScrollReveal().reveal(this.work, srConfig())
    this.revealRefs.forEach((ref, i) =>
      ScrollReveal().reveal(ref, srConfig(i * 10))
    )
  }
  render() {
    const { data } = this.props

    return (
      <>
        <MainContainer>

          <Heading> my work</Heading>
          <TimelineContainer>

              {data.map((child, index) => (
                <Item key={index} >

                  <Box>
                  <HeadingContainer><BoxHeading>{child.node.frontmatter.company}</BoxHeading>
                  {(index == 0) &&
                  <Image i={index} src={trifacta} width={50} />}
                  {(index == 1) &&
                  <Image i={index} id="order" src={dasera} width={50} />}
                  {(index == 2) &&
                  <Image i={index} src={af} width={50} />}
                  </HeadingContainer> <br />
          <BoxContent>{child.node.frontmatter.job}</BoxContent>
          <BoxDescription dangerouslySetInnerHTML={{ __html: child.node.html}}></BoxDescription>
          </Box>
                </Item>
              ))}

          </TimelineContainer>
        </MainContainer>
      </>
    )
  }
}

export default Work
