import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }
    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);

    /* Transient Prop Fix: Changed props.click to props.$click */
    transform: ${(props) =>
      props.$click ? "translateY(0)" : "translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;

    touch-action: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const LanguageToggle = styled(MenuItem)`
  margin: 0 0.5rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid ${(props) => props.theme.text};
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
    &::after {
      width: 0%;
    }
  }

  @media (max-width: 64em) {
    border: none;
    background: none;
    margin: 1rem 0;
    padding: 0;
    font-size: ${(props) => props.theme.fontxl};
    font-weight: 400;

    &:hover {
      background: none;
      color: ${(props) => props.theme.text};
    }
  }
`;

const HamburgerMenu = styled.span`
  /* Transient Prop Fix: Changed props.click to props.$click */
  width: ${(props) => (props.$click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.$click
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  &::after,
  &::before {
    content: " ";
    /* Transient Prop Fix: Changed props.click to props.$click */
    width: ${(props) => (props.$click ? "1rem" : "1.5rem")};
    right: ${(props) => (props.$click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    /* Transient Prop Fix: Changed props.click to props.$click */
    top: ${(props) => (props.$click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.$click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    /* Transient Prop Fix: Changed props.click to props.$click */
    bottom: ${(props) => (props.$click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.$click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);
  const { lang, translations, toggleLanguage } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (id) => {
    setClick(false);

    if (id === "blog") {
      navigate("/blog");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        }
      }, 100);
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handleContactClick = () => {
    setClick(false);
    if (location.pathname !== "/contact") {
      navigate("/contact");
      window.scrollTo({ top: 0 });
    }
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />

        {/* Transient Prop Fix: Changed click={click} to $click={click} */}
        <HamburgerMenu $click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        {/* Transient Prop Fix: Changed click={click} to $click={click} */}
        <Menu $click={click}>
          <MenuItem onClick={() => handleMenuClick("home")}>
            {translations.nav_home}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("about")}>
            {translations.nav_about}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("roadmap")}>
            {translations.nav_roadmap}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("showcase")}>
            {translations.nav_showcase}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("services")}>
            {translations.nav_service}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("blog")}>
            {translations.nav_blog}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("faq")}>
            {translations.nav_faq}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("insurance")}>
            {translations.nav_insurance}
          </MenuItem>

          <LanguageToggle onClick={toggleLanguage} className="mobile">
            {lang === "EN" ? "ESPAÑOL" : "ENGLISH"}
          </LanguageToggle>

          {/* Mobile contact button → /contact */}
          <MenuItem onClick={handleContactClick}>
            <div className="mobile">
              <Button text={translations.btn_contact_us} />
            </div>
          </MenuItem>
        </Menu>

        <LanguageToggle onClick={toggleLanguage} className="desktop">
          {lang === "EN" ? "ES" : "EN"}
        </LanguageToggle>

        {/* Desktop contact button → /contact */}
        <div className="desktop" onClick={handleContactClick}>
          <Button text={translations.btn_contact_us} />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;