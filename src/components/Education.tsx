import { CalendarDays, GraduationCap, MapPin, Award } from "lucide-react";

const educationData = [
  {
    year: "2021 – 2024",
    degree: "B.Sc. IT – Cloud Technology and Information Security",
    institution: "Techno India University",
    location: "Kolkata",
    percentage: "80.56%",
    status: "Completed",
  },
  {
    year: "2020 – 2021",
    degree: "Higher Secondary Education",
    institution: "Bishnupur Sir Ramesh Institution (H.S)",
    location: "Kolkata",
    percentage: "88.6%",
    status: "Completed",
  },
  {
    year: "2018 – 2019",
    degree: "Secondary Education",
    institution: "Ambica Soudamini Balika Vidyalaya (H.S)",
    location: "Kolkata",
    percentage: "85.57%",
    status: "Completed",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Education
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-24">
            <div className="rounded-[2rem] border border-border/70 bg-card/60 p-7 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <GraduationCap
                  size={28}
                  strokeWidth={1.7}
                  className="text-primary"
                />
              </div>

              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-muted">
                My Academic Journey
              </p>

              <h2 className="max-w-md text-3xl font-semibold leading-tight text-text sm:text-4xl">
                Learning that shaped
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  my journey.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-muted sm:text-base">
                My academic background helped me build a strong foundation in
                technology while developing an interest in web development and
                modern user interfaces.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div
            className="
              relative max-h-[560px] overflow-y-auto
              pr-2
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            <div className="relative pl-8 sm:pl-10">
              {/* Vertical Line */}
              <div className="absolute bottom-5 left-[9px] top-5 w-px bg-gradient-to-b from-primary via-secondary/60 to-border sm:left-[11px]" />

              <div className="space-y-6">
                {educationData.map((education) => (
                  <div key={education.degree} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute -left-8 top-7 flex h-[19px] w-[19px] items-center justify-center rounded-full border border-primary/40 bg-card sm:-left-10 sm:h-[23px] sm:w-[23px]">
                      <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(34,197,180,0.5)] sm:h-2.5 sm:w-2.5" />
                    </div>

                    {/* Education Card */}
                    <div
                      className="
                        group rounded-[1.75rem]
                        border border-border/70
                        bg-card/65
                        p-5
                        backdrop-blur-xl
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:border-primary/30
                        hover:bg-card/80
                        sm:p-6
                      "
                    >
                      {/* Top Row */}
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5">
                          <CalendarDays size={14} className="text-primary" />

                          <span className="text-xs font-medium text-primary">
                            {education.year}
                          </span>
                        </div>

                        <span className="rounded-full border border-border/60 bg-surface/70 px-3 py-1.5 text-xs text-muted">
                          {education.status}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="max-w-2xl text-xl font-semibold leading-snug text-text transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                        {education.degree}
                      </h3>

                      {/* Institution */}
                      <p className="mt-3 text-sm font-medium text-muted sm:text-base">
                        {education.institution}
                      </p>

                      {/* Bottom Information */}
                      <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/50 pt-5">
                        <div className="flex items-center gap-2 rounded-xl bg-surface/70 px-3 py-2">
                          <MapPin size={15} className="text-primary" />

                          <span className="text-xs text-muted">
                            {education.location}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 rounded-xl bg-surface/70 px-3 py-2">
                          <Award size={15} className="text-secondary" />

                          <span className="text-xs font-semibold text-text">
                            {education.percentage}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
