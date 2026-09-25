export default function HeaderPage() {
  return (
    <>
      <header>
        <nav>
          <a href="/">
            <h2>Your Name</h2>
          </a>
          <div class="nav-links">
            <a href="/#about">About</a>
            <a href="/#projects">Projects</a>
            <a href="/#skills">Skills</a>
            <a href="/#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main>
        <section class="hero">
          <div>
            <h1>Header Page</h1>
            <p>This is a dedicated page you can customize with more details about your header or logo.</p>
            <a class="button" href="/">Back to Home</a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Your Name</p>
      </footer>
    </>
  );
}
