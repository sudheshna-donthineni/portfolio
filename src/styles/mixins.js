import { css } from "styled-components"
import media from "../styles/media"
import theme from "../styles/theme"

const mixins = {
  title: css`
    color: ${theme.colors.purple}
    font-size: 4rem;
    ${media.tablet`font-size: 3rem`}
    display: inline-block;
    width:auto;
    letter-spacing: 16px;
    //background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
    text-shadow: -1px -2px 0 ${theme.colors.brown},
    1px -2px 0 ${theme.colors.brown}, -1px 2px 0 ${theme.colors.brown},
    1px 2px 0 ${theme.colors.brown};
`,
border: css`
  border: 2px solid black;`
}

export default mixins
