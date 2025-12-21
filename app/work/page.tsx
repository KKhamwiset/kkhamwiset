import React from "react";
import { Navbar } from "@/components";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Hey, I’m Kritsakorn</h1>
          <p className="text-base-content/70 text-lg max-w-2xl">
            I’m a developer who likes building things that actually work in the real
            world. I care about clean logic, predictable behavior, and reducing effort
            for users.
          </p>
        </section>

        {/* What I do */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Backend & APIs</h2>
              <p className="text-base-content/70">
                I focus on backend logic, APIs, and system design. I prefer thinking
                through edge cases early instead of fixing bugs later.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Databases</h2>
              <p className="text-base-content/70">
                Comfortable with MongoDB, aggregation pipelines, filtering logic, and
                understanding performance trade-offs.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Bots & Automation</h2>
              <p className="text-base-content/70">
                I enjoy building bots and automation tools that handle messy user input
                and still behave predictably.
              </p>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h2 className="card-title">Code Philosophy</h2>
              <p className="text-base-content/70">
                I value readability over cleverness. If future-me can understand it
                instantly, the code is good.
              </p>
            </div>
          </div>
        </section>

        {/* Tech */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Stuff I use</h2>
          <div className="flex flex-wrap gap-2">
            <span className="badge badge-outline">Python</span>
            <span className="badge badge-outline">JavaScript</span>
            <span className="badge badge-outline">React</span>
            <span className="badge badge-outline">MongoDB</span>
            <span className="badge badge-outline">Node.js</span>
            <span className="badge badge-outline">Docker</span>
            <span className="badge badge-outline">REST APIs</span>
            <span className="badge badge-outline">Discord Bots</span>
          </div>
        </section>
      </main>
    </div>
  );
}
