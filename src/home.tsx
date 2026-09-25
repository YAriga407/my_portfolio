import React from "react";

const navLinks = [
  { label: "Education", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "3", label: "Year Student" },
  { value: "10+", label: "CAD Designed" },
  { value: "02", label: "Tools Mastered" },
  { value: "03", label: "Projects" },
];

const skills = [
  "Product design",
  "Design systems",
  "Topology",
  "Prototyping",
  "Motion",
];

export default function Home() {
  return (
    <div
      className="relative min-h-screen overflow-hidden text-black"
      style={{ background: "linear-gradient(to bottom, #fed7bf, #facdb1)" }}
    >
      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-400/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[55%] -right-40 h-[420px] w-[420px] rounded-full bg-indigo-400/20 blur-[120px]"
        aria-hidden="true"
      />

      {/* Header Navigation */}
      <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="flex items-center gap-2.5">
          <span
            className="grid size-8 place-items-center rounded-lg text-sm font-semibold text-black ring-1 ring-black/10"
            style={{ backgroundColor: "#fac1b1" }}
          >
            YA
          </span>
          <span className="text-sm font-medium tracking-tight text-black">
            Yuma Ariga
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-black transition-opacity hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-black ring-1 ring-black/10 backdrop-blur-md transition-colors hover:bg-white/30"
        >
          Let's talk
        </a>
      </header>

      {/* Main Content */}
      <main className="relative mx-auto max-w-6xl px-6">
        {/* Hero Section */}
        <section className="pt-14 pb-28 sm:pt-20">
          <p className="mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em] text-white">
            <span className="inline-block size-1.5 rounded-full bg-purple-600" aria-hidden="true" />
            MECHANICAL ENGINEERING STUDENT
          </p>
          <h1 className="max-w-[40ch] text-5xl font-bold leading-tight text-black sm:text-6xl lg:text-7xl">
            Yuma Ariga
          </h1>
          <p className="mt-8 max-w-[48ch] text-base leading-relaxed text-black sm:text-lg">
            Nice to meet you — My name is Yuma, a junior studying mechanical
            engineering at Purdue University.
            <br />
            Feel free to take a look around this website.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#000052" }}
            >
              View Projects
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black ring-1 ring-black/10 transition-colors hover:bg-white/90"
            >
              Read about me
            </a>
          </div>
        </section>

        {/* Education Section */}
        <section id="work" className="scroll-mt-24 pb-28">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white">
                01 — EDUCATION
              </p>
              <h2 className="mt-3 text-3xl font-bold text-black">
                Purdue University
              </h2>
            </div>
            <span className="hidden text-sm text-black sm:block">
              2024 – 2028
            </span>
          </div>

          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="mt-3 text-3xl font-bold text-black">
                Marist Brothers International School
              </h2>
            </div>
            <span className="hidden text-sm text-black sm:block">
              2020 – 2024
            </span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24 border-t border-black/10 py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-white">
                02 — About
              </p>
              <h2 className="mt-3 text-3xl font-bold text-black">
                My Life, in Motion.
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-black sm:text-lg">
                Hello there!
                <br />
                My background is defined by constant movement. I find myself
                going back and forth between Japan and the United States. I am
                currently in the US for college pursuing a career in mechanical
                engineering.
                <br />
                Growing up between Japan and the US taught adaptability, and
                participating in hands-on projects taught me how to think like
                an engineer. Today, I combine those experiences to tackle
                challenges.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-black">{stat.value}</p>
                    <p className="mt-1 text-sm text-black">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/20 px-3 py-1.5 text-sm text-black ring-1 ring-black/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative scroll-mt-24 pb-16">
          <div
            className="overflow-hidden rounded-[28px] p-10 ring-1 ring-black/10 sm:p-16"
            style={{
              background: "linear-gradient(to bottom right, #c9b8a3, #b8a68f)",
            }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white">
              03 — Contact
            </p>
            <h2 className="mt-4 text-4xl font-bold text-black sm:text-5xl">
              Contact Me
            </h2>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:yumaariga00@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#000052" }}
              >
                Start a conversation
              </a>
              <span className="text-sm text-black">
                yumaariga00@gmail.com
                <br />
                513-716-2423
              </span>
            </div>
          </div>

          <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-black/10 pt-8 text-sm text-black sm:flex-row sm:items-center">
            <span>© 2026 Yuma Ariga</span>
            <div className="flex gap-6">
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                Dribbble
              </a>
              <a href="https://read.cv" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                Resume
              </a>
              <a href="https://www.linkedin.com/in/yumaariga" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
                LinkedIn
              </a>
            </div>
          </footer>
        </section>
      </main>
    </div>
  );
}
