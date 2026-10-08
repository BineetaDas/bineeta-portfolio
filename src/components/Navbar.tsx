import { useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "github-projects", label: "GitHub Projects" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMenuOpen(false);
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
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="relative mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#101a32]/45 px-5 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-6">
        {/* Logo */}
        <button
          type="button"
          onClick={() => scrollToSection("home")}
          className="group shrink-0 text-lg font-extrabold tracking-[0.18em] text-text transition-colors duration-300 hover:text-primary"
        >
          BINEETA
          <span className="text-primary transition-colors duration-300 group-hover:text-primary-hover">
            .
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className="whitespace-nowrap text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={openGithub}
            aria-label="GitHub"
            className="text-muted transition-colors duration-300 hover:text-primary"
          >
            <FaGithub size={20} />
          </button>

          <button
            type="button"
            onClick={openLinkedin}
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-300 hover:text-primary"
          >
            <FaLinkedinIn size={20} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          className="text-muted transition-colors duration-300 hover:text-primary lg:hidden"
        >
          {isMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-[4.5rem] rounded-2xl border border-white/10 bg-[#101a32]/90 p-4 shadow-[0_15px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="rounded-xl px-3 py-3 text-left text-sm font-medium text-muted transition-colors duration-300 hover:bg-primary/5 hover:text-primary"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Social */}
            <div className="mt-3 flex items-center gap-6 border-t border-white/10 px-3 pt-4">
              <button
                type="button"
                onClick={openGithub}
                className="flex items-center gap-2 text-sm font-medium text-muted transition-colors duration-300 hover:text-primary"
              >
                <FaGithub size={19} />
                GitHub
              </button>

              <button
                type="button"
                onClick={openLinkedin}
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
