const experiences = [
  {
    role: "Teaching Assistant",
    company: "National Textile University",
    date: "2024",
    type: "Academic",
    description:
      "Assisted students in Programming Fundamentals and C++, strengthening their understanding of core programming concepts.",
    number: "01",
  },
  {
    role: "MERN Stack Developer",
    company: "Cyverix",
    date: "2024 – 2025",
    type: "Development",
    description:
      "Gained practical experience with modern web development and MERN stack technologies.",
    number: "02",
  },
  {
    role: "Frontend Web Developer",
    company: "KaiRiz",
    date: "2025",
    type: "Development",
    description:
      "Worked on frontend development, translating ideas into responsive and functional web interfaces.",
    number: "03",
  },
  {
    role: "QA Engineer Intern",
    company: "Rabbito",
    date: "2025",
    type: "Quality Assurance",
    description:
      "Explored software testing workflows, identifying interface issues and improving product quality.",
    number: "04",
  },
  {
    role: "CTI Lecturer",
    company: "Govt. Associate College for Women",
    date: "2025 – 2026",
    type: "Teaching",
    description:
      "Taught Computer Science and ICT, guided students through programming fundamentals, and developed practical learning activities.",
    number: "05",
  },
  {
    role: "Data Fellow",
    company: "DataCamp Donates",
    date: "11 Jul – 11 Nov 2026",
    type: "Fellowship",
    description:
      "Selected for a fellowship involving data learning, practical projects and collaborative capstone work.",
    number: "06",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="overflow-hidden bg-[#FFF3E6] px-6 py-10 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
            04 — My Journey
          </p>

          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#381932] sm:text-2xl md:text-4xl">
            Experience & Journey
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-[#381932]/65">
            Every experience has been a step forward — from teaching and
            learning to developing digital experiences and exploring new
            technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Mobile Vertical Line */}
          <div className="absolute bottom-2 left-[3px] top-2 w-px bg-[#381932]/40 xl:hidden" />

          {/* Desktop Horizontal Line */}
          <div className="absolute left-[8.333333%] right-[8.333333%] top-1/2 hidden h-px -translate-y-1/2 bg-[#381932]/40 xl:block" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-8 xl:grid xl:min-h-[300px] xl:grid-cols-6 xl:gap-0">
            {experiences.map((item, index) => {
              const isAbove = index % 2 === 0;

              return (
                <div
                  key={item.number}
                  className="group relative pl-8 xl:min-h-[510px] xl:pl-0"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 z-20 flex h-[8px] w-[8px] items-center justify-center rounded-full bg-[#381932] ring-[5px] ring-[#FFF3E6] transition-all duration-300 group-hover:scale-150 xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2">
                    <span className="h-[3px] w-[3px] rounded-full bg-[#FFF3E6]" />
                  </div>

                  {/* Experience Card */}
                  <article
                    className={`
                      relative rounded-2xl border border-[#381932]/10
                      bg-white/65 p-5
                      shadow-[0_5px_25px_rgba(56,25,50,0.05)]
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-[#381932]/30
                      hover:bg-white/90
                      hover:shadow-[0_12px_30px_rgba(56,25,50,0.10)]
                      xl:absolute xl:left-2 xl:right-2
                      ${
                        isAbove
                          ? "xl:bottom-[calc(50%+30px)]"
                          : "xl:top-[calc(50%+30px)]"
                      }
                    `}
                  >
                    {/* Card Top */}
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-widest text-[#381932]/35">
                        {item.number}
                      </span>

                      <span className="rounded-full bg-[#381932]/[0.07] px-2.5 py-1 text-[9px] font-medium tracking-wide text-[#381932]/75">
                        {item.type}
                      </span>
                    </div>

                    {/* Role */}
                    <h3 className="font-heading text-base font-semibold leading-snug text-[#381932]">
                      {item.role}
                    </h3>

                    {/* Organization */}
                    <p className="mt-2 text-xs font-medium leading-relaxed text-[#381932]/65">
                      {item.company}
                    </p>

                    {/* Description */}
                    {/* <p className="mt-4 text-xs leading-[1.8] text-[#381932]/65">
                      {item.description}
                    </p> */}

                    {/* Date */}
                    <div className="mt-5 flex items-center justify-between border-t border-[#381932]/10 pt-3">
                      <span className="text-[10px] font-semibold tracking-wide text-[#381932]">
                        {item.date}
                      </span>

                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#381932] text-[#FFF3E6] transition-transform duration-300 group-hover:rotate-45">
                        <span className="text-xs">↗</span>
                      </span>
                    </div>

                    {/* Desktop Card Connector */}
                    <div
                      className={`
                        absolute left-1/2 hidden h-[30px] w-px
                        -translate-x-1/2 bg-[#381932]/30
                        xl:block
                        ${isAbove ? "top-full" : "bottom-full"}
                      `}
                    />
                  </article>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 flex items-center gap-3">
          <div className="h-px w-10 bg-[#381932]/30" />
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#381932]/50">
            Always learning. Always building.
          </p>
        </div>
      </div>
    </section>
  );
}
