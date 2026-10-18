"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, TRANSLATIONS, TranslationDictionary } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDictionary) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "nava_disha_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Always initialize with default "mr" to ensure server render and initial client render match perfectly
  const [language, setLanguageState] = useState<Language>("mr");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (saved && (saved === "mr" || saved === "hi" || saved === "en") && saved !== "mr") {
        setTimeout(() => {
          setLanguageState(saved);
        }, 0);
      }
    } catch {
      // localStorage may be disabled or restricted
    }
  }, []);

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore
    }
  };

  const t = (key: keyof TranslationDictionary): string | string[] => {
    const dict = TRANSLATIONS[language] || TRANSLATIONS.mr;
    return dict[key] ?? TRANSLATIONS.mr[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
