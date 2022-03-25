import * as React from "react"
import theme from "../styles/theme"
import styled from "styled-components"

const FooterDiv = styled.footer`
  font-family: ${theme.fonts.SFMono};
  color: ${theme.colors.slate};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  bottom: 0;
`

const Footer = () => {
  return <FooterDiv>© built w &lt;3 by Sudheshna</FooterDiv>
}

export default Footer
