import React, { useRef, useLayoutEffect, lazy, Suspense} from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import Loading from '../Loading';
import star from '../../assets/Nfts/star.png';
import { useLanguage } from '../../context/LanguageContext'; // Import hook


const ConfettiComponent = lazy(() => import('../Confetti'));

// ====== SECTION / TITLE / ROW ======
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  & > *:first-child {
    animation-duration: 20s;

    @media (max-width: 30em) {
      animation-duration: 15s;
    }
  }
  & > *:last-child {
    animation-duration: 15s;

    @media (max-width: 30em) {
      animation-duration: 10s;
    }
  }
`;

// *** TITLE COMPONENT ADDED BACK ***
const Title = styled.h1`
  font-size: ${props => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${props => props.theme.body}; /* light on dark */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${props => props.theme.body};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
  }
`;
// *** END TITLE ***

const move = keyframes`
  0% { transform: translateX(100%) };
  100% { transform: translateX(-100%) };
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  /* marquee / carousel effect */
  animation: ${move} ${props => props.speed || 40}s linear infinite
    ${props => (props.direction === 'reverse' ? 'reverse' : 'normal')};
`;

// ====== CARD LOOK ======
// Renaming ImgContainer to Card for clarity, as used in previous conversation context
const Card = styled.div`
  width: 15rem;
  margin: 0 1rem;
  background-color: ${props => props.theme.body};
  border-radius: 20px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (max-width: 48em) {
    width: 12rem;
  }
  @media (max-width: 30em) {
    width: 10rem;
  }
`;

// text where the image used to be
const ReviewText = styled.p`
  padding: 0.8rem 1rem 0.4rem;
  margin: 0;
  font-family: 'Rejouice', system-ui, sans-serif;
  font-size: 0.95rem;
  line-height: 1.4;
  color: ${props => props.theme.text};
  text-align: left;
  white-space: normal;          /* override Row nowrap */
  overflow-wrap: break-word;
  word-break: break-word;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  background-color: ${props => props.theme.text};
  border: 2px solid ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  /* NEW: push this block to the bottom of the card */
  margin-top: auto;

  span {
    font-size: ${props => props.theme.fontsm};
    color: ${props => `rgba(${props.theme.bodyRgba}, 0.5)`};
    font-weight: 600;
    line-height: 1.5rem;
  }

  h1 {
    font-size: ${props => props.theme.fontmd};
    color: ${props => props.theme.body};
    font-weight: 600;

    @media (max-width: 30em) {
      font-size: ${props => props.theme.fontsm};
    }
  }
`;

const Rating = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 1rem;
    height: auto;
    margin-right: 0.25rem;
  }
`;

// ====== GSAP TEXT ANIMATION (LOOPING) - RESTORED ORIGINAL ======
function AnimatedReviewText({ text }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    // NOTE: This relies on SplitText being registered globally, as it was in the original setup.
    const chars = ref.current.querySelectorAll('.char');

    // looping reveal
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 2
    });

    tl.fromTo(
      chars,
      { opacity: 0, y: 18 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.02,
        ease: 'power2.out',
        duration: 0.6
      }
    );

    return () => tl.kill();
  }, []);

  return (
    <ReviewText ref={ref}>
      {text.split('').map((ch, i) => (
        <span key={i} className="char">
          {ch}
        </span>
      ))}
    </ReviewText>
  );
}
// ====== END RESTORED ORIGINAL ANIMATION ======

// ====== CARD COMPONENT ======
function ReviewItem({ text, name, rating, passRef, translations }) { // Pass translations is the only translation change here
  const play = () => {
    if (passRef && passRef.current) {
      passRef.current.style.animationPlayState = 'running';
    }
  };

  const pause = () => {
    if (passRef && passRef.current) {
      passRef.current.style.animationPlayState = 'paused';
    }
  };

  return (
    <Card onMouseOver={pause} onMouseOut={play}>
      <AnimatedReviewText text={text} />

      <Details>
        <div>
          <span>{translations.reviewed_by}</span> <br /> 
          <h1>{name}</h1>
        </div>

        <div>
          <span>{translations.rating}</span> 
          <Rating>
            <img src={star} alt="Rating star" />
            <h1>{Number(rating).toFixed(1)}</h1>
          </Rating>
        </div>
      </Details>
    </Card>
  );
}

