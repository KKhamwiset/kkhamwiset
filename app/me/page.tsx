import React from "react";
import { Navbar } from "@/components";

export default function MePage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300">
      <Navbar className="bg-transparent text-slate-100" />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-50">Hey, I’m Conde</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            I’m a developer who likes building things that actually work in the real
            world. I care about clean logic, predictable behavior, and reducing effort
            for users.
          </p>
        </section>

        {/* About me */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">About me</h2>
          <p className="text-slate-400 max-w-2xl">
            Outside of coding, I’m pretty chill. I like games that reward thinking,
            good stories, or just solid mechanics. Music is usually playing while I
            work — it helps me focus and sets the mood.
          </p>
        </section>

        {/* Games */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">Games I play</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Single-player / story-driven</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Strategy & simulation</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Indie games</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Occasional competitive games</span>
          </div>
        </section>

        {/* Music */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">Music I listen to</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Lo‑fi</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Game OSTs</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Rock</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Electronic</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Anything that fits the mood</span>
          </div>
        </section>

        {/* Personality */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">How I think</h2>
          <ul className="list-disc list-inside text-slate-400 space-y-2 max-w-2xl marker:text-orange-500">
            <li>I prefer simple solutions that actually work</li>
            <li>I care a lot about user experience, even for small tools</li>
            <li>I like learning by building, not just reading</li>
            <li>I’m calm, but I get locked in when something is interesting</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
