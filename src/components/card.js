import React, { Component } from "react"
import styled, { keyframes } from "styled-components"
//import "../styles/styles.css"
import Paper from "@mui/material/Paper"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import theme from "../styles/theme"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import CloseIcon from "@mui/icons-material/Close"

const Heading = styled.p`
  font-size: 1.8rem;
  margin: 0;
  font-weight: bold;
  background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
`
const Box = styled(Paper)`
  &.MuiPaper-root {
    background: #fff;
    text-align: center;
    border: 1px solid ${theme.colors.purple};
    border-radius: 10px;
    letter-spacing: 2px;
    width: 30vw;
  }
`

const BoxContent = styled.p`
  font-family: ${theme.fonts.SFMono};
  font-size: 1.2rem;
  margin: 0;
  letter-spacing: 3px;
`

const Bounce = keyframes`

  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-8px);}
  60% {transform: translateY(-5px);}

`
const WorkButton = styled(Button)`
  &.MuiButton-root {
    background: none;
    border: none;
    margin-left: auto;
    margin-right: auto;
    color: ${theme.colors.pink};
    animation-name: ${Bounce};
    animation-duration: 2s;
    animation-iteration-count: infinite;
    &:hover {
      border: none;
      background: ${theme.colors.pink};
      color: ${theme.colors.brown};
    }
  }
`
const Container = styled(Paper)`
  &.MuiPaper-root {
    border-radius: 10px;
    text-align: left;
    font-size: 1.3rem;

    padding-left: 6%;
    padding-right: 6%;
    font-family: ${theme.fonts.Serif};
    position: absolute;
    background-color: ${theme.colors.pink};
    color: ${theme.colors.brown};
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }
`
const MoreButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 1%;
  background: none;
  border: none;
  top: 3%;

  &:hover {
    background-color: ${theme.colors.brown};
    border-radius: 10%;
    color: ${theme.colors.pink};
    cursor: pointer;
  }
`

class CardBox extends Component {
  constructor() {
    super()
    this.state = {
      showModal: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }
  handleClick() {
    this.setState({showModal: true})
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    const data = this.props

    return (
      <Box>
        <CardContent>
          <Heading>{data.company}</Heading> <br />
          <BoxContent>{data.position}</BoxContent>
        </CardContent>

        <CardActions>
          <WorkButton
            onClick={this.handleClick}
            size="medium"
            variant="outlined"
          >
            <ExpandMoreIcon />
          </WorkButton>
        </CardActions>
        {this.state.showModal && (
          <Container>
            <MoreButton onClick={this.handleCloseModal}>
              <CloseIcon />
            </MoreButton>
            <p dangerouslySetInnerHTML={{ __html: data.content }}></p>
          </Container>
        )}
      </Box>
    )
  }
}

export default CardBox
