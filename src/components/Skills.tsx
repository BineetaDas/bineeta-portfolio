import {
  Brush,
  Code2,
  Database,
  Globe2,
  Grid2X2,
  Languages,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { DiVisualstudio } from "react-icons/di";

import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";

import {
  SiFigma,
  SiGit,
  SiGithub,
  SiJquery,
  SiMui,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandAdobePhotoshop } from "react-icons/tb";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-28 lg:pt-12"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute right-[-120px] top-10 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 left-[-120px] h-80 w-80 rounded-full bg-secondary/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= SECTION HEADING ================= */}

        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Skills
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* ================= INTRO ================= */}

        <div className="mb-10 max-w-3xl">
          <p className="font-mono text-sm tracking-[0.2em] text-muted">
            MY TOOLKIT
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            Everything I use to{" "}
            <span className="bg-gradient-to-r from-primary via-sky-400 to-secondary bg-clip-text text-transparent">
              build and create.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            A growing collection of technologies, tools and design skills that
            shape my frontend development journey.
          </p>
        </div>

        {/* ================= SKILL GRID ================= */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {/* ================================================= */}
          {/* 01 - FRONTEND CORE */}
          {/* ================================================= */}

          <SkillCategory
            number="01"
            title="Frontend Core"
            description="Building responsive, modern and interactive user interfaces."
            icon={<Code2 size={20} />}
            iconColor="text-primary"
            containerClass="lg:col-span-3"
          >
            <SkillTag
              icon={<FaHtml5 size={17} />}
              text="HTML"
              color="text-[#E34F26]"
            />

            <SkillTag
              icon={<FaCss3Alt size={17} />}
              text="CSS"
              color="text-[#1572B6]"
            />

            <SkillTag
              icon={<FaJs size={17} />}
              text="JavaScript"
              color="text-[#F7DF1E]"
            />

            <SkillTag
              icon={<FaReact size={17} />}
              text="React.js"
              color="text-[#61DAFB]"
            />

            <SkillTag
              icon={<SiTypescript size={17} />}
              text="TypeScript"
              color="text-[#3178C6]"
            />

            <SkillTag
              icon={<SiJquery size={17} />}
              text="jQuery"
              color="text-[#0769AD]"
            />

            <SkillTag
              icon={<Smartphone size={16} />}
              text="Responsive Web Design"
              color="text-primary"
            />
          </SkillCategory>

          {/* ================================================= */}
          {/* 02 - FRAMEWORKS & STYLING */}
          {/* ================================================= */}

          <SkillCategory
            number="02"
            title="Frameworks & Styling"
            description="Designing modern, fluid and mobile-friendly layouts."
            icon={<Palette size={20} />}
            iconColor="text-secondary"
            containerClass="lg:col-span-3"
          >
            <SkillTag
              icon={<SiTailwindcss size={17} />}
              text="Tailwind CSS"
              color="text-[#06B6D4]"
            />

            <SkillTag
              icon={<FaBootstrap size={17} />}
              text="Bootstrap"
              color="text-[#7952B3]"
            />

            <SkillTag
              icon={<SiMui size={17} />}
              text="Material UI"
              color="text-[#007FFF]"
            />

            <SkillTag
              icon={<Grid2X2 size={16} />}
              text="Grid & Flexbox"
              color="text-primary"
            />

            <SkillTag
              icon={<Smartphone size={16} />}
              text="Mobile-First Layouts"
              color="text-secondary"
            />
          </SkillCategory>

          {/* ================================================= */}
          {/* 03 - DESIGN SOFTWARE */}
          {/* ================================================= */}

          <SkillCategory
            number="03"
            title="Design Software"
            description="UI/UX design, wireframing and visual interface creation."
            icon={<Brush size={20} />}
            iconColor="text-[#A259FF]"
            containerClass="lg:col-span-2"
          >
            <SkillTag
              icon={<SiFigma size={17} />}
              text="Figma"
              color="text-[#A259FF]"
            />

            <SkillTag
              icon={<TbBrandAdobePhotoshop size={17} />}
              text="Photoshop"
              color="text-[#31A8FF]"
            />

            <SkillTag
              icon={<FiFigma size={16} />}
              text="Clean UI Design"
              color="text-primary"
            />

            <SkillTag
              icon={<Sparkles size={16} />}
              text="Visual Aesthetics"
              color="text-secondary"
            />
          </SkillCategory>

          {/* ================================================= */}
          {/* 04 - TOOLS & APIS */}
          {/* ================================================= */}

          <SkillCategory
            number="04"
            title="Tools & APIs"
            description="Development tools, repository hosting and data integration."
            icon={<SiGithub size={20} />}
            iconColor="text-text"
            containerClass="lg:col-span-2"
          >
            <SkillTag
              icon={<SiGithub size={17} />}
              text="GitHub"
              color="text-text"
            />

            <SkillTag
              icon={<SiGit size={17} />}
              text="Git"
              color="text-[#F05032]"
            />

            <SkillTag
              icon={<DiVisualstudio size={17} />}
              text="VS Code"
              color="text-[#007ACC]"
            />

            <SkillTag
              icon={<Database size={17} />}
              text="LocalStorage"
              color="text-[#F59E0B]"
            />
          </SkillCategory>

          {/* ================================================= */}
          {/* 05 - LANGUAGES */}
          {/* ================================================= */}

          <SkillCategory
            number="05"
            title="Languages"
            description="Communication across multilingual environments."
            icon={<Languages size={20} />}
            iconColor="text-primary"
            containerClass="lg:col-span-2"
          >
            <SkillTag
              icon={<Languages size={17} />}
              text="Bengali (Native)"
              color="text-primary"
            />

            <SkillTag
              icon={<Globe2 size={17} />}
              text="English (Intermediate)"
              color="text-secondary"
            />

            <SkillTag
              icon={<Globe2 size={17} />}
              text="Hindi (Intermediate)"
              color="text-[#F59E0B]"
            />
          </SkillCategory>
        </div>

        {/* ================= BOTTOM NOTE ================= */}

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px w-8 bg-border sm:w-16" />

          <p className="text-center text-xs uppercase tracking-[0.18em] text-muted sm:text-sm">
            Always learning · Always improving
          </p>

          <div className="h-px w-8 bg-border sm:w-16" />
        </div>
      </div>
    </section>
  );
};

