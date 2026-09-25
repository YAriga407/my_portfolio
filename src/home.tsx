import React from "react";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Home() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <span className="brand-mark">YA</span>
          <span className="brand-name">Yuma Ariga</span>
        </div>

        <nav className="main-nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="talk-button">
          Let&apos;s talk
        </a>
      </header>

      <main className="content">
        <section className="hero">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            MECHANICAL ENGINEERING STUDENT
          </p>

          <h1>Yuma Ariga</h1>

          <p className="intro">
            Nice to meet you — My name is Yuma, a junior studying mechanical
            engineering at Purdue University.
            <br />
            Feel free to take a look around this website.
          </p>

          <div className="cta-row">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a href="#about" className="secondary-button">
              Read about me
            </a>
          </div>
        </section>

        <section id="education" className="info-panel">
          <div className="info-line">
            <div className="info-meta">01 — EDUCATION</div>
            <div className="info-title">Purdue University</div>
            <div className="info-date">2024 – 2028</div>
          </div>

          <div className="info-line lower-line">
            <div className="info-title">Marist Brothers International School</div>
            <div className="info-date">2020 – 2024</div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy">
            <p className="section-tag">02 — About</p>
            <h2>My Life, in Motion.</h2>
          </div>

          <div className="about-text">
            <p>
              Hello there!
              <br />
              My background is defined by constant movement. I find myself going
              back and forth between Japan and the United States. I am currently
              in the US for college pursuing a career in mechanical engineering.
              <br />
              Growing up between Japan and the US taught adaptability, and
              participating in hands-on projects taught me how to think like an
              engineer. Today, I combine those experiences to tackle challenges.
            </p>
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-tag">03 — Projects</div>
          <div className="project-list">
            <article className="project-card dark">
              <h3>Design for Manufacturing</h3>
              <p>
                CAD-driven product development and rapid prototyping for a student
                engineering challenge.
              </p>
            </article>
            <article className="project-card light">
              <h3>Mechanical Systems</h3>
              <p>
                Iterative design work focused on functionality, precision, and
                testing across real-world constraints.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-card">
          <div className="section-tag">04 — Contact</div>
          <h2>Contact Me</h2>
          <div className="contact-actions">
            <a href="mailto:yumaariga00@gmail.com" className="primary-button contact-button">
              Start a conversation
            </a>
            <span>yumaariga00@gmail.com<br />513-716-2423</span>
          </div>
        </section>
      </main>
    </div>
  );
}
