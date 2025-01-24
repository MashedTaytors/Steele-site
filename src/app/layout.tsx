import { IBM_Plex_Serif, Source_Code_Pro } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import { CookieConsentProvider } from "./context/cookie-consent-context";

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Resolve the cookies() Promise and access the theme cookie
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value || "dark";

  console.log("Server-side theme cookie:", theme);

  return (
    <html lang="en" data-theme={theme}>
      <head />
      <body
        className={`${ibmPlexSerif.variable} ${sourceCodePro.variable} antialiased min-h-screen flex flex-col w-full flex-grow items-center`}
      >
        <CookieConsentProvider>
          {children}

          {/* Cookie Consent Popup */}
          <CookieConsent />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
