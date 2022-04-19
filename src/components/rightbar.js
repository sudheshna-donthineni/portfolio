import React, { Component } from "react"
// import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../styles/theme"
import media from "../styles/media"
import Resume from "./Resume"
import Mode from "./mode";
const Container = styled.div`
${media.tablet`
top:0;
flex-direction: row;

margin-top: 3vh;
  `}

  position: fixed;

top: 35vh;
display: flex;
  flex-direction: column;

  align-items: center;
  right: 0;
  margin-right: 3vw;

`

class Rightbar extends Component {
 render() {
    return (
        <Container>
        <Resume/>
        <Mode/>
      </Container>
    )
  }
}

export default Rightbar;
