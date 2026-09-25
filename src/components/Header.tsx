import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
      <Link to="/" className="flex items-center gap-2.5">
        <span
          className="grid size-8 place-items-center rounded-lg text-sm font-semibold text-primary-foreground ring-1 ring-white/15 font-display"
          style={{ backgroundColor: "#fac1b1" }}
        >
          YA
        </span>
        <span className="text-sm font-medium tracking-tight" style={{ color: "#000000" }}>
          Yuma Ariga
        </span>
      </Link>
      <nav className="hidden items-center gap-8 text-sm sm:flex">
        <Link to="/" className="transition-colors hover:opacity-70" style={{ color: "#000000" }}>
          Home
        </Link>
        <Link to="/education" className="transition-colors hover:opacity-70" style={{ color: "#000000" }}>
          Education
        </Link>
        <Link to="/projects" className="font-semibold transition-colors hover:opacity-70" style={{ color: "#000000" }}>
          Projects
        </Link>
        <Link to="/contact" className="transition-colors hover:opacity-70" style={{ color: "#000000" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
