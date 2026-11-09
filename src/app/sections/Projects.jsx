import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "DevBoard",
    category: "Frontend / Next.js / Tailwind",
    description:
      "A modern dashboard interface designed to simplify project management.",
    image: "/images/01.png",
    // technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    link: "https://devboard-gamma-five.vercel.app/",
  },
  {
    title: "Campus Bite",
    category: "UI design / Mobile ",
    description:
      "A clean and intuitive interface focused on usability and visual consistency.",
    image: "/images/02.png",
    // technologies: ["Figma", "UI Design"],
    link: "#",
  },
  {
    title: "Vizmart",
    category: "Full Stack - Next.js, Flask.js",
    description:
      "An AI-driven e-commerce platform developed as my final year project.",
    image: "/images/03.png",
    // technologies: ["React", "JavaScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Al-Khalid Academy",
    category: "Social Media & Visual Design",
    description:
      "A responsive web experience built with attention to detail and accessibility.",
    image: "/images/04.png",
    // technologies: ["React", "Tailwind CSS"],
    link: "#",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="group bg-[#FFF3F6] shadow-md shadow-mauve-300 rounded-xl w-[290px] border-b-[5px]">
      {/* Project Image */}
      <div className="relative w-full aspect-16/10 overflow-hidden rounded-t-xl bg-[#F1E4D7]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* Project Information */}
      <div className="mt-5 flex items-start justify-between gap-3 px-4">
        <div>
          <h3 className="font-sans text-base font-bold text-[#381932] ">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-[#381932]/60 mb-8">
            {project.category}
          </p>

          {/* <p className="font-sans text-sm text-[#381932]/75 my-2 mb-4 max-w-md leading-relaxed">
            {project.description}
          </p> */}

          {/* Technologies */}
          {/* <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs border border-[#381932]/30 text-[#381932] px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div> */}
        </div>

        {/* Project Link */}
        <Link
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          className="shrink-0 w-8.5 h-8.5 rounded-full border border-[#381932]/40 bg-[#381932] flex items-center justify-center transition"
          aria-label={`View ${project.title}`}
        >
          <MdArrowForward size={20} className="text-[#FFF3F6]" />
        </Link>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#FFF3E6] px-5 py-20 md:py-28">
      <div className="max-w-300 mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
              02 — My Journey
            </p>

            <div className="flex justify-between">
              <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#381932] sm:text-2xl md:text-4xl">
                Selected Projects
              </h2>
              <Link
                href={"/"}
                className="text-xs text-[#381932]  flex gap-1 underline"
              >
                <p>View All Projects</p>{" "}
                <MdArrowForward className="-ml-0.5 mt-1" />
              </Link>
            </div>
          </div>

          <p className="font-sans text-sm md:text-base text-[#381932]/75 mt-4 max-w-2xl">
            A collection of projects where creativity meets functionality.
            Exploring ideas through thoughtful design and frontend development.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-2 gap-y-14">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
