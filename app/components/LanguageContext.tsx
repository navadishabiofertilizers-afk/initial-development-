"use client";

import React, { createContext, useContext, useState } from "react";
import { Language, TRANSLATIONS, TranslationDictionary } from "../lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDictionary) => string | string[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "nava_disha_lang";

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "mr";
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Language | null;
    if (saved && (saved === "mr" || saved === "hi" || saved === "en")) {
      return saved;
    }
  } catch {
    // localStorage may be disabled or restricted
  }
  return "mr";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

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
