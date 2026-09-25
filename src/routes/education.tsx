import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

import Header from "@/components/Header";

type TimelineItemType = {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: React.ReactNode;
  isCurrent?: boolean;
};

const timelineItems: TimelineItemType[] = [
  {
    year: "2024 - Present",
    title: "Bachelor's Degree",
    institution: "Purdue University",
    description: "Mechanical Engineering — Expected graduation 2028",
    icon: <GraduationCap className="w-6 h-6 text-white" aria-hidden />,
    isCurrent: true,
  },
  {
    year: "2024",
    title: "High School Graduation",
    institution: "Marist Brothers International School",
    description: "Graduated and prepared for higher education",
    icon: <GraduationCap className="w-6 h-6 text-white" aria-hidden />,
  },
  {
    year: "2020",
    title: "Secondary Education",
    institution: "Marist Brothers International School",
    description: "Completed high school education with focus on STEM disciplines",
    icon: <BookOpen className="w-6 h-6 text-white" aria-hidden />,
  },
];

function TimelineItem({ item, isLast }: { item: TimelineItemType; isLast: boolean }) {
  return (
    <li className="relative pl-14 pb-10">
      {/* Vertical connector */}
      {!isLast && (
        <span
          className="absolute left-6 top-10 h-[calc(100%-2.5rem)] w-0.5 bg-black/15"
          aria-hidden
        />
      )}

      <div className="absolute left-0 top-1 flex h-12 w-12 items-center justify-center">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full shadow-sm transition-all duration-200 ${
            item.isCurrent
              ? "bg-[#000052] ring-4 ring-white/50"
              : "bg-[#000052]/80 hover:bg-[#000052]"
          }`}
          aria-hidden
        >
          {item.icon}
        </div>
      </div>

      <div
        className={`ml-2 rounded-2xl p-6 ring-1 ring-black/10 backdrop-blur-sm transition-colors duration-200 ${
          item.isCurrent
            ? "bg-white/60 shadow-sm"
            : "bg-white/40 hover:bg-white/50"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-black/60 mb-1">
              {item.year}
            </p>
            <h3 className="text-xl font-display font-semibold text-black mb-1">
              {item.title}
            </h3>
            <p className="text-[#000052] font-medium mb-2">{item.institution}</p>
            <p className="text-black/80 text-sm leading-relaxed">{item.description}</p>
          </div>
          {item.isCurrent && (
            <span className="shrink-0 px-3 py-1 text-xs font-medium bg-[#000052] text-white rounded-full">
              Current
            </span>
          )}
        </div>
      </div>
    </li>
  );
}

export default function Education() {
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
        className="pointer-events-none absolute top-[55%] -right-40 h-[420px] w-[420px] rounded-full bg-glow-violet blur-[150px] animate-glow-pulse animation-delay-500"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[360px] w-[360px] rounded-full bg-glow-neon-subtle blur-[130px]"
        aria-hidden="true"
      />

      <Header />

      <main className="relative mx-auto max-w-6xl px-6 pb-28">
        {/* Top hero */}
        <section className="pt-14 pb-14 sm:pt-20">
          <p
            className="animate-fade-up mb-6 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.28em]"
            style={{ color: "#FFFFFF" }}
          >
            <span className="inline-block size-1.5 rounded-full bg-violet" aria-hidden="true" />
            EDUCATION
          </p>

          <h1
            className="animate-fade-up animation-delay-100 max-w-[40ch] text-balance font-display text-5xl leading-[1.02] sm:text-6xl"
            style={{ color: "#000000" }}
          >
            Academic background
          </h1>

          <p
            className="animate-fade-up animation-delay-200 mt-6 max-w-[48ch] text-pretty text-base leading-relaxed sm:text-lg"
            style={{ color: "#000000" }}
          >
            My academic journey and milestones — current undergraduate student studying mechanical engineering at Purdue University and prior schooling at Marist Brothers International School.
          </p>

          <div className="animate-fade-up animation-delay-300 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors hover:opacity-90"
              style={{ backgroundColor: "#000052", color: "#ffffff" }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium ring-1 ring-black/10 transition-colors hover:bg-white/90"
              style={{ color: "#000000" }}
            >
              Contact
            </a>
          </div>
        </section>

        {/* Education timeline */}
        <section aria-labelledby="education-timeline" className="mb-12">
          <h2 id="education-timeline" className="sr-only">
            Timeline
          </h2>
          <ul className="space-y-4">
            {timelineItems.map((item, idx) => (
              <TimelineItem key={`${item.year}-${item.title}`} item={item} isLast={idx === timelineItems.length - 1} />
            ))}
          </ul>
        </section>

        {/* Call to action */}
        <section className="mt-16 pt-12 border-t border-black/10">
          <p className="text-black/80 mb-6 font-medium">Check out my projects and see what I've built.</p>
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#000052" }}
          >
            View my projects
          </a>
        </section>
      </main>
    </div>
  );
}
