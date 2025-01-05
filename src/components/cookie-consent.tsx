'use client';
// TODO: prevent consent banner flash on decline
import React, { useEffect, useState } from "react";
import { useCookieConsent } from "@/app/context/cookie-consent-context";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const { consent, setConsent } = useCookieConsent();
  const [showPopup, setShowPopup] = useState(!consent.preferences);


   // Check if consent already exists on mount
   useEffect(() => {
    const storedConsent = Cookies.get("cookieConsent");
    if (!storedConsent) {
      setShowPopup(true); // Show popup if no consent exists
    } else {
      const parsedConsent = JSON.parse(storedConsent);
      if (JSON.stringify(parsedConsent) !== JSON.stringify(consent)) {
        // Sync only if consent is different
        setConsent(parsedConsent);
      }
      setShowPopup(false); // Hide popup if consent exists
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run only once on mount

  const handleAccept = () => {
    const updatedConsent = { essential: true, preferences: true };
    setConsent(updatedConsent);
    Cookies.set("cookieConsent", JSON.stringify(updatedConsent), { expires: 365 });
    setShowPopup(false);
  };

  const handleDecline = () => {
    const updatedConsent = { essential: true, preferences: false };
    setConsent(updatedConsent);
    Cookies.set("cookieConsent", JSON.stringify(updatedConsent), { expires: 365 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed flex justify-center bottom-0 left-0 right-0 bg-background text-foreground py-8">
        <div className="flex flex-row flex-wrap w-content justify-between gap-6">
            <p>I use a cookie to manage theme toggling. Manage your preferences below.</p>
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
