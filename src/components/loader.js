import React, { Component } from "react"
import PropTypes from "prop-types"
import Lottie from "react-lottie"
import animationData from "../styles/loader.json"
import styled from "styled-components"

const LogoWrapper = styled.div`
  opacity: ${props => (props.isMounted ? 1 : 0)};
  width: auto;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

class Loader extends Component {
  static propTypes = {
    finishLoading: PropTypes.func.isRequired,
  }

  state = {
    isMounted: false,
  }

  componentDidMount() {
    this.setState({ isMounted: true }, () => this.animate())
  }

  componentWillUnmount() {
    this.setState({ isMounted: false })
  }

  defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  }

  animate() {
    const { finishLoading } = this.props
    setTimeout(() => {
      finishLoading()
    }, 3000)
  }

  render() {
    const { isMounted } = this.state

    return (
      <LogoWrapper isMounted={isMounted}>
        <Lottie options={this.defaultOptions} height={400} width={400} />
      </LogoWrapper>
    )
  }
}

export default Loader
