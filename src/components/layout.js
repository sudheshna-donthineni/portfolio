import React, { Component } from "react"
import PropTypes from "prop-types"
import Socialbar from "../components/socialbar"
import Loader from "./loader"
import GlobalStyle from "../styles/global"
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Rightbar from "./rightbar"
import styled from "styled-components"
import theme from "../styles/theme"
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
class Layout extends Component {
  static propTypes = {
    children: PropTypes.array.isRequired,
  }

  state = {
    isLoading: true,
  }

  finishLoading = () => this.setState({ isLoading: false })

  render() {
    const { children } = this.props
    const { isLoading } = this.state
    return (

        <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isLoading ? (
          <Loader finishLoading={this.finishLoading} />
        ) : (
          <MainContainer>
            <Socialbar />
            {children}
            <Rightbar />
          </MainContainer>
        )}
        </ThemeProvider>

    )
  }
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default Layout
