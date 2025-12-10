// src/components/FloatingContactCTA.js
import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";

// The button is now a fixed circle centred at the bottom of the viewport.
const FloatingButton = styled.button`
  position: fixed;
  z-index: 999;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);

  /* Circle dimensions */
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  /* Soft light background */
  background: radial-gradient(
    circle at 30% 30%,
    rgba(248, 241, 233, 0.98),
    rgba(248, 241, 233, 0.9)
  );
  color: #1a1a1a;

  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
  outline: none;

  font-size: ${({ theme }) => theme.fontsm};
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;

  /* Mobile size adjustment */
  @media (max-width: 48em) {
    width: 3.2rem;
    height: 3.2rem;
    bottom: 1.5rem;
    font-size: ${({ theme }) => theme.fontxs};
  }

  &:hover {
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
  }
`;

const FloatingContactCTA = () => {
  const btnRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const el = btnRef.current;
    if (!el) return;

    // Animate opacity/scale in and then spin indefinitely
    const ctx = gsap.context(() => {
      gsap.set(el, {
        rotation: 0,
        autoAlpha: 0,
        scale: 0.9,
      });

      const tl = gsap.timeline();
      // Fade in and pop
      tl.to(el, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.6,
        ease: "elastic.out(1, 0.7)",
      });
      // Continuous rotation
      tl.to(el, {
        rotation: 360,
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }, btnRef);

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    navigate("/contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FloatingButton ref={btnRef} type="button" onClick={handleClick}>
      {/* You can keep text, an icon, or both */}
      <span>Free Consultation</span>
      <span className="icon">↗</span>
    </FloatingButton>
  );
};

export default FloatingContactCTA;