import React, { Component } from "react"
// import PropTypes from 'prop-types';
import styled, { keyframes } from "styled-components"
import { socialMedia } from "../config"
import MenuIcon from '@mui/icons-material/Menu';
import theme from "../styles/theme"
import media from "../styles/media"
import { Link } from "gatsby"


const IconAnimation = keyframes`
0% { opacity: 0; transform: translateY(-20px); }
25% { opacity: 1; transform: translateY(0px); }
  75% { opacity: 1;  }
  100% { opacity: 1;  }
`
const MainContainer = styled.div`
  position: fixed;
  top: 5vh;
   display: flex;
  right:0;
  margin-right: 10vw;
  align-items: center;
  justify-content: space-between
  animation-name: ${IconAnimation};
  ${media.tablet`
  display: ${(props) => props.navOpen ? 'flex' : 'none'};
  flex-direction: row;
  `}
`

const NavLink = styled(Link)`
padding: 10px;
text-decoration: none;
font-family: ${theme.fonts.SFMono};
letter-spacing: 4px;
margin-right: 10px;
font-size: 1.5rem;
text-shadow: -1px -1px 0 ${theme.colors.brown},
    1px -2px 0 ${theme.colors.brown}, -1px 2px 0 ${theme.colors.brown},
    1px 1px 0 ${theme.colors.brown};
color: ${theme.colors.purple};
&:hover{
    cursor: pointer;
    transform: translateY(-7px)
}
`


class Topbar extends Component {

  render() {
    return (
        <MainContainer>
            <NavLink >about</NavLink>
            <NavLink>story</NavLink>
            <NavLink>work</NavLink>
      </MainContainer>
    )
  }
}

export default Topbar
