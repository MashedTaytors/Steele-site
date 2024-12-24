import React from "react";
import QRCodeGenerator from "@/components/QRCodeGenerator";

// TODO: Style and create a unique layout for /tools/
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-16 py-16">
      <main className="flex flex-col w-content md:gap-16 lg:gap-8">
      <h1 className="text-3xl font-ibmPlexSerif">QR Code Generator</h1>
        <QRCodeGenerator />
      </main>

    </div>
  );
}