/* ========================================================= */
/* SKILL CATEGORY */
/* ========================================================= */

interface SkillCategoryProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
  containerClass?: string;
  children: React.ReactNode;
}

const SkillCategory = ({
  number,
  title,
  description,
  icon,
  iconColor,
  containerClass = "",
  children,
}: SkillCategoryProps) => {
  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 sm:p-7 ${containerClass}`}
    >
      {/* Card Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-primary/5 blur-[75px] opacity-70 transition-all duration-500 group-hover:bg-primary/10" />

      <div className="relative">
        {/* Header */}

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-semibold text-primary">
              {number}
            </p>

            <h3 className="mt-2 text-xl font-bold text-text sm:text-2xl">
              {title}
            </h3>
          </div>

          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface/70 ${iconColor}`}
          >
            {icon}
          </div>
        </div>

        {/* Description */}

        <p className="mt-3 max-w-md text-sm leading-6 text-muted sm:text-[15px]">
          {description}
        </p>

        {/* Divider */}

        <div className="mt-6 h-px bg-border/60" />

        {/* Tags */}

        <div className="mt-5 flex flex-wrap gap-2.5">{children}</div>
      </div>
    </div>
  );
};

/* ========================================================= */
/* SKILL TAG */
/* ========================================================= */

interface SkillTagProps {
  text: string;
  color: string;
  icon?: React.ReactNode;
}

const SkillTag = ({ text, color, icon }: SkillTagProps) => {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-xl border border-border/70 bg-surface/60 px-3 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary/5 sm:text-sm ${color}`}
    >
      {icon}

      <span className="text-text">{text}</span>
    </span>
  );
};

export default Skills;
