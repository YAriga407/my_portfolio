import cadCup from "@/assets/cad-cup.png";
import cadShovel from "@/assets/cad-shovel.png";
import cadWheel from "@/assets/cad-wheel.png";
import hammerStand from "@/assets/hammerStand.png";
import teamPic from "@/assets/TeamPic.jpeg";
import bottleOptimization from "@/assets/bottleOptimize.png";
import bentOn from "@/assets/bentOn.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  year: string | null;
  tags: string[];
  wide: boolean;
  expandable?: boolean;
  details?: string;
}

export const projects: Project[] = [
  {
    id: "hammer-stand",
    title: "Hammer Stand",
    description:
      "A Purdue inspired hammer stand. Ran a Design for Assembly study to cut part count and assembly time, wrote the manufacturing plan covering cost, materials and fabrication, and built a struc[...]",
    image: hammerStand,
    imageAlt: "Machined metal hammer stand prototype on a workshop bench",
    year: "2026",
    tags: ["DFA", "Manufacturing", "Group project"],
    wide: true,
    expandable: true,
    details:
      "This project focused on reducing complexity and production costs through systematic design optimization. I led the Design for Assembly (DFA) analysis, identifying opportunities to consolida[...]",
  },
  {
    id: "topology-optimization",
    title: "CAD design : Shovel",
    description:
      "This project was used to leverage the use of CAD on fusion 360 to better get the understadning of CAD",
    image: cadShovel,
    imageAlt: "Topology optimized frame geometry from a finite element study",
    year: "2026",
    tags: ["Fusion 360", "CAD"],
    wide: false,
  },
  {
    id: "solar-racing",
    title: "CAD desgin : Wheel",
    description:
      "Designed and simulated steering and suspension components in Siemens NX with GD&T controlled tolerances, cut component weight by 2.3%, and fabricated prototypes through CNC machining, weldi[...]",
    image: cadWheel,
    imageAlt: "Solar racing car chassis components in a fabrication shop",
    year: "2024 – 2025",
    tags: ["Siemens NX", "CAD", "Fabrication"],
    wide: false,
  },
  {
    id: "bottle-design",
    title: "Bottle Design Optimization",
    description:
      "Built 3 CAD prototypes in NX and tested 3 materials for durability, weight and cost. The final design came out 7% lighter and scored 13% higher in user satisfaction after feedback from 45+ [...]",
    image: bottleOptimization,
    imageAlt: "CAD renderings of optimized bottle design prototypes",
    year: "2024",
    tags: ["CAD", "Prototyping", "User testing"],
    wide: false,
    expandable: true,
    details:
      "This project combined iterative CAD design with rigorous user testing and materials evaluation. I developed three distinct prototypes in Siemens NX, each optimized around different ergonomi[...]",
  },
  {
    id: "cad-project",
    title: "CAD Design Project",
    description:
      "A mechanical design project showcasing CAD modeling and design principles.",
    image: cadCup,
    imageAlt: "CAD render of a ribbed cup with an ergonomic handle",
    year: "2026",
    tags: ["CAD", "Design"],
    wide: false,
  },
  {
    id: "bento-kit-website",
    title: "Bento Kit Website",
    description:
      "An English-language website introducing Japanese bento kits to U.S. customers, built solo and drawing 500+ engagements in its last month — bentonkiteng.netlify.app.",
    image: bentOn,
    imageAlt: "Website homepage introducing Japanese bento kits",
    year: "2025",
    tags: ["Web", "Individual"],
    wide: false,
  },
  {
    id: "students-views-ceos",
    title: "Students' Views on CEOs",
    description:
      "Surveyed 50+ students on perceptions of corporate leadership, applied statistical analysis to identify 3 major leadership styles, and presented the findings to 30+ peers, faculty and judges[...]",
    image: teamPic,
    imageAlt: "Conference presentation slide on leadership research findings",
    year: "2025",
    tags: ["Research", "Presentation"],
    wide: true,
  },
];
