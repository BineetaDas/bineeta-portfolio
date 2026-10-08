import {
  Code2,
  Layers3,
  PlugZap,
  MonitorSmartphone,
  GitBranch,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "I can create responsive and interactive user interfaces using HTML, CSS, JavaScript, TypeScript, React, Tailwind CSS, Bootstrap, and Material UI.",
    icon: Code2,
    number: "01",
  },
  {
    title: "UI Development",
    description:
      "I can build clean, modern, and responsive interfaces using reusable components with a focus on consistency and user experience.",
    icon: Layers3,
    number: "02",
  },
  {
    title: "API Integration",
    description:
      "I can integrate external APIs and display dynamic data in React applications using clean and reusable components.",
    icon: PlugZap,
    number: "03",
  },
  {
    title: "Responsive Web Design",
    description:
      "I can create responsive websites that adapt smoothly across desktop, tablet, and mobile devices.",
    icon: MonitorSmartphone,
    number: "04",
  },
  {
    title: "Git & Development Tools",
    description:
      "I can work with Git, GitHub, VS Code, and other development tools to build, manage, and maintain web projects.",
    icon: GitBranch,
    number: "05",
  },
];

const WhatICanDo = () => {
  return (
    <section
      id="what-i-can-do"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            What I Can Do
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* Intro */}
        <div className="mb-10 max-w-3xl sm:mb-12">
          <h2 className="text-3xl font-semibold leading-tight text-text sm:text-4xl lg:text-5xl">
            Turning ideas into
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              functional interfaces.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            I focus on building responsive, clean, and user-friendly web
            experiences while continuously improving my frontend development
            skills.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`
                  group relative overflow-hidden rounded-[1.75rem]
                  border border-border/70
                  bg-card/60
                  p-6
                  backdrop-blur-xl
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-primary/30
                  hover:bg-card/80
                  sm:p-7
                  ${index === 0 ? "lg:col-span-2" : ""}
                `}
              >
                {/* Background Number */}
                <span className="pointer-events-none absolute -right-3 -top-6 text-8xl font-bold text-primary/[0.04]">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="relative mb-7 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/15">
                    <Icon
                      size={23}
                      strokeWidth={1.7}
                      className="text-primary"
                    />
                  </div>

                  <span className="text-xs font-medium tracking-[0.18em] text-muted">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-semibold text-text transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-muted sm:text-[15px]">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="mt-7 h-px w-full bg-border/50">
                  <div className="h-px w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-hover:w-20" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatICanDo;
