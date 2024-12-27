import { IBM_Plex_Serif, Source_Code_Pro } from "next/font/google";
import { cookies } from 'next/headers';
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-serif",
  display: "swap", //swap the css versions of the font with the next/font version - this allows for tailwind declaration
});

const sourceCodePro = Source_Code_Pro({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Access cookies during SSR
  const cookieStore = await cookies();
  // Log the cookie value to the server console
  const theme = cookieStore.get('theme')?.value || 'light'; // Default to 'light' if cookie is not present

  console.log('Server-side theme cookie:', theme);

  return (
    <html lang="en" data-theme={theme}>
      <head>
      </head>
      <body className={`${ibmPlexSerif.variable} ${sourceCodePro.variable} antialiased min-h-screen flex flex-col w-full items-center`}>
          {children}
      </body>
    </html>
  );
}