import React, { Component } from "react"
import styled from "styled-components"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import scu from "../images/scu.png"
import trifacta from "../images/trifacta.jpeg"
//import "../styles/s tyles.css"
import dasera from "../images/dasera.jpeg"
import af from "../images/af.png"
import CardBox from "../components/card"
import PropTypes from "prop-types"
import { srConfig } from "../config"
import theme from "../styles/theme"
import ScrollReveal from "scrollreveal"

const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top:50vh;
  }
`
const DotIcon = styled.img`
  border-radius: 50%;
`

const DateContent = styled(TimelineOppositeContent)`
  &.MuiTimelineOppositeContent-root {
    letter-spacing: 2px;
    font-size: 1.1rem;
    font-family: "SF Mono";
    margin-top: auto;
    margin-bottom: auto;
  }
`

const Content = styled(TimelineContent)`
  &.MuiTimelineContent-root {
    display: flex;
    align-items: center;

    justify-content: center;
  }
`

const Connector = styled(TimelineConnector)`
  &.MuiTimelineConnector-root {
    height: 13vh;
    background-color: rgb(9, 12, 16);
  }
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
    const {data} = this.props;

    return (
      <>
        <Container>
          <Timeline position="alternate">
            {/* {data.map((child, index) => {
              console.log(child.node);
              <TimelineItem key={index}>
              <DateContent>{child.node.frontmatter.date}</DateContent>
              <TimelineSeparator>
                <Connector />
                <TimelineDot variant="outlined">
                  <DotIcon src={scu} width={70} height={70} />
                </TimelineDot>
                <Connector />
              </TimelineSeparator>
              <Content>
                <CardBox
                  company={child.node.frontmatter.company}
                  position={child.node.frontmatter.job}
                />{" "}
              </Content>
            </TimelineItem>
            })} */}


            <TimelineItem>
              <DateContent>{data[0].node.frontmatter.date}</DateContent>
              <TimelineSeparator>
                <Connector />
                <TimelineDot>
                  <DotIcon
                    variant="outlined"
                    src={scu}
                    width={70}
                    height={70}
                  />
                </TimelineDot>
                <Connector />
              </TimelineSeparator>
              <Content>
                <CardBox
                  company={data[0].node.frontmatter.company}
                  position={data[0].node.frontmatter.job}
                  content={data[0].node.html}
                />
              </Content>
            </TimelineItem>

            <TimelineItem>
              <DateContent>{data[1].node.frontmatter.date}</DateContent>
              <TimelineSeparator>
                <Connector />
                <TimelineDot variant="outlined">
                  <DotIcon src={trifacta} width={70} height={70} />
                </TimelineDot>
                <Connector />
              </TimelineSeparator>
              <Content>
                <CardBox
                  company={data[1].node.frontmatter.company}
                  position={data[1].node.frontmatter.job}
                  content={data[1].node.html}

                />{" "}
              </Content>
            </TimelineItem>

            <TimelineItem>
              <DateContent>{data[2].node.frontmatter.date}</DateContent>
              <TimelineSeparator>
                <Connector />
                <TimelineDot variant="outlined">
                  <DotIcon src={dasera} width={70} height={70} />
                </TimelineDot>
                <Connector />
              </TimelineSeparator>
              <Content>
                <CardBox
                  company={data[2].node.frontmatter.company}
                  position={data[2].node.frontmatter.job}
                  content={data[2].node.html}

                />
              </Content>
            </TimelineItem>
            <TimelineItem>
              <DateContent>{data[3].node.frontmatter.date}</DateContent>
              <TimelineSeparator>
                <Connector />
                <TimelineDot variant="outlined">
                  <DotIcon src={af} width={70} height={70} />
                </TimelineDot>
                <Connector />
              </TimelineSeparator>
              <Content>
                <CardBox
                  company={data[3].node.frontmatter.company}
                  position={data[3].node.frontmatter.job}
                  content={data[3].node.html}

                />
              </Content>
            </TimelineItem>
          </Timeline>
        </Container>
      </>
    )
  }
}

export default Work
