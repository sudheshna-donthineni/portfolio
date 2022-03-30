import React, { Component } from "react"
import styled from "styled-components"
import theme from "../styles/theme"
import Timeline from "@mui/lab/Timeline"
import TimelineItem from "@mui/lab/TimelineItem"
import TimelineSeparator from "@mui/lab/TimelineSeparator"
import TimelineConnector from "@mui/lab/TimelineConnector"
import TimelineContent from "@mui/lab/TimelineContent"
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent"
import TimelineDot from "@mui/lab/TimelineDot"
import scu from "../images/scu.png"
import trifacta from "../images/trifacta.png"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  margin-left: auto;
  margin-right: auto;
  text-align:center;
  }
`
const Title = styled.p`
  color: ${theme.colors.brown}
    font-size:4vw;
  display: inline-block;
  width:auto;
  margin-bottom:10

`
const TimelineStyle = {
  marginTop: "0"
}

const TimelineDotStyle = {
  color: `${theme.colors.purple}`,
  "&:hover":{
    background: "#efefef"
  }
}
// const Line = styled.div`
//   height: 100%;
//   border-left: 3px solid ${theme.colors.brown};
//   margin-left: 50%;
// `

// const Icon = styled.div`
//   position: relative;
//   top: -98%;
//   margin-left: auto;
//   margin-right: auto;
//   background: ${theme.colors.purple};
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   margin-bottom: 10%;
//   border: 1px solid black;
// `

// const Text = styled.p`
//   font-size: 2vw;
//   position: absolute;
//   left: 5vw;
//   top: -4vh;

//   width: 20vw;
// `
class Work extends Component {
  render() {
    return (
      <>
        <Container>
          <Title>work</Title>
          {/* <Line />
          <Icon>
            <Text>Jan 2016 - Jun 2016</Text>
          </Icon>
          <Icon>
            <Text>Jun 2016</Text>
          </Icon>
          <Icon>
            <Text>Jun 2018</Text>
          </Icon>
          <Icon>
            <Text>Aug 2018 - Nov 2019</Text>
          </Icon>
          <Icon>
            <Text>Nov 2019 - May 2020</Text>
          </Icon>
          <Icon>
            <Text>Jul 2021 - Present</Text>
          </Icon> */}

          <Timeline style={TimelineStyle} position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                Jan 2016 - Jun 2016
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot variant="outlined" style={TimelineDotStyle}>
                <img src={scu} width={60} height={60}/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>Santa Clara University</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="text.secondary"
              >
                Jun 2016
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary"><img src={trifacta} width={60} height={60}/></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined"></TimelineDot>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
                <TimelineDot color="secondary"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
            </TimelineItem>
          </Timeline>
        </Container>
      </>
    )
  }
}

export default Work
