import styled from "styled-components"
import theme from "../styles/theme"
import React, { Component } from "react"
import ReceiptIcon from "@mui/icons-material/Receipt"
import media from "../styles/media"

const Button = styled.a`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
  color: ${theme.colors.pink};
`

const Text = styled.p`
position: absolute;
top:-8vh;
color: ${theme.colors.pink}
width: 150%;
text-align: center;
display: ${props => (props.popUp ? "block" : "none")};
${media.tablet`top:3vh;
left:-10vw;
display: block;
font-size: 0.9rem;`}
`

const Icon = styled(ReceiptIcon)`
  &.MuiSvgIcon-root {
    ${media.ipad`height: 4vw;
    width: 4vw;`}
    ${media.tablet`height: 7vw;
    width: 7vw;`}

  height: 2.5vw;
    width: 2.5vw;
  }
`

class Resume extends Component {
  constructor(props) {
    super(props)
    this.state = {
      popUp: false,
    }

    this.handleHover = this.handleHover.bind(this)
  }

  handleHover() {
    this.setState(prevState => ({
      popUp: !prevState.popUp,
    }))
  }
  render() {
    return (
      <>
        <Text popUp={this.state.popUp}>Download my resume!</Text>

        <Button onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
          <Icon />
        </Button>
      </>
    )
  }
}
export default Resume
