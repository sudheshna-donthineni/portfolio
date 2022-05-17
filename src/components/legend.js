import React, { Component } from "react";
import styled from "styled-components";
import media from "../styles/media";
import mixins from "../styles/mixins";
import theme from "../styles/theme";

const Container=styled.div`
margin-top:4%;
margin-bottom:4%;
width:85%;
margin-left: auto;
margin-right: auto;
display: flex;
${media.tablet `display: block;
margin-top:7%;
margin-bottom:7%;`}
justify-content: space-between;
`

const LegendContainer = styled.div`
display: flex;
flex-direction: row;
justify-content middle;
`

const Marker = styled.div`
border: 1px solid black;
background: ${props => (props.color)};
width: 2vw;
height: 2vw;
margin-top:auto;
margin-bottom:auto;
`

const Text = styled.p`
margin-top:auto;
margin-bottom:auto;
margin-left: 7%;
`
class Legend extends Component{

    render(){
        return(
            <Container>
                <LegendContainer>
            <Marker color={`${theme.colors.purple}`}></Marker>
            <Text>Worked with for a long time</Text>
            </LegendContainer>
            <LegendContainer>
            <Marker color={`${theme.colors.pink}`}></Marker>
            <Text>Worked with for quite some time</Text>
            </LegendContainer>
            <LegendContainer>
            <Marker color={`${theme.colors.orange}`}></Marker>
            <Text>Started working with in recent past</Text>
            </LegendContainer>
            </Container>
        )
    }
}
export default Legend;