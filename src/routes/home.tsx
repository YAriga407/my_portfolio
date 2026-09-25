import { A } from "@solidjs/router";
import HeaderPage from "./header-page";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <A href="/header-page">
            <h2>Your Name</h2>
          </A>
          <div class="nav-links">
            <a href="#about">About</a>
            <A href="/projects">Projects</A>
            <A href="/education">Education</A>
            <a href="#skills">Skills</a>
            <A href="/contact">Contact</A>
          </div>
        </nav>
      </header>

      <main>
        <section class="hero">
          <div>
            <p class="eyebrow">Hello, I am</p>
            <h1>Your Name</h1>
            <h2>Web Developer</h2>
            <p>
              I build clean, useful, and responsive websites and applications.
            </p>
            <A class="button" href="/projects">View my work</A>
          </div>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            Write a short introduction about yourself, your background, and what
            kind of work you enjoy.
          </p>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <div class="project-grid">
            <article class="project-card">
              <h3>Project One</h3>
              <p>Describe what you built, which technologies you used, and what you learned.</p>
              <a href="https://github.com/" target="_blank">View on GitHub</a>
            </article>

            <article class="project-card">
              <h3>Project Two</h3>
              <p>Describe another project, application, website, or achievement.</p>
              <a href="https://github.com/" target="_blank">View on GitHub</a>
            </article>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <ul class="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git and GitHub</li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Interested in working together? Reach out to me.</p>
          <a class="button" href="mailto:your-email@example.com">Email me</a>
        </section>
      </main>

      <footer>
        <p>© 2026 Your Name</p>
      </footer>
    </>
  );
}
