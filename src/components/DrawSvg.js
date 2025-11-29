import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Vector from '../Icons/Vector';

const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  svg {
    display: inline-block;
    width: 100%;
    /* FIX: Changed from 100% to auto to prevent stretching */
    height: auto; 
    max-height: 100%;
  }

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const Bounce = keyframes`
  from { transform: translateX(-50%) scale(0.5); }
  to { transform: translateX(-50%) scale(1); }
`;

const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: ${props => props.theme.text};
  animation: ${Bounce} 0.5s linear infinite alternate;

  @media (max-width: 48em) {
    left: 1rem;
  }
`;

const DrawSvg = () => {
  const ref = useRef(null);
  const ballRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;
    
    // Select the path. Ensure your Vector.js has className="svg-path"
    let svg = document.getElementsByClassName("svg-path")[0];

    // Safety check
    if (!svg) { 
        console.warn("SVG Path not found. Check Vector.js has className='svg-path'"); 
        return; 
    }

    const length = svg.getTotalLength();

    // Start positioning of svg drawing
    svg.style.strokeDasharray = length;
    svg.style.strokeDashoffset = length;

    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top center",
        end: "bottom bottom",
        onUpdate: (self) => {
          const draw = length * self.progress;
          // As we scroll down, reduce offset to 0 to draw the line
          svg.style.strokeDashoffset = length - draw;
        },
        onToggle: (self) => {
          if (self.isActive) {
            if(ballRef.current) ballRef.current.style.display = 'none';
          } else {
             if(ballRef.current) ballRef.current.style.display = 'inline-block';
          }
        },
      },
    });

    return () => {
      if (t1) t1.kill();
    };
  }, []);

  return (
    <>
      <Ball ref={ballRef} />
      <VectorContainer ref={ref}>
        {/* FIX: Force Aspect Ratio here in case Vector.js isn't updated */}
        <Vector preserveAspectRatio="xMidYMin meet" />
      </VectorContainer>
    </>
  );
};

export default DrawSvg;