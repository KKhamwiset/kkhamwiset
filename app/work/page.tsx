import React from "react";
import { Navbar } from "@/components";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-slate-300">
      <Navbar className="bg-transparent text-slate-100" />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-slate-50">Hey, I’m Kritsakorn</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            I’m a developer who likes building things that actually work in the real
            world. I care about clean logic, predictable behavior, and reducing effort
            for users.
          </p>
        </section>

        {/* What I do */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card bg-[#1E293B] border border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h2 className="card-title text-slate-100">Backend & APIs</h2>
              <p className="text-slate-400">
                I focus on backend logic, APIs, and system design. I prefer thinking
                through edge cases early instead of fixing bugs later.
              </p>
            </div>
          </div>

          <div className="card bg-[#1E293B] border border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h2 className="card-title text-slate-100">Databases</h2>
              <p className="text-slate-400">
                Comfortable with MongoDB, aggregation pipelines, filtering logic, and
                understanding performance trade-offs.
              </p>
            </div>
          </div>

          <div className="card bg-[#1E293B] border border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h2 className="card-title text-slate-100">Bots & Automation</h2>
              <p className="text-slate-400">
                I enjoy building bots and automation tools that handle messy user input
                and still behave predictably.
              </p>
            </div>
          </div>

          <div className="card bg-[#1E293B] border border-slate-700/50 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
              <h2 className="card-title text-slate-100">Code Philosophy</h2>
              <p className="text-slate-400">
                I value readability over cleverness. If future-me can understand it
                instantly, the code is good.
              </p>
            </div>
          </div>
        </section>

        {/* Tech */}
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-slate-100">Stuff I use</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Python</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">JavaScript</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">React</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">MongoDB</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Node.js</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Docker</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">REST APIs</span>
            <span className="badge badge-outline text-orange-400 border-orange-500/50 hover:bg-orange-400/10 transition-colors">Discord Bots</span>
          </div>
        </section>
      </main>
    </div>
  );
}
