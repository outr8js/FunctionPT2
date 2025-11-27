import React from "react";
import styled, { keyframes } from "styled-components";
import { useLanguage } from "../../context/LanguageContext";

// Import Logos
import insElderplan from "../../assets/Nfts/inselderplan.png";
import insEmblem from "../../assets/Nfts/insemblem.png";
import insEmpire from "../../assets/Nfts/insempireplan.png";
import insFideles from "../../assets/Nfts/insfideles.png";
import insGHI from "../../assets/Nfts/insGHI.png";
import insHealthfirst from "../../assets/Nfts/inshealthfirst.png";
import insHIP from "../../assets/Nfts/insHIP.png";
import insMagna from "../../assets/Nfts/insmagna.png";
import insMedicaid from "../../assets/Nfts/insmedicaid.png";
import insMedicare from "../../assets/Nfts/insmedicare.png";
import insMetroplus from "../../assets/Nfts/insmetroplus.png";
import insUnitedHealth from "../../assets/Nfts/insunitedhealth.png";
import insVillage from "../../assets/Nfts/insvillage.png";
import insVNS from "../../assets/Nfts/insvns.png";

const Section = styled.section`
  min-height: 50vh; /* Reduced height slightly since it's a ticker now */
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  overflow: hidden;
  position: relative;
`;

const HeadingWrap = styled.div`
  margin-bottom: 3rem;
  text-align: center;
  z-index: 5;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
`;

const Subtitle = styled.p`
  margin: 0.75rem auto 0;
  font-size: ${(props) => props.theme.fontsm};
  color: rgba(${(props) => props.theme.textRgba}, 0.8);
  max-width: 34rem;
`;

const Underline = styled.div`
  margin: 0.75rem auto 0;
  height: 2px;
  width: 4rem;
  background-color: ${(props) => props.theme.text};
`;

// --- Ticker Logic ---

const move = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const Row = styled.div`
  white-space: nowrap;
  box-sizing: content-box;
  margin: 1.5rem 0;
  display: flex;
  width: 100%;
  overflow: hidden; /* Hide overflow so scrollbar doesn't appear */
  
  /* The container for the moving track */
  .track {
    display: flex;
    animation: ${move} ${props => props.speed || 30}s linear infinite ${props => props.direction === 'reverse' ? 'reverse' : 'normal'};
  }
  
  /* Pause on hover */
  &:hover .track {
    animation-play-state: paused;
  }
`;

const LogoItem = styled.div`
  width: 12rem;
  height: 5rem;
  margin: 0 1.5rem;
  padding: 1rem;
  background-color: rgba(${(props) => props.theme.textRgba}, 0.05);
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: grayscale(0.1);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0);
  }
`;

const InsuranceSection = () => {
  const { translations } = useLanguage();

  const logos = [
    { src: insElderplan, alt: "Elderplan" },
    { src: insEmblem, alt: "EmblemHealth" },
    { src: insEmpire, alt: "The Empire Plan" },
    { src: insFideles, alt: "Fideles Care" },
    { src: insGHI, alt: "GHI" },
    { src: insHealthfirst, alt: "Healthfirst" },
    { src: insHIP, alt: "HIP Health Plan of New York" },
    { src: insMagna, alt: "MagnaCare" },
    { src: insMedicaid, alt: "Medicaid" },
    { src: insMedicare, alt: "Medicare" },
    { src: insMetroplus, alt: "MetroPlus" },
    { src: insUnitedHealth, alt: "UnitedHealthcare" },
    { src: insVillage, alt: "VillageCare" },
    { src: insVNS, alt: "VNS" },
  ];

  // Split logos into two rows for visual variety
  const midPoint = Math.ceil(logos.length / 2);
  const row1 = logos.slice(0, midPoint);
  const row2 = logos.slice(midPoint);

  return (
    <Section id="insurance">
      <HeadingWrap>
        <Title>{translations.title_insurances_accepted}</Title>
        <Underline />
        <Subtitle>
          {translations.insurance_subtitle}
        </Subtitle>
      </HeadingWrap>

      {/* Top Row - Normal Direction */}
      <Row speed={30} direction="normal">
        <div className="track">
          {/* Repeat the map twice to ensure seamless loop without gaps */}
          {[...row1, ...row1, ...row1].map((logo, index) => (
            <LogoItem key={`r1-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </LogoItem>
          ))}
        </div>
      </Row>

      {/* Bottom Row - Reverse Direction */}
      <Row speed={35} direction="reverse">
        <div className="track">
          {[...row2, ...row2, ...row2].map((logo, index) => (
            <LogoItem key={`r2-${index}`}>
              <img src={logo.src} alt={logo.alt} />
            </LogoItem>
          ))}
        </div>
      </Row>
    </Section>
  );
};

export default InsuranceSection;