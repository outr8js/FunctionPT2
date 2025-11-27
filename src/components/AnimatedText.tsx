// AnimatedText.tsx
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

const Wrapper = styled.div`
  max-width: 80vw;
`;

const Heading = styled.h1`
  opacity: 0;
  text-align: center;
  font-family: "Mori", system-ui, sans-serif;
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: 0.05rem;
  color: #0e100f;
`;

const AnimatedText: React.FC<{ text: string }> = ({ text }) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return;

    const ctx = gsap.context(() => {
      const split = new SplitText(headingRef.current!, {
        type: 'chars,words',
        mask: 'chars',
      });

      gsap.set(headingRef.current, { opacity: 1 });

      gsap.from(split.chars, {
        duration: 0.6,
        yPercent: 'random([-150, 150])',
        xPercent: 'random([-150, 150])',
        stagger: {
          from: 'random',
          amount: 0.6,
        },
        ease: 'power3.out',
      });
    }, headingRef);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <Heading ref={headingRef}>{text}</Heading>
    </Wrapper>
  );
};

export default AnimatedText;