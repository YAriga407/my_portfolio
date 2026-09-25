import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Header from "@/components/Header";
import { projects } from "@/lib/projects";

// Simplified image imports replacing .asset.json references
import baselineFrame from "@/assets/comsol-baseline-frame.jpg";
import optimizedFrame from "@/assets/comsol-optimized-frame.jpg";
import topology3d from "@/assets/comsol-3d-topology.jpg";
import topology2d from "@/assets/comsol-2d-topology.jpg";
import topologySlide from "@/assets/TopologyOptimizationSlide.png";

const research = [
  {
    src: baselineFrame,
    alt: "Baseline CAD model of the motorcycle frame used as the starting geometry",
    title: "Baseline frame",
    caption: "The original motorcycle frame geometry before any material was removed.",
    badge: "Before",
  },
  {
    src: optimizedFrame,
    alt: "Optimized motorcycle frame showing material density distribution in red and blue",
    title: "Optimized frame",
    caption: "Material density after optimization — red is load-carrying, blue is removable.",
    badge: "After",
  },
  {
    src: topology3d,
    alt: "Three dimensional topology optimization result showing organic branching support structure",
    title: "3D topology result",
    caption: "A 3D run producing organic branching supports between the fixed and loaded faces.",
    badge: "3D",
  },
  {
    src: topology2d,
    alt: "Two dimensional topology optimization result showing a truss-like load path",
    title: "2D load paths",
    caption: "The 2D study that revealed the truss-like load paths driving the final design.",
    badge: "2D",
  },
];

