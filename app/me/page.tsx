import React from "react";
import { Navbar } from "@/components";

export default function MePage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hey, I’m Conde</h1>
          <p className="text-base-content/70 text-lg max-w-2xl">
            I’m a developer who likes building things that actually work in the real
            world. I care about clean logic, predictable behavior, and reducing effort
            for users.
          </p>
        </section>

        {/* About me */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">About me</h2>
          <p className="text-base-content/70 max-w-2xl">
            Outside of coding, I’m pretty chill. I like games that reward thinking,
            good stories, or just solid mechanics. Music is usually playing while I
            work — it helps me focus and sets the mood.
          </p>
        </section>

        {/* Games */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Games I play</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge">Single-player / story-driven</span>
            <span className="badge">Strategy & simulation</span>
            <span className="badge">Indie games</span>
            <span className="badge">Occasional competitive games</span>
          </div>
        </section>

        {/* Music */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Music I listen to</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline">Lo‑fi</span>
            <span className="badge badge-outline">Game OSTs</span>
            <span className="badge badge-outline">Rock</span>
            <span className="badge badge-outline">Electronic</span>
            <span className="badge badge-outline">Anything that fits the mood</span>
          </div>
        </section>

        {/* Personality */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How I think</h2>
          <ul className="list-disc list-inside text-base-content/70 space-y-2 max-w-2xl">
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
