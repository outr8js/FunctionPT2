import styled from 'styled-components';

import img1 from '../../assets/Nfts/img1.png';
import img2 from '../../assets/Nfts/img2.png';
import img3 from '../../assets/Nfts/img3.png';
import img4 from '../../assets/Nfts/img4.png';
import img5 from '../../assets/Nfts/img5.png';
import img6 from '../../assets/Nfts/img6.png';
import img7 from '../../assets/Nfts/img7.png';
import img8 from '../../assets/Nfts/img8.png';
import img9 from '../../assets/Nfts/img9.png';
import { useLanguage } from '../../context/LanguageContext'; // Import hook


const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
  overflow: hidden;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;

const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  z-index: 5;

  backdrop-filter: blur(4px);

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;

  @media (max-width: 30em) {
    width: 70vw;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  &:hover img {
    /* ORIGINAL HOVER ANIMATION: RESTORED */
    transform: translateY(-2rem) scale(1.2);
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: ${(props) => props.theme.carouselColor};
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;

  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
  text-align: center;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
  text-align: center;
`;

const ServiceCard = ({ img, name = ' ', position = ' ', link = '#' }) => {
  return (
    <Item>
      <a href={link}>
        <ImageContainer>
          <img width={500} height={400} src={img} alt={name} />
        </ImageContainer>
        <Name>{name}</Name>
        <Position>{position}</Position>
      </a>
    </Item>
  );
};

const Team = () => {
  const { translations } = useLanguage(); // Use hook

  const services = [
    {
      img: img1,
      name: translations.service_1_title,
      position: translations.service_1_text,
      link: '/services/post-surgical-rehab',
    },
    {
      img: img2,
      name: translations.service_2_title,
      position: translations.service_2_text,
      link: '/services/sports-injury-rehab',
    },
    {
      img: img3,
      name: translations.service_3_title,
      position: translations.service_3_text,
      link: '/services/chronic-pain',
    },
    {
      img: img4,
      name: translations.service_4_title,
      position: translations.service_4_text,
      link: '/services/stemwave-shockwave',
    },
    {
      img: img5,
      name: translations.service_5_title,
      position: translations.service_5_text,
      link: '/services/alter-g',
    },
    {
      img: img6,
      name: translations.service_6_title,
      position: translations.service_6_text,
      link: '/services/gait-balance',
    },
    {
      img: img7,
      name: translations.service_7_title,
      position: translations.service_7_text,
      link: '/services/performance',
    },
    {
      img: img8,
      name: translations.service_8_title,
      position: translations.service_8_text,
      link: '/services/spine-posture',
    },
    {
      img: img9,
      name: translations.service_9_title,
      position: translations.service_9_text,
      link: '/services/work-injury',
    },
  ];

  return (
    <Section id="services">
    

      {/* Clickable title – send to main Services page */}
      <Title>
        {/* Updated for translation */}
        <a href="/services">{translations.title_what_we_do}</a>
      </Title>

      <Container>
        {/* Updated to map over the translated services array */}
        {services.map((service, index) => (
            <ServiceCard 
                key={index}
                img={service.img}
                name={service.name}
                position={service.position}
                link={service.link}
            />
        ))}
      </Container>
    </Section>
  );
};

export default Team;