// ====== REVIEW DATA (The only necessary change here is adding the text_key) ======
const row1Reviews = [
  {
    name: 'Rita D.',
    rating: 5,
    text_key: 'review_1_text' // Translation Key
  },
  {
    name: 'Alesha M.',
    rating: 5,
    text: "I recently had the privilege of receiving physical therapy from Vic, and I couldn't be more thrilled with the experience. From the moment I walked into the clinic, I was greeted with a warm and welcoming atmosphere. Vic and his entire team were not only professional but also incredibly kind and caring."
  },
  {
    name: 'Carolyn D.',
    rating: 5,
    text: 'My first time having physical therapy and they took great care of me ! Very respectful & super comforting, love them so much (: Highly reccomend them.'
  },
  {
    name: 'Sharon W.',
    rating: 5,
    text: 'I got my hips replaced, but I became a customer due to my pain and discomfort I was having pre-surgery. I love it here. Vic and his staff are the absolute best. After my first hip surgery and after my second hip was done, the kind and caring service I got is beyond my expectations. I recommend them highly.'
  },
  {
    name: 'Claudette R.',
    rating: 4.5,
    text_key: 'review_5_text' // Translation Key
  }
];

const row2Reviews = [
  {
    name: 'Carolyn B.',
    rating: 4.7,
    text_key: 'review_6_text' // Translation Key
  },
  {
    name: 'Janetta S.',
    rating: 5,
    text: 'Function in Motion is just the place to go if you want the best the staff is courteous and professional. Ana one of the therapist there is a beast in a good way. They do there best to accommodate your needs.'
  },
  {
    name: 'Isla F.',
    rating: 5,
    text: 'This is the best physical therapy that i have ever visit. They are excellent. Very clean, cordial, polite and friendly'
  },
  {
    name: 'Akua D.',
    rating: 4.9,
    text: 'If you need personalized care to recover, I definitely recommend function in motion.'
  },
  {
    name: 'Patient Story',
    rating: 4.7,
    text_key: 'review_10_text' // Translation Key
  }
];

// ====== MAIN COMPONENT (Confetti and Title updated with translation) ======
function Showcase() {
  const { translations } = useLanguage(); // Use hook (translation change)
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);

  // Helper function to get the review text based on the current language (translation change)
  const getReviewText = (review) => {
    // If a translation key exists, use the translated text. Otherwise, use the original English text.
    return review.text_key ? translations[review.text_key] : review.text;
  }

  return (
    <Section id="showcase">
      {/* *** CONFETTI REMAINS UNTOUCHED *** */}
      <Suspense fallback={<Loading />}>
        <ConfettiComponent />
      </Suspense>
      
      {/* *** TITLE UPDATED FOR TRANSLATION *** */}
      <Title>{translations.title_what_they_say}</Title>

    {/* Top row */}
<Row direction="normal" speed={35} ref={Row1Ref}>
  {row1Reviews.map((r, i) => (
    <ReviewItem
      key={i}
      text={getReviewText(r)}
      name={r.name}
      rating={r.rating}
      passRef={Row1Ref}
      translations={translations} 
    />
  ))}
</Row>

{/* Bottom row */}
<Row direction="reverse" speed={50} ref={Row2Ref}>
  {row2Reviews.map((r, i) => (
    <ReviewItem
      key={i}
      text={getReviewText(r)}
      name={r.name}
      rating={r.rating}
      passRef={Row2Ref}
      translations={translations} 
    />
  ))}
</Row>
    </Section>
  );
}

export default Showcase;