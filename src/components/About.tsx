import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiJquery, SiTailwindcss, SiTypescript } from "react-icons/si";
import { Code2, Layout, Monitor, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-4 pb-12 pt-20 sm:px-6 sm:pb-14 sm:pt-24 lg:px-8 lg:pb-16 lg:pt-28"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-indigo-500/8 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-40 h-80 w-80 rounded-full bg-cyan-400/7 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/4 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================================================= */}
        {/* SECTION HEADING */}
        {/* ================================================= */}

        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-14" />

          <p className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-[11px] font-bold uppercase tracking-[0.28em] text-transparent">
            About Me
          </p>

          <span className="h-px flex-1 bg-gradient-to-r from-border/70 to-transparent" />
        </div>

        {/* ================================================= */}
        {/* MAIN ABOUT GRID */}
        {/* ================================================= */}

        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.75fr_0.8fr] lg:gap-7">
          {/* ================================================= */}
          {/* LEFT — INTRO */}
          {/* ================================================= */}

          <div className="relative">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/60 to-secondary/10 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:p-8">
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-cyan-400/10 blur-[70px]" />

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-[70px]" />

              <div className="relative flex h-full flex-col">
                <p className="font-mono text-[10px] font-semibold tracking-[0.22em] text-muted">
                  WHO I AM
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-[1.04] tracking-tight text-text sm:text-5xl">
                  Curious.
                  <br />
                  Creative.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
                    Always learning.
                  </span>
                </h2>

                {/* Open To Opportunities */}
                <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 via-cyan-400/5 to-secondary/10 px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.15)] backdrop-blur-xl">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-primary/40 blur-[3px]" />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>

                  <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-xs font-semibold tracking-wide text-transparent">
                    Open to Opportunities
                  </span>
                </div>

                {/* Small Bottom Label */}
                <div className="mt-auto pt-10">
                  <div className="h-px w-full bg-gradient-to-r from-primary/40 via-border/50 to-transparent" />

                  <p className="mt-4 text-xs leading-5 text-muted">
                    Exploring ideas, building interfaces, and growing through
                    real-world projects.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* CENTER — ABOUT CONTENT */}
          {/* ================================================= */}

          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.07] via-card/60 to-indigo-500/[0.08] p-7 shadow-[0_20px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8">
            {/* Glows */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/8 blur-[80px]" />

            <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-indigo-500/8 blur-[80px]" />

            <div className="relative">
              {/* Intro */}
              <p className="text-lg font-medium leading-8 text-text sm:text-xl sm:leading-9">
                I’m Bineeta Das, an aspiring{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text font-bold text-transparent">
                  Frontend Developer
                </span>{" "}
                who enjoys turning ideas into responsive, user-friendly, and
                engaging web experiences.
              </p>

              <div className="my-6 h-px bg-gradient-to-r from-primary/40 via-border/70 to-transparent" />

              {/* Description */}
              <div className="space-y-3.5">
                <p className="text-sm leading-7 text-muted sm:text-base">
                  I’m passionate about creating clean interfaces and bringing
                  designs to life using technologies like{" "}
                  <span className="font-semibold text-text">HTML</span>,{" "}
                  <span className="font-semibold text-text">CSS</span>,{" "}
                  <span className="font-semibold text-text">JavaScript</span>,{" "}
                  <span className="font-semibold text-text">TypeScript</span>,{" "}
                  <span className="font-semibold text-text">React</span>,{" "}
                  <span className="font-semibold text-text">Bootstrap</span>,{" "}
                  <span className="font-semibold text-text">Tailwind CSS</span>,
                  and <span className="font-semibold text-text">jQuery</span>.
                </p>

                <p className="text-sm leading-7 text-muted sm:text-base">
                  I enjoy learning through hands-on projects, solving UI
                  challenges, and continuously improving my frontend development
                  skills. Currently, I’m focused on strengthening my knowledge
                  of <span className="font-semibold text-text">JavaScript</span>
                  , <span className="font-semibold text-text">TypeScript</span>,
                  and <span className="font-semibold text-text">React</span>{" "}
                  while exploring better ways to build modern and accessible web
                  experiences.
                </p>
              </div>

              {/* ================================================= */}
              {/* WHAT I FOCUS ON */}
              {/* ================================================= */}

              <div className="mt-7">
                <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  What I Focus On
                </p>

                <div className="grid gap-2.5 sm:grid-cols-3">
                  {/* UI */}
                  <div className="group rounded-2xl border border-border/60 bg-white/[0.025] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-primary/25 hover:bg-primary/5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-primary/15 bg-gradient-to-br from-primary/10 to-secondary/10 text-primary">
                      <Layout size={17} />
                    </div>

                    <p className="mt-3 text-xs font-semibold text-text">
                      Clean UI
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-muted">
                      Simple & polished
                    </p>
                  </div>

                  {/* Responsive */}
                  <div className="group rounded-2xl border border-border/60 bg-white/[0.025] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-primary/25 hover:bg-primary/5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/15 bg-gradient-to-br from-cyan-400/10 to-primary/10 text-primary">
                      <Monitor size={17} />
                    </div>

                    <p className="mt-3 text-xs font-semibold text-text">
                      Responsive
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-muted">
                      Mobile-first
                    </p>
                  </div>

                  {/* Components */}
                  <div className="group rounded-2xl border border-border/60 bg-white/[0.025] p-3.5 backdrop-blur-md transition-all duration-300 hover:border-primary/25 hover:bg-primary/5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-indigo-400/15 bg-gradient-to-br from-indigo-400/10 to-secondary/10 text-secondary">
                      <Code2 size={17} />
                    </div>

                    <p className="mt-3 text-xs font-semibold text-text">
                      Components
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-muted">
                      Reusable & clean
                    </p>
                  </div>
                </div>
              </div>

              {/* ================================================= */}
              {/* TECHNOLOGIES */}
              {/* ================================================= */}

              <div className="mt-7">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    Technologies
                  </p>

                  <span className="text-[10px] text-muted">My toolkit</span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {/* HTML */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <FaHtml5
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      HTML5
                    </span>
                  </div>

                  {/* CSS */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <FaCss3Alt
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      CSS3
                    </span>
                  </div>

                  {/* JavaScript */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <FaJs
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      JavaScript
                    </span>
                  </div>

                  {/* TypeScript */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <SiTypescript
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      TypeScript
                    </span>
                  </div>

                  {/* React */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <FaReact
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      React
                    </span>
                  </div>

                  {/* Bootstrap */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <FaBootstrap
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      Bootstrap
                    </span>
                  </div>

                  {/* Tailwind */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <SiTailwindcss
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      Tailwind CSS
                    </span>
                  </div>

                  {/* jQuery */}
                  <div className="group flex items-center gap-2 rounded-xl border border-border/70 bg-gradient-to-br from-white/[0.05] to-primary/[0.04] px-3.5 py-2.5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:from-primary/10 hover:to-secondary/5">
                    <SiJquery
                      size={17}
                      className="text-muted transition-colors duration-300 group-hover:text-primary"
                    />

                    <span className="text-xs font-semibold text-text">
                      jQuery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ================================================= */}
          {/* RIGHT */}
          {/* ================================================= */}

          <div className="space-y-4 lg:border-l lg:border-border/70 lg:pl-7">
            {/* Interest */}
            <div className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.08] via-surface/60 to-secondary/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:border-primary/25">
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-400/8 blur-[45px]" />

              <div className="relative">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-primary" />

                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                    INTEREST
                  </p>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                    <p className="text-sm font-semibold text-text">
                      UI Development
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />

                    <p className="text-sm font-semibold text-text">
                      Problem Solving
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently Learning */}
            <div className="group relative overflow-hidden rounded-2xl border border-secondary/10 bg-gradient-to-br from-secondary/[0.08] via-surface/60 to-primary/[0.06] p-5 backdrop-blur-xl transition-all duration-300 hover:border-secondary/25">
              <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-indigo-500/8 blur-[45px]" />

              <div className="relative">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
                  CURRENTLY LEARNING
                </p>

                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-white/[0.02] px-3 py-2.5">
                    <span className="text-sm font-medium text-text">React</span>

                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-white/[0.02] px-3 py-2.5">
                    <span className="text-sm font-medium text-text">
                      TypeScript
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  </div>

                  <div className="flex items-center justify-between rounded-xl border border-border/40 bg-white/[0.02] px-3 py-2.5">
                    <span className="text-sm font-medium text-text">
                      Modern UI
                    </span>

                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>

            {/* Small Quote */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-gradient-to-br from-primary/[0.06] via-cyan-400/[0.03] to-secondary/[0.07] p-5 backdrop-blur-xl">
              <div className="pointer-events-none absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-indigo-500/10 blur-[45px]" />

              <div className="relative">
                <div className="mb-3 h-0.5 w-8 rounded-full bg-gradient-to-r from-primary to-secondary" />

                <p className="text-sm font-medium leading-6 text-muted">
                  “Good interfaces are not just about how they look, but how
                  naturally they feel.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
