import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col md:flex-row w-full gap-16 lg:px-96 gap-8 ">
        <div className="flex flex-col gap-3 w-full md:w-1/2">
          <h1 className="text-3xl font-ibmPlexSerif sm:text-4xl lg:text-5xl">Taylor Steele</h1>
          <h2 className="text-xl font-sourceCodePro sm:text-2xl">Dynamic Web Professional</h2>
          <p className="font-sourceCodePro sm:pr-20 lg:pr-48">
            Experienced Web Developer delivering innovative and reliable digital solutions.
          </p>
        </div>

        <div className="flex flex-col gap-3 font-sourceCodePro w-full md:w-1/2">
          <p>
            I am a dedicated and detail-oriented Web Developer with expertise in both front and back-end development. With a background in Digital Marketing Technology and a minor in Computer Science, I combine technical knowledge with marketing insight to deliver web solutions that are not only functional but also optimized for performance and SEO.
          </p>
          <p>
            I thrive in collaborative environments, consistently working cross-functionally to ensure projects are delivered on time and to a high standard.
          </p>
          <p>
            I am adept at adapting to new tools and technologies, which enables me to remain competitive in dynamic work environments. My skill set is complemented by strong interpersonal attributes such as adaptability, self-motivation, and emotional intelligence, making me a reliable and accountable team member.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
