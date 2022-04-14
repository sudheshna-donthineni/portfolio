import { css } from "styled-components"
import media from "../styles/media"
import theme from "../styles/theme"

const mixins = {
  title: css`
    color: ${theme.colors.brown}
    font-size: 5rem;
    ${media.thone`font-size: 3rem`}
    display: inline-block;
    width:auto;
    background: url(//s2.svgbox.net/pen-brushes.svg?ic=brush-1&color=bfa5e24d);
`,
}

export default mixins
