import { ArrowUpRight, ExternalLink, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  projectNumber?: string;
}

const ProjectCard = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  projectNumber,
}: ProjectCardProps) => {
  return (
    <article className="group relative flex h-full min-h-[470px] flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-card/70 p-5 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_25px_70px_rgba(0,0,0,0.28)] sm:p-6">
      {/* Soft Glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/8 blur-[80px] transition-all duration-500 group-hover:bg-primary/15" />

      <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-secondary/8 blur-[80px]" />

      <div className="relative flex h-full flex-col">
        {/* Top Row */}
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs font-medium tracking-[0.2em] text-muted">
            {projectNumber || "01"}
          </span>

          <div className="flex items-center gap-2 rounded-full border border-border/70 bg-surface/70 px-3 py-1.5">
            <Sparkles size={12} className="text-primary" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted">
              Featured
            </span>
          </div>
        </div>

        {/* Project Visual */}
        <div className="relative mt-7 flex h-36 items-center justify-center overflow-hidden rounded-2xl border border-border/60 bg-surface/60">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />

          <div className="relative flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_18px_currentColor]" />

            <span className="px-6 text-center text-2xl font-bold tracking-tight text-text/20 transition-all duration-500 group-hover:text-text/35 sm:text-3xl">
              {title}
            </span>

            <span className="h-2 w-2 rounded-full bg-secondary shadow-[0_0_18px_currentColor]" />
          </div>

          <div className="absolute bottom-3 left-3 rounded-lg border border-border/60 bg-card/70 px-2.5 py-1 backdrop-blur-md">
            <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-muted">
              Project
            </span>
          </div>

          <ArrowUpRight
            size={18}
            className="absolute right-4 top-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
          />
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-2xl font-bold tracking-tight text-text transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>

          <p className="mt-3 min-h-[72px] text-sm leading-6 text-muted">
            {description}
          </p>
        </div>

        {/* Technologies */}
        <div className="mt-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
            Technologies
          </p>

          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-border/70 bg-surface/70 px-2.5 py-1.5 text-[11px] font-medium text-muted transition-all duration-300 group-hover:border-primary/20 group-hover:text-text"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-auto pt-6">
          <div className="mb-5 h-px w-full bg-border/60" />

          <div className="flex gap-3">
            {/* GitHub */}
            <button
              type="button"
              onClick={() => window.open(githubUrl, "_blank")}
              className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-3 py-2.5 text-xs font-semibold text-text transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
            >
              <FaGithub
                size={15}
                className="transition-transform duration-300 group-hover/button:scale-110"
              />
              GitHub
            </button>

            {/* Live Demo */}
            <button
              type="button"
              onClick={() => window.open(liveUrl, "_blank")}
              className="group/button flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-3 py-2.5 text-xs font-bold text-bg transition-all duration-300 hover:from-primary-hover hover:to-secondary"
            >
              Live Demo
              <ExternalLink
                size={15}
                className="transition-transform duration-300 group-hover/button:translate-x-0.5"
              />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
