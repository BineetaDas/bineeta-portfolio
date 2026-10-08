import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = {
    about: "About",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-surface/75 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group text-base font-extrabold tracking-[0.18em] text-text transition-colors duration-300 hover:text-primary"
        >
          BINEETA
          <span className="text-primary transition-colors duration-300 group-hover:text-primary-hover">
            .
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          <button
            type="button"
            onClick={() => scrollToSection("about")}
            className="text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            {navItems.about}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("skills")}
            className="text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            {navItems.skills}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            {navItems.projects}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            {navItems.experience}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("education")}
            className="text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            {navItems.education}
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
          >
            {navItems.contact}
          </button>
        </div>

        {/* Social Icons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/BineetaDas", "_blank")
            }
            className="text-muted transition-all duration-300 hover:scale-105 hover:text-primary"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </button>

          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/bineeta-das-03936a231/",
                "_blank",
              )
            }
            className="text-muted transition-all duration-300 hover:scale-105 hover:text-primary"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-muted transition-colors duration-300 hover:text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-[4.5rem] rounded-2xl border border-white/10 bg-surface/95 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => scrollToSection("about")}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
              >
                {navItems.about}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("skills")}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
              >
                {navItems.skills}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
              >
                {navItems.projects}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("experience")}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
              >
                {navItems.experience}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("education")}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
              >
                {navItems.education}
              </button>

              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
              >
                {navItems.contact}
              </button>
            </div>

            {/* Mobile Social */}
            <div className="mt-3 flex items-center gap-6 border-t border-white/10 px-3 pt-4">
              <button
                type="button"
                onClick={() =>
                  window.open("https://github.com/BineetaDas", "_blank")
                }
                className="flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
              >
                <FaGithub size={19} />
                GitHub
              </button>

              <button
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/bineeta-das-03936a231/",
                    "_blank",
                  )
                }
                className="flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
              >
                <FaLinkedinIn size={19} />
                LinkedIn
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
