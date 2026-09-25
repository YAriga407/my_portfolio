import { Link } from "react-router-dom";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="page-shell" style={{ background: "linear-gradient(to bottom, #efd7cc, #f1d3c0)", color: "#111111" }}>
      <Header />

      <main className="content" style={{ maxWidth: "1320px", margin: "0 auto", padding: "2rem 2.5rem 0" }}>
        <section className="hero" style={{ paddingTop: "5rem", paddingBottom: "5rem" }}>
          <p className="eyebrow" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", margin: "0 0 1.2rem", fontSize: "0.72rem", letterSpacing: "0.34em", textTransform: "uppercase", color: "#111111", fontWeight: "600" }}>
            <span
              className="eyebrow-dot"
              style={{
                width: "0.55rem",
                height: "0.55rem",
                borderRadius: "50%",
                background: "#5d4b8f",
                display: "inline-block",
              }}
              aria-hidden="true"
            />
            MECHANICAL ENGINEERING STUDENT
          </p>

          <h1 style={{ fontSize: "clamp(4.2rem, 7vw, 10rem)", lineHeight: "0.92", letterSpacing: "-0.07em", margin: "0", fontWeight: "500" }}>
            Yuma Ariga
          </h1>

          <p
            className="intro"
            style={{
              maxWidth: "52rem",
              marginTop: "2rem",
              fontSize: "clamp(1.15rem, 2vw, 1.8rem)",
              lineHeight: "1.45",
              letterSpacing: "-0.03em",
              color: "#111111",
            }}
          >
            Nice to meet you — My name is Yuma, a junior studying mechanical engineering at Purdue University.
            <br />
            Feel free to take a look around this website.
          </p>

          <div className="cta-row" style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1.1rem" }}>
            <Link
              to="/projects"
              className="primary-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "3.3rem",
                padding: "0.9rem 1.7rem",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "opacity 0.2s ease",
                background: "#1f2b67",
                color: "#ffffff",
                border: "none",
              }}
            >
              View Projects
            </Link>
            <a
              href="#about"
              className="secondary-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "3.3rem",
                padding: "0.9rem 1.7rem",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "opacity 0.2s ease",
                background: "rgba(255, 255, 255, 0.9)",
                color: "#111111",
                border: "1px solid rgba(17, 17, 17, 0.1)",
              }}
            >
              Read about me
            </a>
          </div>
        </section>

        <section
          id="education"
          style={{
            padding: "2.4rem 0 3rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
              padding: "1.2rem 0 0.5rem",
              borderTop: "1px solid rgba(17, 17, 17, 0.08)",
            }}
          >
            <div>
              <p style={{ margin: "0 0 0.5rem", fontSize: "0.73rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#111111", fontWeight: "600" }}>
                01 — EDUCATION
              </p>
              <h3 style={{ margin: "0", fontSize: "clamp(2.2rem, 3vw, 3.5rem)", lineHeight: "1.04", letterSpacing: "-0.05em", fontWeight: "500" }}>
                Purdue University
              </h3>
              <p style={{ fontSize: "1.05rem", color: "#111111", opacity: "0.8" }}>2024 – 2028</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1.5rem",
              padding: "1.2rem 0 0.5rem",
              borderTop: "1px solid rgba(17, 17, 17, 0.08)",
            }}
          >
            <div>
              <h3 style={{ margin: "0", fontSize: "clamp(2.2rem, 3vw, 3.5rem)", lineHeight: "1.04", letterSpacing: "-0.05em", fontWeight: "500" }}>
                Marist Brothers International School
              </h3>
              <p style={{ fontSize: "1.05rem", color: "#111111", opacity: "0.8" }}>2020 – 2024</p>
            </div>
          </div>
        </section>

        <section
          id="about"
          style={{
            padding: "4rem 0 3rem",
            borderTop: "1px solid rgba(17, 17, 17, 0.08)",
            display: "grid",
            gridTemplateColumns: "minmax(220px, 1fr) 2fr",
            gap: "2.4rem",
          }}
        >
          <div className="about-copy" style={{ paddingTop: "0.3rem" }}>
            <p style={{ margin: "0 0 0.5rem", fontSize: "0.73rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#111111", fontWeight: "600" }}>
              02 — About
            </p>
            <h2 style={{ margin: "0", fontSize: "clamp(2.2rem, 3vw, 3.5rem)", lineHeight: "1.04", letterSpacing: "-0.05em", fontWeight: "500" }}>
              My Life, in Motion.
            </h2>
          </div>

          <div className="about-text">
            <p style={{ margin: "0", fontSize: "1.02rem", lineHeight: "1.7", maxWidth: "60ch", color: "#111111" }}>
              Hello there!
              <br />
              My background is defined by constant movement. I find myself going back and forth between Japan and the United States. I am currently in the US for college pursuing a career in mechanical engineering.
              <br />
              Growing up between Japan and the US taught adaptability, and participating in hands-on projects taught me how to think like an engineer. Today, I combine those experiences to tackle challenges.
            </p>
          </div>
        </section>

        <section
          id="projects"
          style={{
            padding: "4rem 0 3rem",
          }}
        >
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.73rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#111111", fontWeight: "600" }}>
            03 — Projects
          </p>
          <div
            className="project-list"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(260px, 1fr))",
              gap: "1.4rem",
              marginTop: "2rem",
            }}
          >
            <article
              className="project-card"
              style={{
                padding: "1.75rem 1.5rem",
                borderRadius: "1.2rem",
                border: "1px solid rgba(17, 17, 17, 0.08)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 style={{ margin: "0", fontSize: "1.7rem", letterSpacing: "-0.04em", fontWeight: "500" }}>
                Design for Manufacturing
              </h3>
              <p style={{ margin: "0.85rem 0 0", lineHeight: "1.6", color: "rgba(17, 17, 17, 0.8)" }}>
                CAD-driven product development and rapid prototyping for a student engineering challenge.
              </p>
              <Link
                to="/projects"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "#111111",
                  textDecoration: "underline",
                  fontWeight: "600",
                }}
              >
                View on Projects
              </Link>
            </article>

            <article
              className="project-card"
              style={{
                padding: "1.75rem 1.5rem",
                borderRadius: "1.2rem",
                border: "1px solid rgba(17, 17, 17, 0.08)",
                background: "rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 style={{ margin: "0", fontSize: "1.7rem", letterSpacing: "-0.04em", fontWeight: "500" }}>
                Mechanical Systems
              </h3>
              <p style={{ margin: "0.85rem 0 0", lineHeight: "1.6", color: "rgba(17, 17, 17, 0.8)" }}>
                Iterative design work focused on functionality, precision, and testing across real-world constraints.
              </p>
              <Link
                to="/projects"
                style={{
                  display: "inline-block",
                  marginTop: "1rem",
                  color: "#111111",
                  textDecoration: "underline",
                  fontWeight: "600",
                }}
              >
                View on Projects
              </Link>
            </article>
          </div>
        </section>

        <section
          id="contact"
          style={{
            margin: "2rem 0 5rem",
            background: "linear-gradient(135deg, #d0b9a9 0%, #bba18e 100%)",
            borderRadius: "2rem",
            padding: "2.5rem 2rem 2.2rem",
            border: "1px solid rgba(17, 17, 17, 0.08)",
          }}
        >
          <p style={{ margin: "0 0 0.5rem", fontSize: "0.73rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255, 255, 255, 0.9)", fontWeight: "600" }}>
            04 — Contact
          </p>
          <h2 style={{ margin: "0", fontSize: "clamp(2.2rem, 3vw, 3.5rem)", lineHeight: "1.04", letterSpacing: "-0.05em", fontWeight: "500", color: "#111111" }}>
            Contact Me
          </h2>
          <div
            className="contact-actions"
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <a
              href="mailto:yumaariga00@gmail.com"
              className="primary-button contact-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "3.3rem",
                padding: "0.9rem 1.7rem",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "1.1rem",
                transition: "opacity 0.2s ease",
                background: "#1a1f63",
                color: "#ffffff",
                border: "none",
              }}
            >
              Start a conversation
            </a>
            <span style={{ fontSize: "1rem", lineHeight: "1.5", color: "#111111" }}>
              yumaariga00@gmail.com
              <br />
              513-716-2423
            </span>
          </div>
        </section>
      </main>

      <footer style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 2.5rem 2.2rem" }}>
        <div style={{ borderTop: "1px solid rgba(17, 17, 17, 0.08)", paddingTop: "1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", fontSize: "0.95rem" }}>
          <p>© 2026 Yuma Ariga</p>
        </div>
      </footer>
    </div>
  );
}
