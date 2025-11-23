export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-orange-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-400/20 via-slate-900/0 to-slate-900/0 dark:from-orange-500/20"></div>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col-reverse md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500">
                Hello, I'm Kritsakorn Khamwiset
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                A passionate developer crafting beautiful and functional digital experiences. I turn ideas into reality with code.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all shadow-lg hover:shadow-orange-500/25"
                >
                  Get in Touch
                </a>
                <a
                  href="#skills"
                  className="px-8 py-3 rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all font-medium"
                >
                  View Skills
                </a>
              </div>
            </div>

            {/* Avatar Placeholder */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden border-4 border-white dark:border-slate-950 shadow-xl">
                <span className="text-6xl text-orange-600 dark:text-orange-500">K</span>
                {/* <img src="/your-image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">About Me</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300">
            <p>
              I am a dedicated software engineer with a love for clean code and user-centric design.
              My journey began with a curiosity for how things work on the web, and it has evolved into a career
              building robust applications.
            </p>
            <p className="mt-4">
              When I'm not coding, you can find me exploring new technologies, contributing to open source,
              or enjoying a good cup of coffee while reading about the latest tech trends.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Git', 'UI/UX Design'].map((skill) => (
              <div
                key={skill}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/50 transition-colors shadow-sm hover:shadow-md text-center group"
              >
                <span className="font-semibold group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              <span className="font-medium">GitHub</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              <span className="font-medium">LinkedIn</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              <span className="font-medium">Twitter</span>
            </a>
            <a href="mailto:hello@example.com" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
              <span className="font-medium">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} KKhamwiset. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
