import { CalendarDays, GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2021 – 2024",
    degree: "B.Sc. IT",
    specialization: "Cloud Technology and Information Security",
    institution: "Techno India University",
    percentage: "80.56%",
  },
  {
    year: "2020 – 2021",
    degree: "Higher Secondary Education",
    specialization: "Class 12",
    institution: "Bishnupur Sir Ramesh Institution (H.S)",
    percentage: "88.6%",
  },
  {
    year: "2018 – 2019",
    degree: "Secondary Education",
    specialization: "Class 10",
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
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Education
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* Title */}
        <div className="mb-10 sm:mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl lg:text-5xl">
            My Education
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            My academic journey and qualifications.
          </p>
        </div>

        {/* Education Content */}
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.75fr] lg:gap-16">
          {/* Left Side */}
          <div className="h-fit rounded-3xl border border-border bg-card/50 p-6 backdrop-blur-xl sm:p-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-primary">
              <GraduationCap size={28} strokeWidth={1.8} />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-text">
              Academic Journey
            </h3>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              My academic journey has helped me build a strong foundation in
              technology, problem solving, and frontend development.
            </p>

            {/* Highest Qualification */}
            <div className="mt-7 rounded-2xl border border-border bg-surface/60 p-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
                Highest Qualification
              </p>

              <p className="mt-2 text-lg font-semibold text-text">B.Sc. IT</p>

              <p className="mt-1 text-sm leading-6 text-muted">
                Cloud Technology & Information Security
              </p>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs text-muted">Percentage</span>

                <span className="text-sm font-semibold text-primary">
                  80.56%
                </span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute bottom-8 left-[11px] top-8 w-px bg-border sm:left-[15px]" />

            {/* Scrollable Timeline - Scrollbar Hidden */}
            <div className="max-h-[520px] overflow-y-auto pr-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:max-h-[560px]">
              <div className="space-y-8">
                {educationData.map((education, index) => (
                  <div
                    key={education.degree}
                    className="relative pl-9 sm:pl-12"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-7 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-card sm:h-8 sm:w-8">
                      <span className="h-2.5 w-2.5 rounded-full bg-primary sm:h-3 sm:w-3" />
                    </div>

                    {/* Education Card */}
                    <div className="group rounded-3xl border border-border bg-card/50 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card/70 sm:p-7">
                      {/* Year */}
                      <div className="flex items-center gap-2">
                        <CalendarDays
                          size={16}
                          className="text-primary"
                          strokeWidth={1.8}
                        />

                        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary sm:text-sm">
                          {education.year}
                        </span>
                      </div>

                      {/* Degree */}
                      <h3 className="mt-4 text-xl font-semibold leading-snug text-text sm:text-2xl">
                        {education.degree}
                      </h3>

                      {/* Specialization */}
                      <p className="mt-2 text-sm font-medium leading-6 text-text/80 sm:text-base">
                        {education.specialization}
                      </p>

                      {/* Institution */}
                      <p className="mt-2 text-sm leading-6 text-muted sm:text-base">
                        {education.institution}
                      </p>

                      {/* Percentage */}
                      <div className="mt-5 inline-flex items-center gap-3 rounded-xl border border-border bg-surface/60 px-4 py-2.5">
                        <span className="text-xs text-muted">Percentage</span>

                        <span className="text-sm font-semibold text-text">
                          {education.percentage}
                        </span>
                      </div>

                      {/* Status */}
                      <div className="mt-5 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                        <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                          Completed
                        </span>
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
      </div>
    </section>
  );
};

export default Education;
