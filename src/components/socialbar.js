import React, { Component } from "react"
// import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components"
import { socialMedia } from "../config"
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../styles/theme"
import media from "../styles/media"
import {
  GithubIcon,
  EmailIcon,
  InstaIcon,
  PinterestIcon,
  LinkedInIcon,
  YoutubeIcon,
  TwitterIcon,
} from "./icons"


const IconAnimation = keyframes`
0% { opacity: 0; transform: translateY(-20px); }
25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1;  }
  100% { opacity: 1;  }
`
const IconsDiv = styled.div`
  position: fixed;
  top: 10vh;
  display: flex;
  flex-direction: column;
  left: 4vw;
  align-items: center;

  animation-name: ${IconAnimation};
  ${media.tablet`
  display: ${(props) => props.navOpen ? 'flex' : 'none'};
  flex-direction: row;

  `}
`

const Button = styled.a`
  background-color: transparent;
  border: none;
  height: 3.5vh;
  width: 3.5vw;
  transition-timing-function: ease-in-out;
  transition-delay: 150ms;
  margin-top: 2vh;
  margin-bottom: 2vh;
  &:hover {
    transform: scale(1.5);
  }

  cursor: pointer;
  ${media.tablet`
  height: 8vw;
  width: 8vw;
  animation-name: ${IconAnimation};
  animation-delay: calc($props.index * '2s');
  `}
`
const Hamburger = styled(MenuIcon)`

&.MuiSvgIcon-root{
  display: none;
${media.tablet`
display: inline-block;
width: 10vw;
margin-top:3vh;
margin-left: 4vw;
border: 2px solid ${theme.colors.pink};
border-radius: 20px;
color: ${theme.colors.pink};

&:hover{
  cursor: pointer;
}
`}
}
`
class Socialbar extends Component {
  constructor(props){
    super(props)
  this.state = {
    navOpen : false
  }

  this.handleClick = this.handleClick.bind(this);
}

handleClick() {
  this.setState(prevState => ({
    navOpen: !prevState.navOpen
  }));
}
  render() {
    return (
        <>
        <Hamburger onClick={this.handleClick}/>
        <IconsDiv navOpen={this.state.navOpen}>
        {socialMedia.map(({ index, name, url }) => (

          <Button index={index} href={url} target="_blank" rel="nofollow noopener noreferrer">
            {name === "Github" ? (
              <GithubIcon />
            ) : name === "Linkedin" ? (
              <LinkedInIcon />
            ) : name === "Instagram" ? (
              <InstaIcon />
            ) : name === "Twitter" ? (
              <TwitterIcon />
            ) : name === "Youtube" ? (
              <YoutubeIcon />
            )  : name === "Pinterest" ? (
              <PinterestIcon />
            ) : (
              <GithubIcon />
            )}
          </Button>
        ))}
        <Button  href={`mailto:${socialMedia[5].url}`} target="_blank" rel="nofollow noopener noreferrer"><EmailIcon/></Button>
      </IconsDiv>
      </>
    )
  }
}

export default Socialbar
