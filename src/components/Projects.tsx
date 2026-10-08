import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "MediFind",
    description:
      "A responsive hospital management website focused on clean UI, structured layouts, and user-friendly navigation.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    image: "/project-placeholder.png",
    githubUrl: "https://github.com/BineetaDas",
    liveUrl: "https://bineetadas.github.io/medifind/",
  },
  {
    id: 2,
    title: "Savora",
    description:
      "A modern fine dining restaurant website with a responsive layout and elegant visual presentation.",
    technologies: ["HTML5", "Tailwind CSS", "jQuery", "Responsive Design"],
    image: "/project-placeholder.png",
    githubUrl: "https://github.com/BineetaDas",
    liveUrl: "https://bineetadas.github.io/SAVORA/",
  },
  {
    id: 3,
    title: "CabinetMark LLC",
    description:
      "A responsive e-commerce website designed with structured product sections and interactive frontend elements.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "jQuery"],
    image: "/project-placeholder.png",
    githubUrl: "https://github.com/BineetaDas",
    liveUrl: "https://bineetadas.github.io/CABINETMARK-LLC-UPDATED-/",
  },
  {
    id: 4,
    title: "Interactive React Application",
    description:
      "A React-based interactive application built with TypeScript, Vite, and Tailwind CSS.",
    technologies: ["React.js", "TypeScript", "Vite", "Tailwind CSS"],
    image: "/project-placeholder.png",
    githubUrl: "https://github.com/BineetaDas",
    liveUrl: "https://react-first-assignment-using-usesta.vercel.app/",
  },
  {
    id: 5,
    title: "EVNIVA",
    description:
      "An experience and entertainment booking platform currently being developed with a modern React-based frontend.",
    technologies: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
    ],
    image: "/project-placeholder.png",
    githubUrl: "https://github.com/BineetaDas",
    liveUrl: "https://evniva-experience-booking-platform.vercel.app/",
  },
];

const Projects = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-12 lg:px-8 lg:pb-28 lg:pt-14"
    >
      {/* Background Glows */}
      <div className="pointer-events-none absolute left-[-120px] top-20 h-80 w-80 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-100px] h-72 w-72 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Projects
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* Intro */}
        <div className="max-w-3xl">
          <p className="font-mono text-sm tracking-[0.2em] text-muted">
            SELECTED WORK
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            Things I&apos;ve{" "}
            <span className="bg-gradient-to-r from-primary via-sky-400 to-secondary bg-clip-text text-transparent">
              built along the way.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            A selection of projects where I explored responsive design,
            interactive interfaces, and modern frontend technologies.
          </p>
        </div>

        {/* Slider Area */}
        <div className="relative mt-14 px-0 sm:mt-16 sm:px-5 lg:mt-18 lg:px-8">
          {/* Slider Arrows */}
          <div className="absolute -top-12 right-0 z-30 flex items-center gap-2 sm:-top-14 sm:right-5 lg:right-8">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous project"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/80 text-muted shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              <ArrowLeft size={17} />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next project"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/80 text-muted shadow-lg backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
            >
              <ArrowRight size={17} />
            </button>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Pagination, Autoplay]}
            spaceBetween={18}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-14 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:flex [&_.swiper-pagination]:items-center [&_.swiper-pagination]:justify-center [&_.swiper-pagination-bullet]:!mx-1 [&_.swiper-pagination-bullet]:!h-1.5 [&_.swiper-pagination-bullet]:!w-1.5 [&_.swiper-pagination-bullet]:!bg-muted [&_.swiper-pagination-bullet]:!opacity-40 [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!bg-primary [&_.swiper-pagination-bullet-active]:!opacity-100"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className="!h-auto">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
