import React, { createContext, useState, useContext } from 'react';
import { EN, ES } from '../data/translations';

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('EN');
  const translations = lang === 'EN' ? EN : ES;

  const toggleLanguage = () => {
    setLang(currentLang => (currentLang === 'EN' ? 'ES' : 'EN'));
  };

  return (
    <LanguageContext.Provider value={{ lang, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};