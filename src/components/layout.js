import React, { Component } from "react"
import PropTypes from "prop-types"
import Icons from "../components/socialbar"
import Loader from "./loader"
import GlobalStyle from "../styles/global"
import Resume from "./Resume"
import styled from "styled-components"
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    isLoading: true,
  }

  finishLoading = () => this.setState({ isLoading: false })

  render() {
    const { children } = this.props
    const { isLoading } = this.state

    return (
      <div>
        <GlobalStyle />
        {isLoading ? (
          <Loader finishLoading={this.finishLoading} />
        ) : (
          <MainContainer>
            <Icons />
            {children}
            <Resume />
          </MainContainer>
        )}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