export default function ProjectsPage() {
  const [researchOpen, setResearchOpen] = useState(true);
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

  const toggleResearch = () => setResearchOpen((current) => !current);

  const toggleProject = (projectId: string) => {
    setExpandedProjectId((current) => (current === projectId ? null : projectId));
  };

  const expandableProjects = projects.filter((p) => p.expandable);
  const regularProjects = projects.filter((p) => !p.expandable);

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #fed7bf, #facdb1)", color: "#000000" }}
    >
      {/* Ambient glows */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-glow-neon blur-[140px] animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-glow-neon-subtle blur-[130px]"
        aria-hidden="true"
      />

      <Header />

      <main className="relative mx-auto max-w-6xl px-6 pb-28">
        {/* Top hero */}
        <section className="pt-14 pb-14 sm:pt-20">
          <p className="animate-fade-up mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em]" style={{ color: "#FFFFFF" }}>
            <span className="inline-block size-1.5 rounded-full bg-violet" aria-hidden="true" />
            PROJECTS
          </p>
          <h1 className="animate-fade-up animation-delay-100 max-w-[40ch] text-balance font-display text-5xl leading-[1.02] sm:text-6xl" style={{ color: "#000000" }}>
            Recent projects
          </h1>
          <p className="animate-fade-up animation-delay-200 mt-6 max-w-[48ch] text-pretty text-base leading-relaxed sm:text-lg" style={{ color: "#000000" }}>
            A curated selection of my hands-on work — CAD design, prototyping, and fabricated projects that showcase practical engineering and design thinking.
          </p>
        </section>

        {/* Kyoto University Research Section */}
        <section className="pb-16">
          <article className="card-lift group cursor-pointer overflow-hidden rounded-2xl bg-white/45 p-3 ring-1 ring-black/10 backdrop-blur-sm transition-all duration-500">
            <button type="button" onClick={toggleResearch} className="w-full text-left">
              <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                <img
                  src={topologySlide}
                  alt="Kyoto University research motorcycle frame topology optimization preview"
                  loading="lazy"
                  className={`w-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${researchOpen ? "scale-[1.02]" : ""}`}
                  style={{ aspectRatio: researchOpen ? "16 / 9" : "16 / 10" }}
                />
              </div>

              <div className="flex items-start justify-between gap-3 px-2 pb-1 pt-4">
                <div>
                  <h3 className="font-display text-2xl leading-tight" style={{ color: "#000000" }}>
                    Kyoto University Research
                  </h3>
                  <p className="mt-2 max-w-[48ch] text-pretty text-sm leading-relaxed" style={{ color: "#000000" }}>
                    Topology optimization and structural FEA of a motorcycle frame in COMSOL — from the baseline CAD model to an 8% lighter geometry that still held its safety margins.
                  </p>
                </div>

                <div className="flex shrink-0 flex-col items-end gap-2">
                  <ChevronDown
                    className={`size-4 transition-transform duration-300 ${researchOpen ? "rotate-180" : ""}`}
                    style={{ color: "#000000" }}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </button>

            {researchOpen && (
              <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {research.map((item) => (
                  <figure key={item.src} className="overflow-hidden rounded-2xl bg-white/30 p-3 ring-1 ring-black/10 backdrop-blur-sm">
                    <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                      <img src={item.src} alt={item.alt} loading="lazy" className="w-full object-contain" style={{ aspectRatio: "16 / 10" }} />
                    </div>
                    <figcaption className="flex items-start justify-between gap-3 px-2 pb-1 pt-4">
                      <div>
                        <h4 className="font-display text-lg leading-tight" style={{ color: "#000000" }}>
                          {item.title}
                        </h4>
                        <p className="mt-1 max-w-[42ch] text-pretty text-xs leading-relaxed sm:text-sm" style={{ color: "#000000" }}>
                          {item.caption}
                        </p>
                      </div>
                      <span className="rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.14em]" style={{ backgroundColor: "#000052", color: "#ffffff" }}>
                        {item.badge}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            )}
          </article>
        </section>

        {/* Expandable Projects Section */}
        {expandableProjects.length > 0 && (
          <section className="pb-16">
            <div className="space-y-6">
              {expandableProjects.map((project) => {
                const isExpanded = expandedProjectId === project.id;
                return (
                  <article
                    key={project.id}
                    className="card-lift group cursor-pointer overflow-hidden rounded-2xl bg-[#FFEAE0] p-3 ring-1 ring-black/10 backdrop-blur-sm transition-all duration-500"
                  >
                    <button
                      type="button"
                      onClick={() => toggleProject(project.id)}
                      className="w-full text-left"
                    >
                      <div className="overflow-hidden rounded-xl bg-white ring-1 ring-black/5">
                        <img
                          src={project.image}
                          alt={project.imageAlt}
                          loading="lazy"
                          className={`w-full object-cover transition-all duration-500 group-hover:scale-[1.03] ${isExpanded ? "scale-[1.02]" : ""}`}
                          style={{ aspectRatio: isExpanded ? "16 / 9" : "16 / 10" }}
                        />
                      </div>
                      <div className="flex items-start justify-between gap-3 px-2 pb-1 pt-4">
                        <div>
                          <h3 className="font-display text-2xl leading-tight" style={{ color: "#000000" }}>
                            {project.title}
                          </h3>
                          <p className="mt-2 max-w-[48ch] text-pretty text-sm leading-relaxed" style={{ color: "#000000" }}>
                            {project.description}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={tag}
                                className={`rounded-full px-2.5 py-1 text-xs ring-1 ring-black/10 ${index === 0 ? "text-violet" : ""}`}
                                style={{ color: index === 0 ? undefined : "#000000" }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex shrink-0 flex-col items-end gap-2">
                          {project.year && (
                            <span className="rounded-full bg-black/5 px-3 py-1 text-xs ring-1 ring-black/10" style={{ color: "#000000" }}>
                              {project.year}
                            </span>
                          )}
                          <ChevronDown
                            className={`size-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                            style={{ color: "#000000" }}
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-2 pb-4 pt-1 animate-fade-up">
                        <p className="max-w-[70ch] text-pretty text-sm leading-relaxed" style={{ color: "#000000" }}>
                          {project.details}
                        </p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* Regular Projects Grid */}
        {regularProjects.length > 0 && (
          <section className="pb-10">
            <h2 className="mb-8 max-w-[40ch] text-balance font-display text-3xl leading-tight" style={{ color: "#000000" }}>
              Personal Projects
            </h2>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {regularProjects.map((project) => (
                <article
                  key={project.id}
                  className={`card-lift group rounded-2xl bg-[#FFEAE0] p-5 ring-1 ring-white/10 ${project.wide ? "md:col-span-2" : ""}`}
                >
                  <div className="w-full overflow-hidden rounded-xl bg-ink/70 ring-1 ring-black/5">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      width={project.wide ? 1280 : 720}
                      height={project.wide ? 720 : 800}
                      loading="lazy"
                      className="w-full object-cover"
                      style={{ aspectRatio: project.wide ? "16 / 9" : "4 / 5" }}
                    />
                  </div>
                  <div className={`mt-5 flex ${project.wide ? "items-start justify-between gap-4" : "flex-col"}`}>
                    <div>
                      <h3 className="max-w-[35ch] text-balance font-display text-2xl leading-tight" style={{ color: "#000000" }}>
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-[48ch] text-pretty text-sm leading-relaxed" style={{ color: "#000000" }}>
                        {project.description}
                      </p>
                    </div>
                    {project.year && (
                      <span className="shrink-0 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10" style={{ color: "#000000" }}>
                        {project.year}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span key={tag} className={`rounded-full px-2.5 py-1 text-xs ring-1 ring-white/10 ${index === 0 ? "text-violet" : ""}`} style={{ color: index === 0 ? undefined : "#000000" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
