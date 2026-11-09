import { SiNextdotjs } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import Image from "next/image";

const orbitSkills = [
  { name: "Next.js", icon: "/images/icons/next.png" },
  { name: "Figma", icon: "/images/icons/figma.png" },
  { name: "Canva", icon: "/images/icons/canva.png" },
  {
    name: "Tailwind CSS",
    icon: "/images/icons/tailwind.png",
  },
  { name: "HTML5", icon: "/images/icons/html.png" },
  { name: "React", icon: "/images/icons/react.png", color: "#1E1E1E" },
  { name: "CSS3", icon: "/images/icons/css.png" },
  {
    name: "JavaScript",
    icon: "/images/icons/javascript.png",
    color: "#F7DF1E",
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Design & Prototyping",
    skills: ["Figma", "Canva", "UI Design", "Responsive Design"],
  },
  {
    title: "Tools & Workflow",
    skills: ["Git", "GitHub", "Vercel", "VS Code"],
  },
];

export default function ToolsSkills() {
  return (
    <section
      id="skills"
      className="overflow-hidden bg-[#FFF3E6] px-6 py-10 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
          03 — My Expertise
        </p>

        <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#381932] sm:text-2xl md:text-4xl">
          Tools & Skills
        </h2>

        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-10 mt-0 md:-mt-10">
          {/* LEFT: Skill information */}
          <div>
            <p className="max-w-xl text-sm md:text-base leading-8 text-[#705C6B] ">
              I combine frontend development with thoughtful interface design to
              build digital experiences that look good, feel intuitive, and work
              across screen sizes.
            </p>

            <div className="mt-10 space-y-7 cursor-pointer">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 font-sans text-lg font-semibold text-[#381932]">
                    {group.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#381932]/15 bg-white/60 px-4 py-2 text-sm text-[#563D50] transition duration-300 hover:-translate-y-1 hover:border-[#381932] hover:bg-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Rotating skills orbit */}
          <div className="relative flex min-h-[440px] items-center justify-center overflow-hidden md:min-h-[520px]">
            {/* Background glow */}
            <div className="orbit-glow absolute h-[280px] w-[280px] rounded-full md:h-[380px] md:w-[380px]" />

            {/* Outer ring */}
            <div className="absolute h-[280px] w-[280px] rounded-full border border-[#381932]/25 md:h-[380px] md:w-[380px]" />

            {/* Inner ring */}
            <div className="orbit-ring-inner absolute h-[210px] w-[210px] rounded-full border border-dashed border-[#381932]/15 md:h-[300px] md:w-[300px]" />

            {/* Inner ring */}
            <div className="orbit-ring-inner absolute h-[160px] w-[160px] rounded-full border border-dashed border-[#381932]/15 md:h-[220px] md:w-[220px]" />

            {/* Rotating orbit */}
            <div className="orbit-track absolute h-0 w-0">
              {orbitSkills.map((skill, index) => {
                const angleStep = 360 / orbitSkills.length;
                const angle = index * angleStep;

                return (
                  <div
                    key={skill.name}
                    className="orbit-node absolute"
                    style={{ "--angle": `${angle}deg` }}
                    title={skill.name}
                  >
                    {/* Counter rotation wrapper */}
                    <div className="orbit-icon-spin">
                      <div
                        className="orbit-icon-card"
                        style={{ backgroundColor: skill.color }}
                      >
                        <Image
                          src={skill.icon}
                          width={34}
                          height={34}
                          alt={skill.name}
                          className="h-7 w-7 md:h-8 md:w-8 object-contain"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center content */}
            <div className="relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-full bg-[#381932] text-center text-[#FFF3E6] shadow-xl md:h-40 md:w-40">
              <span className="font-heading text-2xl font-semibold md:text-3xl">
                Skills
              </span>
              <span className="mt-1 text-xs tracking-widest text-[#E6C9DB]">
                & TOOLS
              </span>
            </div>

            {/* Decorative dots */}
            <span className="absolute right-[12%] top-[12%] h-3 w-3 rounded-full bg-[#D5A9C5]" />
            <span className="absolute bottom-[13%] left-[12%] h-2 w-2 rounded-full bg-[#381932]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}
