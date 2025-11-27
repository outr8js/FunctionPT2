// src/components/Navigation.js
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";
import { useLanguage } from "../context/LanguageContext";
import { useNavigate, useLocation } from "react-router-dom"; // Imported for navigation logic

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

    transform: ${(props) =>
      props.click ? "translateY(0)" : "translateY(1000%)"};
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
  width: ${(props) => (props.click ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.click
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
    width: ${(props) => (props.click ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.click ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.click ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.click ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const [click, setClick] = useState(false);
  const { lang, translations, toggleLanguage } = useLanguage();
  
  // Hooks for navigation logic
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (id) => {
    setClick(false); // Close mobile menu first

    // 1. Handle "Blog" link specifically
    if (id === "blog") {
      navigate("/blog");
      return;
    }

    // 2. If we are currently on the Blog page and want to go to a homepage section (like 'about')
    if (location.pathname !== "/") {
      navigate("/");
      // Scroll after a slight delay to allow the homepage to load
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

    // 3. Standard scroll behavior if we are already on the homepage
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />

        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          &nbsp;
        </HamburgerMenu>

        <Menu click={click}>
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
          
          {/* Blog Menu Item Added Here */}
          <MenuItem onClick={() => handleMenuClick("blog")}>
            {translations.nav_blog}
          </MenuItem>

          <MenuItem onClick={() => handleMenuClick("faq")}>
            {translations.nav_faq}
          </MenuItem>
          <MenuItem onClick={() => handleMenuClick("insurance")}>
            {translations.nav_insurance}
          </MenuItem>

          {/* Mobile language toggle */}
          <LanguageToggle onClick={toggleLanguage} className="mobile">
            {lang === "EN" ? "ESPAÑOL" : "ENGLISH"}
          </LanguageToggle>

          {/* Mobile Contact button – opens Google Form in new tab */}
          <MenuItem>
            <div className="mobile">
              <Button
                text={translations.btn_contact_us}
                link="https://forms.gle/oV7zH8yWXMQGRusZ7"
                newTab={true}
              />
            </div>
          </MenuItem>
        </Menu>

        {/* Desktop language toggle */}
        <LanguageToggle onClick={toggleLanguage} className="desktop">
          {lang === "EN" ? "ES" : "EN"}
        </LanguageToggle>

        {/* Desktop Contact button – opens Google Form in new tab */}
        <div className="desktop">
          <Button
            text={translations.btn_contact_us}
            link="https://forms.gle/oV7zH8yWXMQGRusZ7"
            newTab={true}
          />
        </div>
      </NavBar>
    </Section>
  );
};

export default Navigation;