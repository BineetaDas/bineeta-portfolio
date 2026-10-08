import { Rocket, Code2, Layers3, GitBranch, Sparkles } from "lucide-react";

const learningAreas = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "HTML & CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Material UI",
  "Responsive Design",
  "jQuery",
  "Figma",
  "API Integration",
  "Git & GitHub",
];

const LearningJourney = () => {
  return (
    <section
      id="learning-journey"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Learning Journey
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* Main Grid */}
        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-7 backdrop-blur-xl sm:p-8 lg:p-9">
            <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              {/* Icon */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <Rocket size={25} strokeWidth={1.7} className="text-primary" />
              </div>

              <p className="mt-9 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                My Approach
              </p>

              <h2 className="mt-3 text-3xl font-semibold leading-tight text-text sm:text-4xl">
                Learn.
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}
                  Build.
                </span>
                <br />
                Improve.
              </h2>

              <p className="mt-6 text-sm leading-7 text-muted sm:text-base">
                I continuously improve my frontend development skills through
                structured learning, practical projects, and hands-on
                experimentation.
              </p>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                Building projects helps me understand concepts better, solve
                problems, and turn what I learn into practical experiences.
              </p>

              {/* Quote */}
              <div className="mt-8 flex gap-3 border-t border-border/50 pt-6">
                <Sparkles size={17} className="mt-1 shrink-0 text-primary" />

                <p className="text-sm italic leading-6 text-muted">
                  "Keep learning, keep building, keep improving."
                </p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-7 backdrop-blur-xl sm:p-8 lg:p-9">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative">
              {/* Header */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                    What I Keep Exploring
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold text-text sm:text-3xl">
                    Technologies & Concepts
                  </h2>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-surface/60 sm:flex">
                  <Code2 size={19} className="text-primary" />
                </div>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
                Areas I have learned and continue to practice while working on
                frontend projects.
              </p>

              {/* Technology Pills */}
              <div className="mt-7 flex flex-wrap gap-2.5">
                {learningAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-xl border border-border/70 bg-surface/60 px-3.5 py-2.5 text-xs font-medium text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/5 hover:text-primary sm:text-sm"
                  >
                    {area}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-8 grid gap-3 border-t border-border/50 pt-6 sm:grid-cols-2">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <Layers3 size={17} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">Focus</p>

                    <p className="text-sm font-medium text-text">
                      Frontend Development
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10">
                    <GitBranch size={17} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">Practice</p>

                    <p className="text-sm font-medium text-text">
                      Projects & GitHub
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;
