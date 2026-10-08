import { ArrowDown, ArrowRight, Code2, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImage from "../assets/professional-profilephoto.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const openGithub = () => {
    window.open(
      "https://github.com/BineetaDas",
      "_blank",
      "noopener,noreferrer",
    );
  };

  const openLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/bineeta-das-03936a231/",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden px-4 pb-20 pt-20 sm:px-6 sm:pb-24 sm:pt-24 lg:px-8 lg:pb-28 lg:pt-28"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10">
        {/* LEFT SIDE */}
        <div className="relative max-w-3xl text-center lg:text-left">
          {/* Vertical Line */}
          <div className="absolute -left-7 top-2 hidden h-24 w-px bg-gradient-to-b from-primary via-secondary to-transparent lg:block" />

          {/* Availability Badge */}
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full
              border border-primary/20
              bg-primary/5
              px-4 py-2
              backdrop-blur-xl
              transition-all duration-300
              hover:border-primary/40
              hover:bg-primary/10
            "
          >
            <span
              className="
                h-2 w-2 rounded-full
                bg-primary
                shadow-[0_0_10px_rgba(56,189,248,0.55)]
              "
            />

            <span className="text-[11px] font-semibold tracking-[0.16em] text-primary sm:text-xs">
              OPEN TO OPPORTUNITIES
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-text sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Hi, I’m
            <br />
            <span className="bg-gradient-to-r from-primary via-sky-400 to-secondary bg-clip-text text-transparent">
              Bineeta Das
            </span>
            <span className="ml-2 text-primary/70">.</span>
          </h1>

          {/* Role */}
          <div className="mt-6 flex items-center justify-center gap-3 lg:justify-start">
            <div className="hidden h-px w-10 bg-border sm:block" />

            <p className="text-sm font-medium tracking-wide text-muted sm:text-base">
              Frontend Developer & UI Enthusiast
            </p>

            <Code2 size={17} className="text-primary" />
          </div>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base lg:mx-0">
            I craft modern, responsive interfaces with React and TypeScript,
            focusing on clean code, thoughtful design, and smooth user
            experiences.
          </p>

          {/* Feature Cards */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Thoughtful Code */}
            <div
              className="
                rounded-2xl
                border border-border/70
                bg-card/50
                p-4
                text-left
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-primary/30
                hover:bg-card/70
              "
            >
              <Code2 size={18} className="text-primary" />

              <p className="mt-3 text-sm font-semibold text-text">
                Thoughtful Code
              </p>

              <p className="mt-1 text-xs leading-5 text-muted">
                Clean & maintainable
              </p>
            </div>

            {/* Modern Interfaces */}
            <div
              className="
                rounded-2xl
                border border-border/70
                bg-card/50
                p-4
                text-left
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-primary/30
                hover:bg-card/70
              "
            >
              <Sparkles size={18} className="text-primary" />

              <p className="mt-3 text-sm font-semibold text-text">
                Modern Interfaces
              </p>

              <p className="mt-1 text-xs leading-5 text-muted">
                Clean & engaging
              </p>
            </div>

            {/* Built to Adapt */}
            <div
              className="
                rounded-2xl
                border border-border/70
                bg-card/50
                p-4
                text-left
                backdrop-blur-xl
                transition-all duration-300
                hover:-translate-y-0.5
                hover:border-primary/30
                hover:bg-card/70
              "
            >
              <ArrowRight size={18} className="text-primary" />

              <p className="mt-3 text-sm font-semibold text-text">
                Built to Adapt
              </p>

              <p className="mt-1 text-xs leading-5 text-muted">
                Responsive everywhere
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="
                group flex w-full items-center justify-center
                gap-2 rounded-xl
                bg-gradient-to-r from-primary to-secondary
                px-6 py-3
                text-sm font-bold text-bg
                shadow-[0_8px_30px_rgba(56,189,248,0.12)]
                transition-all duration-300
                hover:from-primary-hover
                hover:to-secondary
                hover:shadow-[0_10px_35px_rgba(56,189,248,0.18)]
                sm:w-auto
              "
            >
              Explore My Work
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="
                flex w-full items-center justify-center
                gap-2 rounded-xl
                border border-border
                bg-surface/70
                px-6 py-3
                text-sm font-semibold text-text
                backdrop-blur-xl
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
                sm:w-auto
              "
            >
              Let’s Connect
            </button>
          </div>

          {/* Social Icons */}
          <div className="mt-7 flex items-center justify-center gap-3 lg:justify-start">
            <button
              type="button"
              aria-label="GitHub"
              onClick={openGithub}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-border
                bg-surface/70
                text-muted
                backdrop-blur-xl
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <FaGithub size={17} />
            </button>

            <button
              type="button"
              aria-label="LinkedIn"
              onClick={openLinkedin}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl
                border border-border
                bg-surface/70
                text-muted
                backdrop-blur-xl
                transition-all duration-300
                hover:border-primary/40
                hover:bg-primary/5
                hover:text-primary
              "
            >
              <FaLinkedinIn size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative mx-auto h-[540px] w-full max-w-[550px]">
          {/* Back Card - Right */}
          <div
            className="
              absolute right-[7%] top-[5%]
              h-[440px] w-[335px]
              rotate-[7deg]
              rounded-[2.5rem]
              border border-primary/10
              bg-card/30
              backdrop-blur-sm
            "
          />

          {/* Back Card - Left */}
          <div
            className="
              absolute left-[8%] top-[9%]
              h-[440px] w-[335px]
              -rotate-[6deg]
              rounded-[2.5rem]
              border border-border/50
              bg-surface/30
              backdrop-blur-sm
            "
          />

          {/* Main Photo Card */}
          <div
            className="
              group absolute left-1/2 top-1/2
              z-10
              h-[500px] w-[365px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-[2.5rem]
              border border-border/80
              bg-card/60
              p-2
              shadow-[0_30px_90px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
              transition-transform duration-500
              hover:-translate-y-[51%]
            "
          >
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-surface">
              <img
                src={profileImage}
                alt="Bineeta Das"
                className="
                  h-full w-full
                  object-cover
                  object-center
                  transition-transform duration-500
                  group-hover:scale-[1.025]
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Floating Card 1 */}
          <div className="absolute left-0 top-[15%] z-30">
            <div
              className="
                rounded-2xl
                border border-border/70
                bg-card/70
                px-4 py-3
                shadow-xl
                backdrop-blur-xl
                transition-all duration-300
                hover:border-primary/40
                hover:bg-card/80
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Code2 size={17} />
                </div>

                <div>
                  <p className="text-[10px] text-muted">Building with</p>

                  <p className="text-xs font-semibold text-text">
                    React + TypeScript
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 2 */}
          <div className="absolute right-0 top-[29%] z-30">
            <div
              className="
                rounded-2xl
                border border-border/70
                bg-card/70
                px-4 py-3
                shadow-xl
                backdrop-blur-xl
                transition-all duration-300
                hover:border-primary/40
                hover:bg-card/80
              "
            >
              <div className="flex items-center gap-3">
                <span
                  className="
                    h-2.5 w-2.5 rounded-full
                    bg-primary
                    shadow-[0_0_10px_rgba(56,189,248,0.55)]
                  "
                />

                <div>
                  <p className="text-[10px] text-muted">Status</p>

                  <p className="text-xs font-semibold text-text">
                    Open to Work
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 3 */}
          <div className="absolute bottom-[12%] left-[2%] z-30">
            <div
              className="
                rounded-2xl
                border border-border/70
                bg-card/70
                px-4 py-3
                shadow-xl
                backdrop-blur-xl
                transition-all duration-300
                hover:border-primary/40
                hover:bg-card/80
              "
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Sparkles size={16} />
                </div>

                <div>
                  <p className="text-[10px] text-muted">Focus</p>

                  <p className="text-xs font-semibold text-text">
                    UI & Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Dots */}
          <span className="absolute right-[17%] top-[12%] h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.7)]" />

          <span className="absolute bottom-[18%] right-[12%] h-1.5 w-1.5 rounded-full bg-secondary shadow-[0_0_10px_rgba(99,102,241,0.6)]" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        type="button"
        onClick={() => scrollToSection("about")}
        className="
          group absolute bottom-5 left-1/2
          hidden -translate-x-1/2
          flex-col items-center gap-2
          text-muted
          transition-colors duration-300
          hover:text-primary
          sm:flex
        "
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>

        <ArrowDown
          size={16}
          className="transition-transform duration-300 group-hover:translate-y-1"
        />
      </button>
    </section>
  );
};

export default Hero;
