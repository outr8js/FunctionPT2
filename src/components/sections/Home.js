import React, { lazy, Suspense } from 'react'
import styled, { keyframes } from 'styled-components'
import RoundTextBlack from '../../assets/function-black.png';
import Loading from '../Loading';

const CoverVideo = lazy(() => import('../CoverVideo'));
const TypeWriterText = lazy(() => import('../TypeWriterText'));

const Section = styled.section`
min-height: ${props => `calc(100vh - ${props.theme.navHeight})`   };
width: 100vw;
position: relative;
background-color: ${props => props.theme.body};
`

const Container = styled.div`
width: 75%;
min-height: 80vh;
margin: 0 auto;
/* background-color: lightblue; */

display: flex;
justify-content: center;
align-items: center;

@media (max-width: 64em) {
  width: 85%;
}
@media (max-width: 48em) {
  flex-direction: column-reverse;
  width: 100%;
  &>*:first-child{
    width: 100%;
    margin-top: 2rem;
  }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
/* Ensure the content is left-aligned on desktop */
@media (min-width: 48.01em) {
  align-items: flex-start;
}
/* Center content on mobile */
@media (max-width: 48em) {
  align-items: center;
}
`

// Styles for the static "Got" heading (copied from original TypeWriterText)
const GotHeading = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  line-height: 1.5;
  color: ${(props) => props.theme.text};
  margin: 0 0 0.1rem;
  font-weight: 700;
  z-index: 0;

  @media (max-width: 48em) {
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const rotate = keyframes`
100%{
  transform: rotate(1turn);
}
`
const Round = styled.div`
position: absolute;
bottom: 2rem;
right: 90%;
width: 6rem;
height: 6rem;
border: 1px solid ${props => props.theme.text};
border-radius: 50%;

img{
  width: 100%;
  height: auto;
  animation: ${rotate} 6s linear infinite reverse ;
}
@media (max-width: 64em) {
  width: 4rem;
  height: 4rem;
  left: none;
  right: 2rem;
  bottom: 100%;
}
@media (max-width: 48em) {
  
  right: 1rem;
}
`

const Circle = styled.span`
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);

background-color: ${props => props.theme.text};
color: ${props => props.theme.body};
font-size:${props => props.theme.fontxl};

@media (max-width: 64em) {
  width: 2rem;
  height: 2rem;
font-size:${props => props.theme.fontlg};

}

`

const Home = () => {
  return (
    <Section id="home">
      <Container>
        <Box>
          {/* 1. Static top line: "Got" (Ensures only one "Got" is shown before the animation starts) */}
          <GotHeading>Got</GotHeading>

          {/* 2. Dynamic word, Subtitle, and Button: Loaded via TypeWriterText */}
          <Suspense fallback={<Loading />}>
            <TypeWriterText />
          </Suspense>
        </Box>
        <Box>
          <Suspense fallback={<Loading />}>
            <CoverVideo />
          </Suspense>
        </Box>

        
        <Round>
          <Circle>
            &#x2193; 
          </Circle>
          <img width={500} height={400} src={RoundTextBlack} alt="NFT" />
        </Round>

      </Container>
    </Section>
  )
}

export default Home