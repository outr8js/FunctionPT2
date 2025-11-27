// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes and Route
import GlobalStyles from "./styles/GlobalStyles";
import { light } from "./styles/Themes";
import { ThemeProvider } from "styled-components";

import Navigation from "./components/Navigation";
import About from "./components/sections/About";
import Home from "./components/sections/Home";
import Roadmap from "./components/sections/Roadmap";
import Team from "./components/sections/Team";
import Footer from "./components/Footer";
import Showcase from "./components/sections/Showcase";
import Faq from "./components/sections/Faq";
import InsuranceSection from "./components/sections/InsuranceSection";
import Blog from "./components/sections/Blog"; 
import ScrollToTop from "./components/ScrollToTop";

import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider theme={light}>
        <GlobalStyles />
        
        {/* Navigation stays outside Routes so it appears on all pages */}
        <Navigation />

        <Routes>
          {/* The Main Landing Page - Groups all homepage sections */}
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Roadmap />
              <Showcase />
              <Team />
              <Faq />
              <InsuranceSection />
            </>
          } />

          {/* The Separate Blog Page */}
          <Route path="/blog" element={<Blog />} />
        </Routes>

        {/* Footer and ScrollToTop appear on all pages */}
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;