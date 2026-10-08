import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
        {/* Copyright */}
        <div className="text-sm text-muted">
          © 2026 <span className="font-semibold text-text">Bineeta Das</span>.{" "}
          All Rights Reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://github.com/BineetaDas",
                "_blank",
                "noopener,noreferrer",
              )
            }
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <FaGithub size={17} />
          </button>

          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/",
                "_blank",
                "noopener,noreferrer",
              )
            }
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <FaLinkedin size={17} />
          </button>

          <button
            type="button"
            onClick={() =>
              (window.location.href = "mailto:binnetadas7@gmail.com")
            }
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/50 text-muted transition-all duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary"
          >
            <FaEnvelope size={17} />
          </button>
        </div>

        {/* Built With */}
        <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-muted sm:text-xs">
          <span>Built With</span>

          <FaReact size={14} className="text-primary" />

          <span className="text-primary">React</span>

          <span>&</span>

          <span className="text-primary">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
