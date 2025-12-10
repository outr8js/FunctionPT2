import React, { lazy, Suspense } from 'react'
import styled from 'styled-components'
// import Banner from './Banner'
import Logo from './Logo'

import Facebook from '../Icons/Facebook'
import Instagram from '../Icons/Instagram'
import Twitter from '../Icons/Twitter'
import LinkedIn from '../Icons/LinkedIn'
import Loading from './Loading'
import { useLanguage } from '../context/LanguageContext';

const Banner = lazy(() => import("./Banner"));

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${props => props.theme.body};
  position: relative;
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 90%;

    h1{
      font-size: ${props => props.theme.fontxxxl};
    }
  }
`

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 48em) {
    width: 100%;
    align-items: flex-start;
  }
`

const IconList = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  & > * {
    padding-right: 0.5rem;
    transition: all 0.2s ease;

    &:hover{
      transform: scale(1.2);
    }
  }
`

const ContactInfo = styled.div`
  font-size: ${props => props.theme.fontxs};
  line-height: 1.5;
  margin-top: 0.5rem;

  p {
    margin: 0.1rem 0;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  @media (max-width: 48em) {
    margin-top: 0.75rem;
  }
`

const MenuItems = styled.ul`
  list-style:none;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 48em) {
    display: none;
  }
`

const Item = styled.li`
  width: fit-content;
  cursor: pointer;

  &::after{
    content: ' ';
    display: block;
    width: 0%;
    height: 2px;
    background: ${props => props.theme.text};
    transition: width 0.3s ease;
  }
  &:hover::after{
    width: 100%;
  }
`

const Bottom = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a{
    text-decoration:underline;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    width: 100%;

    span{
      margin-bottom: 1rem;
    }
  }
`

const Footer = () => {
  const { translations } = useLanguage();

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    })
  }

  return (
    <Section>
      <Suspense fallback={<Loading />}>
        <Banner />
      </Suspense>

      <Container>
        <Left>
          <Logo />
          <IconList>
            <a
              href="http://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com//"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
            >
              <Instagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
            >
              <Twitter />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
            >
              <LinkedIn />
            </a>
          </IconList>

          <ContactInfo>
            <p><strong>Function in Motion Physical Therapy PC</strong></p>
            <p>206 E. 163rd St.</p>
            <p>Bronx, NY 10451</p>
            <p>
              <strong>{translations.footer_phone}</strong>{' '}
              <a href="tel:17189425133">
                (718) 942-5133
              </a>
            </p>
            <p>
              <strong>{translations.footer_hours}</strong>
            </p>
            <p>{translations.footer_hours_mf}</p>
            <p>{translations.footer_hours_sat}</p>
            <p>{translations.footer_hours_sun}</p>
          </ContactInfo>
        </Left>

        <MenuItems>
          <Item onClick={() => scrollTo('home')}>{translations.nav_home}</Item>
          <Item onClick={() => scrollTo('about')}>{translations.nav_about}</Item>
          <Item onClick={() => scrollTo('roadmap')}>{translations.nav_roadmap}</Item>
          <Item onClick={() => scrollTo('showcase')}>{translations.nav_showcase}</Item>
          <Item onClick={() => scrollTo('services')}>{translations.nav_service}</Item>
          <Item onClick={() => scrollTo('faq')}>{translations.nav_faq}</Item>
          <Item onClick={() => scrollTo('insurance')}>{translations.nav_insurance}</Item>
        </MenuItems>
      </Container>

      <Bottom>
        <span>
          &copy; {new Date().getFullYear()} Function in Motion Physical Therapy PC. {translations.footer_all_rights_reserved}
        </span>
        <span>
         
          <a
            href="https://.com/about"
            target="_blank"
            rel="dofollow noreferrer"
          >
        
          </a>
        </span>
      </Bottom>
    </Section>
  )
}

export default Footer