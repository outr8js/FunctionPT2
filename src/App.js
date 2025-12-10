// src/App.js
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import { light, dark } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import ContactPage from "./components/ContactPage";
import InsuranceSection from "./components/sections/InsuranceSection";
import Blog from "./components/sections/Blog";
import ScrollToTop from "./components/ScrollToTop";

import { LanguageProvider } from "./context/LanguageContext";
import styled from "styled-components";
import FloatingContactCTA from "./components/FloatingContactCTA";

const ThemeToggleButton = styled.button`
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  z-index: 999;
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.text};
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 0.875rem;
  cursor: pointer;
  backdrop-filter: blur(6px);

  &:hover {
    opacity: 0.8;
  }
`;

function App() {
  // Default to the 'light' theme object by starting with 'dark' mode here.
  const [themeMode, setThemeMode] = useState("dark");

  const isLightBackground = themeMode === "light";
  const currentTheme = isLightBackground ? dark : light;

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <LanguageProvider>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles />
        <ThemeToggleButton onClick={toggleTheme}>
          {isLightBackground ? "Dark mode" : "Light mode"}
        </ThemeToggleButton>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Roadmap />
                <Showcase />
                <Team />
                <Faq />
                <InsuranceSection />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <FloatingContactCTA />
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;