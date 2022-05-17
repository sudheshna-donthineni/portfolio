const theme = {
  colors: {
    black: "000000",
    dark: "#000007",
    darkestNavy: "#01050b",
    darkNavy: "#020c1b",
    navy: "#0a192f",
    lightNavy: "#172a45",
    darkGrey: "#333f58",
    mediumGrey: "#2d3952",
    blueGrey: "#293d5a",
    gray: "#4c5772",
    lightGrey: "#606a86",
    slate: "#8892b0",
    lightSlate: "#a8b2d1",
    lightestSlate: "#ccd6f6",
    offWhite: "#dce7ff",
    white: "#FFFFFF",
    pink: "#E86C82",
    yellow: "#FFC464",
    orange: "#FF9E64",
    green: "#64ffda",
    blue: "#71AFFF",
    brown: "#15020A",
    purple: "#BFA5E2",
    lightPurple:"bfa5e24d",
    grey: "#f7f6f6",
    dark: "rgb(9,12,16)",
    darkBlue: "#1D7FFC",
    highlight: "rgba(41, 61, 90, 0.99)",
    transNavy: "rgba(10, 25, 47, 0.7)",
    shadowNavy: "rgba(2, 12, 27, 0.9)",
  },

  fonts: {
    Calibre:
      "Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif",
    SFMono:
      "Fira Code, SF Mono, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace",
    Serif: "Fraunces",
  },

  fontSizes: {
    xsmall: "12px",
    smallish: "13px",
    small: "14px",
    medium: "16px",
    large: "18px",
    xlarge: "20px",
    xxlarge: "22px",
    h3: "32px",
  },

  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  transition: "all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)",

  borderRadius: "15px",
  headerHeight: "100px",
  headerScrollHeight: "70px",
  margin: "20px",

  tabHeight: 42,
  tabWidth: 120,

  gradient: `linear-gradient(0.4turn, #64d6ff, #64ffda)`,

  loaderDelay: `6`,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,
}

export default theme
