import { CalendarDays, GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2021 – 2024",
    degree: "B.Sc. IT – Cloud Technology and Information Security",
    institution: "Techno India University",
    percentage: "80.56%",
  },
  {
    year: "2020 – 2021",
    degree: "Higher Secondary Education",
    institution: "Bishnupur Sir Ramesh Institution (H.S)",
    percentage: "88.6%",
  },
  {
    year: "2018 – 2019",
    degree: "Secondary Education",
    institution: "Ambica Soudamini Balika Vidyalaya (H.S)",
    percentage: "85.57%",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="px-4 pb-20 pt-8 sm:px-6 sm:pb-24 sm:pt-10 lg:px-8 lg:pb-28 lg:pt-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Same heading style as your other sections */}
        <div className="mb-10 sm:mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Education
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
            My Education
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.7fr] lg:gap-16">
          {/* Left Side */}
          <div className="h-fit rounded-3xl border border-border bg-card/50 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-primary">
              <GraduationCap size={28} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-text">
              Academic Journey
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              My academic journey has given me a strong foundation in technology
              and helped shape my interest in frontend development and creating
              digital experiences.
            </p>

            <div className="mt-7 rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-xs uppercase tracking-[0.18em] text-muted">
                Highest Qualification
              </p>

              <p className="mt-2 text-lg font-semibold text-text">B.Sc. IT</p>

              <p className="mt-1 text-sm text-muted">
                Cloud Technology & Information Security
              </p>
            </div>
          </div>

          {/* Right Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute bottom-6 left-[11px] top-6 w-px bg-border sm:left-[15px]" />

            <div className="space-y-7 sm:space-y-8">
              {educationData.map((education, index) => (
                <div key={education.degree} className="relative pl-9 sm:pl-12">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card sm:h-8 sm:w-8">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-3xl border border-border bg-card/60 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/80 sm:p-7">
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={16}
                        className="text-primary"
                        strokeWidth={1.8}
                      />

                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary sm:text-sm">
                        {education.year}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold leading-snug text-text sm:text-2xl">
                      {education.degree}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                      {education.institution}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <div className="rounded-xl border border-border bg-surface/70 px-4 py-2.5">
                        <p className="text-[11px] uppercase tracking-wider text-muted">
                          Percentage
                        </p>

                        <p className="mt-1 text-sm font-semibold text-text">
                          {education.percentage}
                        </p>
                      </div>

                      <div className="rounded-xl border border-primary/20 bg-primary/5 px-4 py-2.5">
                        <p className="text-[11px] uppercase tracking-wider text-muted">
                          Status
                        </p>

                        <p className="mt-1 text-sm font-semibold text-primary">
                          Completed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Number */}
                  <span className="absolute -left-1 top-[4.5rem] hidden text-[10px] font-medium text-muted sm:block">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
