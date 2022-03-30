import React, { Component } from "react"
// import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components"
import { socialMedia } from "../config"

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
`

const Button = styled.button`
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
`

class Hero extends Component {
  render() {
    return (
      <IconsDiv>
        {socialMedia.map(({ name, url }) => (
          <Button href={url} target="_blank" rel="nofollow noopener noreferrer">
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
            ) : name === "Email" ? (
              <EmailIcon />
            ) : name === "Pinterest" ? (
              <PinterestIcon />
            ) : (
              <GithubIcon />
            )}
          </Button>
        ))}
      </IconsDiv>
    )
  }
}

export default Hero
