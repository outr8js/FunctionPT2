import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useRef } from 'react';
import styled from 'styled-components';
import Accordion from '../Accordion';
import { useLanguage } from '../../context/LanguageContext';

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${props => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em){
    width: 80%;
  }
  @media (max-width: 48em){
    width: 90%;
    flex-direction: column;
    &>*:last-child{
      &>*:first-child{
        margin-top: 0;
      }
    }
  }
`;

const Box = styled.div`
  width: 45%;
  @media (max-width: 64em){
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const { translations } = useLanguage();
  const ref = useRef(null);
  
  // We still register the plugin because we pass ScrollTrigger to the Accordion components
  gsap.registerPlugin(ScrollTrigger);

  // REMOVED: The useLayoutEffect that contained the 'pin: true' logic.
  // This ensures the section scrolls naturally without freezing.

  const faqData = [
    { q: translations.faq_referral_q, a: translations.faq_referral_a },
    { q: translations.faq_sessions_q, a: translations.faq_sessions_a },
    { q: translations.faq_first_visit_expect_q, a: translations.faq_first_visit_expect_a },
    { q: translations.faq_hurt_q, a: translations.faq_hurt_a },
    { q: translations.faq_insurance_q, a: translations.faq_insurance_a },
    { q: translations.faq_bring_first_q, a: translations.faq_bring_first_a },
    { q: translations.faq_cancel_q, a: translations.faq_cancel_a },
    { q: translations.faq_pain_return_q, a: translations.faq_pain_return_a },
    { q: translations.faq_exercises_q, a: translations.faq_exercises_a },
  ];

  const midIndex = Math.ceil(faqData.length / 2);
  const firstColData = faqData.slice(0, midIndex);
  const secondColData = faqData.slice(midIndex);

  return (
    <Section ref={ref} id="faq">
      <Title>{translations.faq_heading}</Title>
      <Container>
        <Box>
          {firstColData.map((item, index) => (
            <Accordion key={index} ScrollTrigger={ScrollTrigger} title={item.q}>
              {item.a}
            </Accordion>
          ))}
        </Box>
        <Box>
          {secondColData.map((item, index) => (
            <Accordion key={index + midIndex} ScrollTrigger={ScrollTrigger} title={item.q}>
              {item.a}
            </Accordion>
          ))}
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;