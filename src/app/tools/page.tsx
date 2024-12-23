import Footer from "@/components/footer";
import React from "react";
import Link from "next/link";


export default function Tools() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-16 py-16">
      <main className="flex flex-col w-content md:flex-row gap-16 lg:gap-8 ">
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h1 className="text-3xl font-ibmPlexSerif text-primaryText font-semibold md:text-3xl lg:text-4xl">Tools</h1>
          <h2 className="text-xl font-sourceCodePro text-primaryText md:text-2xl ">Testing...</h2>
          <Link href="/tools/qr-code-generator"> QR Code Generator</Link>
        </div>

        <div className="flex flex-col gap-3 leading-relaxed text-base font-sourceCodePro text-secondaryText w-full md:w-1/2">
          <p>
            I am a dedicated and detail-oriented Web Developer with expertise in both front and back-end development. With a background in Digital Marketing Technology and a minor in Computer Science, I combine technical knowledge with marketing insight to deliver web solutions that are not only functional but also optimized for performance and SEO.
          </p>
          <p>
            I thrive in collaborative environments, consistently working cross-functionally to ensure projects are delivered on time and to a high standard.
          </p>
          <p>
            I am adept at adapting to new tools and technologies, which enables me to remain competitive in Sdynamic work environments. My skill set is complemented by strong interpersonal attributes such as adaptability, self-motivation, and emotional intelligence, making me a reliable and accountable team member.
          </p>
        
        
        </div>



      </main>

    </div>
  );
}
