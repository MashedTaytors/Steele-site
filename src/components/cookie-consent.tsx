'use client';

import React from "react";
import { useCookieConsent } from "@/app/context/cookie-consent-context";
import Cookies from "js-cookie";
import CookieIcon from '@mui/icons-material/Cookie';

export default function CookieConsent() {
  const { consent, setConsent, showPopup } = useCookieConsent();

  const handleAccept = () => {
    const updatedConsent = { essential: true, preferences: true };
    setConsent(updatedConsent);
    Cookies.set("cookieConsent", JSON.stringify(updatedConsent), { expires: 365 });
  };

  const handleDecline = () => {
    const updatedConsent = { essential: true, preferences: false };
    setConsent(updatedConsent);
    Cookies.set("cookieConsent", JSON.stringify(updatedConsent), { expires: 365 });
  };

  return (
    showPopup && !consent.preferences && ( 
      <div className="fixed flex justify-center bottom-0 left-0 right-0 bg-background text-foreground py-8">
        <div className="flex flex-row flex-wrap w-content justify-between gap-6">
          <div className="flex items-center flex-row gap-3">
            <CookieIcon /> 
            <p>I use cookies to remember your theme preference (like light or dark mode). No tracking, no funny business.</p>
          </div>
          <div className="flex flex-row gap-6">
            <button onClick={handleAccept} className="bg-paleLilac text-black px-4 py-2 rounded-md">
              Accept Cookies
            </button>
            <button onClick={handleDecline} className="border border-paleLilac text-buttonText px-4 py-2 rounded-md">
              Decline Cookies
            </button>
          </div>
        </div>
      </div>
    )
  );
}
