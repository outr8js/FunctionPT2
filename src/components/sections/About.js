import React, { lazy, Suspense, useLayoutEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

import Button from "../Button";
import { dark } from "../../styles/Themes";
import Loading from "../Loading";
import { useLanguage } from "../../context/LanguageContext"; // Import hook

const Carousel = lazy(() => import("../Carousel"));

gsap.registerPlugin(ScrollTrigger, SplitText);

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em) {
    width: 85%;
  }

  @media (max-width: 64em) {
    width: 100%;
    flex-direction: column;

    & > *:last-child {
      width: 80%;
    }
  }

  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontx};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
  opacity: 0;             /* start hidden for GSAP */
  will-change: transform; /* smoother animation */

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  opacity: 0;
  will-change: transform;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  opacity: 0;
  will-change: transform;

  @media (max-width: 64em) {
    width: 100%;
    text-align: left;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: flex-start;

  @media (max-width: 64em) {
    width: 100%;
    justify-content: center;

    button {
      margin: 0 auto;
    }
  }
`;

const About = () => {
  const { translations } = useLanguage(); // Use hook
  const sectionRef = useRef(null);
  
  const titleRef = useRef(null);
  const subRef1 = useRef(null);
  const subRef2 = useRef(null);
  const subRef3 = useRef(null);
  const subRef4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Split the text into animatable pieces
      const titleSplit = new SplitText(titleRef.current, { type: "chars,words" });
      const subSplit1 = new SplitText(subRef1.current, { type: "words" });
      const subSplit2 = new SplitText(subRef2.current, { type: "words" });
      const subSplit3 = new SplitText(subRef3.current, { type: "words" });
      const subSplit4 = new SplitText(subRef4.current, { type: "words" });

      // ensure base nodes are visible once GSAP takes over
      gsap.set([titleRef.current, subRef1.current, subRef2.current, subRef3.current, subRef4.current], { opacity: 1 });

      // Title: bigger, more dramatic, but still clean
      gsap.from(titleSplit.chars, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        yPercent: 40,
        opacity: 0,
        stagger: {
          each: 0.015,
        },
        duration: 0.7,
        ease: "power3.out",
      });

      // Main paragraph (1st): words slide up in a gentle flow
      gsap.from(subSplit1.words, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        yPercent: 30,
        opacity: 0,
        stagger: {
          each: 0.01,
        },
        duration: 0.6,
        ease: "power2.out",
      });

      // 2nd, 3rd, 4th paragraphs: fade in slightly after the first
      gsap.from([subSplit2.words, subSplit3.words, subSplit4.words], {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 55%",
          end: "top 25%",
          toggleActions: "play none none reverse",
        },
        yPercent: 20,
        opacity: 0,
        stagger: {
          each: 0.008,
        },
        duration: 0.6,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section id="about" ref={sectionRef}>
      <Container>
        <Box>
          <Suspense fallback={<Loading />}>
            <Carousel />
          </Suspense>
        </Box>
        <Box>
          <Title ref={titleRef}>
             {translations.about_title.split(' ').slice(0, 2).join(' ')} <br /> 
             {translations.about_title.split(' ').slice(2, 5).join(' ')} <br /> 
             {translations.about_title.split(' ').slice(5).join(' ')}
          </Title>

          <SubText ref={subRef1}>
            {translations.about_text_1}
          </SubText>

          <SubTextLight ref={subRef2}>
            {translations.about_text_2}
          </SubTextLight>

          <SubTextLight ref={subRef3}>
            {translations.about_text_3}
          </SubTextLight>

          <SubTextLight ref={subRef4}>
            {translations.about_text_4}
          </SubTextLight>

          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text=" (718) 942-5133" link="#" newTab={true} />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;