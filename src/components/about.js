import React, { Component } from "react"
import PropTypes from "prop-types"
//  import Img from 'gatsby-image';
// import ScrollReveal from 'scrollreveal';
// import { srConfig } from '../config';
import styled from "styled-components"
// import { theme, mixins, media, Section, Heading } from '../styles';
// const { colors, fontSizes, fonts } = theme;

const AboutContainer = styled.section`
  position: relative;
  margin-top: 100vh;
  border: 1px solid black;
  height: 100vh;
`
// const FlexContainer = styled.div`

//   ${mixins.flexBetween};
//   align-items: flex-end;

//   ${media.tablet`display: block;`};
// `;
// const ContentContainer = styled.div`

//   margin-left:400px;
//   max-width: 880px;
//   font-size: ${fontSizes.large};
//   ${media.tablet`width: 100%;`};
//   a {
//     ${mixins.inlineLink};
//   }
// `;
// const SkillsContainer = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(140px, 200px));
//   overflow: hidden;

//   margin-top: 20px;
// `;
// const Skill = styled.li`
//   position: relative;
//   margin-bottom: 10px;
//   padding-left: 20px;
//   font-family: ${fonts.SFMono};
//   font-size: ${fontSizes.smallish};
//   color: ${colors.slate};
//   &:before {
//     content: '-';
//     position: absolute;
//     left: 0;
//     color: ${colors.red};
//     font-size: ${fontSizes.small};
//     line-height: 12px;
//   }
// `;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;

  margin-left: -300px;
`
const Avatar = styled.img`
  position: relative;
  margin-top: -30px;
  width: auto;
`
const AvatarContainer = styled.div`
  position: relative;
  margin-top: -350px;
  margin-left: -700px;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  border: 5px red;
  overflow: hidden;
`

class About extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  }

  // componentDidMount() {
  //   ScrollReveal().reveal(this.about, srConfig());
  // }

  render() {
    const { data } = this.props
    const { frontmatter, html } = data[0].node
    const { title, skills, avatar } = frontmatter

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        {/* <Heading>{title}</Heading>
        <FlexContainer>
          <ContentContainer>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <SkillsContainer>
              {skills && skills.map((skill, i) => <Skill key={i}>{skill}</Skill>)}
            </SkillsContainer>
          </ContentContainer> */}
        <p>hello</p>
        <PicContainer>
          <AvatarContainer>
            <Avatar fluid={avatar.childImageSharp.fluid} alt="Avatar" />
          </AvatarContainer>
        </PicContainer>
      </AboutContainer>
    )
  }
}

export default About
