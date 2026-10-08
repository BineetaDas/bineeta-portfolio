import {
  ArrowUpRight,
  
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 flex items-center gap-4 sm:mb-12">
          <span className="h-px w-10 bg-gradient-to-r from-primary to-secondary sm:w-12" />

          <p className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-xs font-semibold uppercase tracking-[0.25em] text-transparent">
            Contact
          </p>

          <span className="h-px flex-1 bg-border/60" />
        </div>

        {/* Main Contact Card */}
        <div className="relative overflow-hidden rounded-[2.25rem] border border-border/70 bg-card/60 p-7 backdrop-blur-xl sm:p-10 lg:p-12">
          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-secondary/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            {/* Left Content */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
                <MessageCircle
                  size={25}
                  strokeWidth={1.7}
                  className="text-primary"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                Let's Connect
              </p>

              <h2 className="mt-3 text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
                Have an idea?
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Let's talk.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
                I am open to learning opportunities, internships, and junior
                frontend developer opportunities. Feel free to connect with me.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:bineetadas7@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex min-w-0 items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Mail size={19} className="text-primary" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs text-muted">Email</p>

                    <p className="mt-1 truncate text-sm font-medium text-text">
                      bineetadas7@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+917980147937"
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Phone size={19} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">Phone</p>

                    <p className="mt-1 text-sm font-medium text-text">
                      +91 79801 47937
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/BineetaDas"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <FaGithub size={19} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">GitHub</p>

                    <p className="mt-1 text-sm font-medium text-text">
                      BineetaDas
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-border/60 bg-surface/60 p-4 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <LiaLinkedin size={19} className="text-primary" />
                  </div>

                  <div>
                    <p className="text-xs text-muted">LinkedIn</p>

                    <p className="mt-1 text-sm font-medium text-text">
                      Connect with me
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
