import React from 'react';
import { Accordion, Carousel, Header, Footer, ScrollTimeline, FadeIn } from '@/components';


export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
      <ScrollTimeline />
      <Header />

      {/* Hero Section */}
      <main className="pt-32 pb-20 px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-8 border-t border-white/20 pt-8">

          {/* Left Column: Role/Title */}
          <div className="lg:col-span-8 flex flex-col justify-between min-h-[60vh]">
            <FadeIn delay={0.1}>
              <h1 className="text-[12vw] leading-[0.85] font-black tracking-tighter uppercase wrap-break-words">
                All<br />
                about<br />
                <span className="text-orange-500">me</span><br />
              </h1>
            </FadeIn>
            <FadeIn delay={0.3} className="mt-12 max-w-xl">
              <p className="text-xl sm:text-2xl font-light leading-snug text-neutral-400">
                I'm a passionate developer based in Bangkok, dedicated to building digital experiences that merge form and function. My work is driven by a curiosity for new technologies and a commitment to clean, efficient code. Welcome to my personal portfolio.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Details & Carousel */}
          <div className="lg:col-span-4 flex flex-col  justify-center gap-20 items-start lg:items-end">

            {/* Image Carousel */}
            <FadeIn delay={0.5} className="w-full h-64 lg:h-80 mb-8">
              <Carousel />
            </FadeIn>

            {/* Stats / Info */}
            <FadeIn delay={0.7} className="grid grid-cols-1 gap-8 w-full border-t border-white/20 pt-8 lg:border-t-0 lg:pt-0">
              <div>
                <span className="block text-xs text-neutral-500 uppercase tracking-widest mb-2">Location</span>
                <span className="text-lg font-medium">Bangkok, TH</span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* About Section (Accordion) */}
        <div className="flex flex-col items-center justify-center mt-32 max-w-4xl mx-auto w-full">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold uppercase tracking-tight">If you came to connect via playing games</h2>
          </FadeIn>
          <div className="flex flex-col gap-4 w-full">
            <FadeIn delay={0.2}>
              <Accordion title="Karuta" index="01">
                <p>I'm an avid collector in Karuta, where I enjoy the thrill of trading and curating a unique card collection. It's more than just a game; it's a vibrant community where I connect with fellow enthusiasts, strategize on market values, and showcase my favorite anime characters.</p>
              </Accordion>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Accordion title="Arknights" index="02">
                <p>Arknights captivates me with its intricate tower defense gameplay and deep, dystopian lore. I spend hours optimizing strategies for high-difficulty stages and appreciating the stunning character art. It's a test of patience and tactical foresight.</p>
              </Accordion>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Accordion title="World of Warships" index="03">
                <b>In game name : GloryAvdotya (Asia) </b>
                <p>Commanding naval vessels in World of Warships allows me to exercise strategic thinking on a grand scale. Whether it's coordinating with teammates or calculating ballistics, the game offers a challenging and rewarding experience that demands situational awareness and teamwork.</p>
              </Accordion>
            </FadeIn>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
