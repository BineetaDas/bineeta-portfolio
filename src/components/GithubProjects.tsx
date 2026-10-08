import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, LoaderCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import GithubProjectCard from "./GithubProjectCard";

import "swiper/css";
import type { GithubRepository } from "../types/interface/github.interface";
import { FaGithub } from "react-icons/fa";

const GithubProjects = () => {
  const [projects, setProjects] = useState<GithubRepository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const getGithubProjects = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://api.github.com/users/BineetaDas/repos?per_page=100",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub projects");
        }

        const data: GithubRepository[] = await response.json();

        const filteredProjects = data
          .filter((project) => !project.fork)
          .sort(
            (a, b) =>
              new Date(b.updated_at).getTime() -
              new Date(a.updated_at).getTime(),
          );

        setProjects(filteredProjects);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong",
        );
      } finally {
        setLoading(false);
      }
    };

    getGithubProjects();
  }, []);

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-28 lg:pt-12"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/8 blur-[120px]" />

      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-secondary/8 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Projects
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* Main Heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            MY WORK
          </p>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            Projects I&apos;ve built{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              on GitHub.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            A collection of my development projects and repositories, fetched
            directly from GitHub.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-[320px] items-center justify-center">
            <div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-5 py-4 backdrop-blur-xl">
              <LoaderCircle size={20} className="animate-spin text-primary" />

              <span className="text-sm text-muted">Loading projects...</span>
            </div>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mt-10 rounded-3xl border border-border bg-card/60 p-8 text-center backdrop-blur-xl">
            <FaGithub size={30} className="mx-auto text-muted" />

            <p className="mt-4 text-sm text-muted">{error}</p>
          </div>
        )}

        {/* Projects Slider */}
        {!loading && !error && projects.length > 0 && (
          <div className="mt-10">
            <Swiper
              modules={[Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loop={projects.length > 3}
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
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <GithubProjectCard {...project} />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Bottom Arrows */}
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/70 text-muted backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label="Previous project"
              >
                <ArrowLeft size={17} />
              </button>

              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/70 text-muted backdrop-blur-xl transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                aria-label="Next project"
              >
                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        )}

        {/* No Projects */}
        {!loading && !error && projects.length === 0 && (
          <div className="mt-10 rounded-3xl border border-border bg-card/60 p-10 text-center backdrop-blur-xl">
            <FaGithub size={30} className="mx-auto text-muted" />

            <p className="mt-4 text-sm text-muted">No GitHub projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubProjects;
