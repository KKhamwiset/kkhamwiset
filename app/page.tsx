import Link from "next/link";
import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content flex items-center justify-center px-4">
      {/* Center Container */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center gap-12">

        {/* Header / Name */}
        <header className="space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Kritsakorn Khamwiset
          </h1>
          <p className="text-base-content/70 text-lg">
            Developer · Cybersecurity Learner · Builder
          </p>
        </header>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Link href='/me' className="btn btn-outline btn-lg gap-2"
          >
            🎧
            <span>Who I Am</span>
          </Link>

          <Link href='/work' className="btn btn-outline btn-lg gap-2">
            🧠
            <span>What I Do</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
