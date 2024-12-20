import React from "react";
import Footer from "@/components/footer";
import QRCodeGenerator from "@/components/QRCodeGenerator";

// TODO: Style
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-16 py-16">

      <main className="flex flex-col w-content md:flex-row gap-16 lg:gap-8 ">
        <QRCodeGenerator />
      </main>

      <Footer />

    </div>
  );
}
