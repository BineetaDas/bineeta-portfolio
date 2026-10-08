import { CalendarDays, ExternalLink, GitFork, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiC, SiCplusplus } from "react-icons/si";
import {
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import type { GithubRepository } from "../types/interface/github.interface";

const GithubProjectCard = ({
  name,
  description,
  html_url,
  language,
  stargazers_count,
  forks_count,
  updated_at,
}: GithubRepository) => {
  const getTechnology = () => {
    switch (language?.toLowerCase()) {
      case "javascript":
        return {
          name: "JavaScript",
          icon: <FaJs />,
          color: "text-[#F7DF1E]",
        };

      case "typescript":
        return {
          name: "TypeScript",
          icon: <SiTypescript />,
          color: "text-[#3178C6]",
        };

      case "react":
        return {
          name: "React",
          icon: <FaReact />,
          color: "text-[#61DAFB]",
        };

      case "html":
        return {
          name: "HTML",
          icon: <FaHtml5 />,
          color: "text-[#E34F26]",
        };

      case "css":
        return {
          name: "CSS",
          icon: <FaCss3Alt />,
          color: "text-[#1572B6]",
        };

      case "python":
        return {
          name: "Python",
          icon: <FaPython />,
          color: "text-[#3776AB]",
        };

      case "java":
        return {
          name: "Java",
          icon: <FaJava />,
          color: "text-[#ED8B00]",
        };

      case "php":
        return {
          name: "PHP",
          icon: <FaPhp />,
          color: "text-[#777BB4]",
        };

      case "c":
        return {
          name: "C",
          icon: <SiC />,
          color: "text-[#A8B9CC]",
        };

      case "c++":
        return {
          name: "C++",
          icon: <SiCplusplus />,
          color: "text-[#00599C]",
        };

      case "bootstrap":
        return {
          name: "Bootstrap",
          icon: <FaBootstrap />,
          color: "text-[#7952B3]",
        };

      case "tailwind css":
        return {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-[#06B6D4]",
        };

      default:
        return {
          name: language || "Other",
          icon: <FaGithub />,
          color: "text-muted",
        };
    }
  };

  const technology = getTechnology();

  const formattedDate = new Date(updated_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[1.6rem] border border-border/70 bg-card/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-6">
      {/* Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-primary/8 blur-[80px] transition-all duration-500 group-hover:bg-primary/15" />

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-secondary/8 blur-[80px]" />

      <div className="relative flex h-full flex-col">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-surface/80 text-text transition-all duration-300 group-hover:border-primary/40 group-hover:text-primary">
            <FaGithub size={22} />
          </div>

          <span className="rounded-full border border-border bg-surface/70 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-muted">
            Repository
          </span>
        </div>

        {/* Project */}
        <div className="mt-6">
          <h3 className="break-words text-xl font-bold leading-tight tracking-tight text-text transition-colors duration-300 group-hover:text-primary sm:text-[22px]">
            {name}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">
            {description ||
              "A development project created and maintained on GitHub."}
          </p>
        </div>

        {/* Technology */}
        <div className="mt-5">
          <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/70 px-3 py-2">
            <span className={`text-base ${technology.color}`}>
              {technology.icon}
            </span>

            <span className="text-xs font-semibold text-text">
              {technology.name}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-4 flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-lg border border-border bg-surface/60 px-2.5 py-1.5 text-[11px] text-muted">
            <Star size={13} />
            {stargazers_count}
          </span>

          <span className="flex items-center gap-1.5 rounded-lg border border-border bg-surface/60 px-2.5 py-1.5 text-[11px] text-muted">
            <GitFork size={13} />
            {forks_count}
          </span>
        </div>

        {/* Updated */}
        <div className="mt-5 flex items-center gap-2 text-[11px] text-muted">
          <CalendarDays size={13} />

          <span>Updated {formattedDate}</span>
        </div>

        {/* Button */}
        <div className="mt-auto pt-6">
          <div className="mb-5 h-px w-full bg-border/60" />

          <button
            type="button"
            onClick={() => window.open(html_url, "_blank")}
            className="group/button flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-xs font-bold text-bg transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <FaGithub size={15} />

            <span>View Repository</span>

            <ExternalLink
              size={14}
              className="transition-transform duration-300 group-hover/button:translate-x-1"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default GithubProjectCard;
