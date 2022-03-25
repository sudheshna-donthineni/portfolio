import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`


html {
    background-color: ${theme.colors.grey};
  }



`

export default GlobalStyle
