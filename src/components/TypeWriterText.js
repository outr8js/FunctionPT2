// src/components/TypeWriterText.js
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "./Button";
// 🚨 REQUIRED FIX: Import and register GSAP and the plugin
import { gsap } from "gsap"; 
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"; 

// Register the plugin once when the module loads
gsap.registerPlugin(ScrambleTextPlugin);

// === STYLED COMPONENTS ===

// Overall stack
const AlignmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* Setting negative margin to pull up the content closer to the static "Got" */
  margin-top: -0.3rem; 

  @media (max-width: 48em) {
    align-items: center;
    text-align: center;
    margin-top: 0;
  }
`;

// Wrapper ONLY for the dynamic GSAP word
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 48em) {
    align-items: center;
    width: 100%;
  }
`;

// Heading that holds the changing word
const DynamicHeading = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  line-height: 1.1;
  color: ${(props) => props.theme.text};
  margin: 0 0 0.2rem;
  font-weight: 700;

  @media (max-width: 48em) {
    text-align: center;
    font-size: ${(props) => props.theme.fontxl};
  }
`;

// The span GSAP scrambles
const DynamicWord = styled.span`
  font-weight: 700;
  white-space: nowrap;
`;

// Static subtitle
const Subheading = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.8)`};
  margin: 0 0 1.5rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontsm};
    text-align: center;
  }
`;

// Button container
const ButtonWrap = styled.div`
  display: inline-flex;

  @media (max-width: 48em) {
    justify-content: center;
    width: 100%;
  }
`;

// === DATA ===
const PHRASES = [
  "pain",
  "sports injuries",
  "post-op rehab",
  "back pain",
  "neck pain",
];

// === COMPONENT ===
const TypeWriterText = () => {
  const wordRef = useRef(null);
  const tlRef = useRef(null);
  
  // --- TIMING CONSTANTS ---
  const DISPLAY_TIME = 5; // seconds to display the word
  const ANIMATION_TIME = 2; // seconds for the transition (scramble/fade)

  useEffect(() => {
    // 💡 FIX: We no longer need to check window.gsap or manually check hasScramble 
    // because we imported and registered the plugin at the top level.
    // However, we still check the element exists.
    const el = wordRef.current;
    if (!el) return;

    // Set the initial content
    el.textContent = PHRASES[0];

    // Define the timeline with repeat timing
    const tl = gsap.timeline({ 
        repeat: -1, 
        repeatDelay: DISPLAY_TIME - ANIMATION_TIME 
    });

    PHRASES.forEach((phrase, index) => {
      // Pause before each change (except for the first one which uses a minimal pause).
      const pauseDuration = index === 0 ? 0.01 : DISPLAY_TIME - ANIMATION_TIME;
      
      tl.to({}, { duration: pauseDuration });

      // The scramble animation will now reliably run
      tl.to(el, {
        duration: ANIMATION_TIME, // Transition duration set to 2 seconds
        scrambleText: {
          text: phrase,
          chars: "!<>-_\\/[]{}—=+*^?#%&$",
          speed: 0.5,
        },
        ease: "none",
      });
    });

    tlRef.current = tl;

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, []); // Run once on mount

  return (
    <AlignmentContainer>
      {/* Dynamic word inside its own wrapper */}
      <Wrapper>
        <DynamicHeading>
          <DynamicWord ref={wordRef}>{PHRASES[0]}</DynamicWord>
        </DynamicHeading>
      </Wrapper>

      {/* Subtitle (Moved back here) */}
      <Subheading>Let&apos;s fix it together.</Subheading>

      {/* Button */}
      <ButtonWrap>
        <Button text="Explore" link="#services" newTab={false} />
      </ButtonWrap>
    </AlignmentContainer>
  );
};

export default TypeWriterText;