import React, { Component } from "react"
// import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components"
import Brightness5Icon from '@mui/icons-material/Brightness5';
import theme from "../styles/theme"
import media from "../styles/media"
import ModeNightIcon from '@mui/icons-material/ModeNight';



const Button = styled.button`
${media.tablet`
margin-top: 0
  `}
margin-top: 5vh;
border: none;
background: none;
color: ${(props) => props.dark ? `${theme.colors.blue}` : `${theme.colors.orange}`};

&:hover{
    cursor: pointer;
    transform: scale(1.2);
  }`

const BrightIcon = styled(Brightness5Icon)`
&.MuiSvgIcon-root{
    ${media.ipad`height: 4vw;
    width: 4vw;`}
    ${media.tablet`height: 7vw;
    width: 7vw;`}

    height: 2.5vw;
    width: 2.5vw;

`

const DarkIcon = styled(ModeNightIcon)`
&.MuiSvgIcon-root{
    ${media.ipad`height: 4vw;
    width: 4vw;`}
    ${media.tablet`height: 7vw;
    width: 7vw;`}

    height: 2.5vw;
    width: 2.5vw;
  }
`
class Mode extends Component {
    constructor(props){
        super(props)
      this.state = {
        darkMode : false
      }

      this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      this.setState(prevState => ({
        darkMode: !prevState.darkMode
      }));
    }
 render() {
    return (
        <>

        {!this.state.darkMode && <Button onClick={this.handleClick} dark={false}><BrightIcon /> </Button>}
        {this.state.darkMode && <Button onClick={this.handleClick} dark={true}><DarkIcon /> </Button>}
      </>
    )
  }
}

export default Mode;
