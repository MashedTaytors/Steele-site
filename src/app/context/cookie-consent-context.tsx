'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

interface CookieConsentContextType {
  consent: {
    essential: boolean;
    preferences: boolean;
  };
  setConsent: (consent: { essential: boolean; preferences: boolean }) => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState({
    essential: true,
    preferences: false,
  });

  useEffect(() => {
    const storedConsent = Cookies.get("cookieConsent");
    if (storedConsent) {
      setConsent(JSON.parse(storedConsent));
    }
  }, []);

  const updateConsent = (newConsent: { essential: boolean; preferences: boolean }) => {
    Cookies.set("cookieConsent", JSON.stringify(newConsent), { expires: 365 });
    setConsent(newConsent);
  };

  return (
    <CookieConsentContext.Provider value={{ consent, setConsent: updateConsent }}>
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within a CookieConsentProvider");
  }
  return context;
};
