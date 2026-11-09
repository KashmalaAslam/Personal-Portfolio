import { FaGraduationCap, FaHeart, FaLaptop } from "react-icons/fa";
import Image from "next/image";

const aboutDetails = [
  {
    icon: FaGraduationCap,
    title: "BS Computer Science",
    description: "National Textile University",
    extra: "CGPA 3.93/4",
    img: "/images/degree.png",
  },
  {
    icon: FaHeart,
    title: "Frontend + UI Design",
    description: "Web development, UI/UX",
    extra: "Visual design",
    img: "/images/heart.png",
  },
  {
    icon: FaLaptop,
    title: "Web & Mobile",
    description: "Responsive, accessible,",
    extra: "modern experiences",
    img: "/images/responsive.png",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#FFF3E6] px-5 py-3 md:pt-20 md:pb-28">
      <div className="max-w-300 mx-auto">
        {/* Section Heading */}
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
          01 — My Self
        </p>

        <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#381932] sm:text-2xl md:text-4xl">
          About Me
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-18 items-center mt-6">
          {/* Introduction */}
          <div>
            <p className="font-sans text-sm md:text-base leading-relaxed text-[#381932] text-justify max-w-xl">
              I'm Kashmala Aslam, a Computer Science graduate with a 3.93/4.00
              CGPA and a passion for creating meaningful digital experiences. My
              journey combines frontend development with visual design, allowing
              me to approach projects from both a technical and creative
              perspective. I enjoy transforming ideas into clean, intuitive
              interfaces and bringing them to life through modern web
              technologies. <br />
              From designing layouts in Figma to developing responsive websites
              using React and Next.js, I focus on creating experiences that are
              visually appealing, functional, and user-friendly. I'm
              continuously exploring new ideas, refining my skills, and looking
              for opportunities to build digital products that make a
              difference.
            </p>
          </div>

          {/* About Details */}
          <div className="md:border-l border-[#381932]/40 md:pl-14 flex flex-col gap-7">
            {aboutDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-5 ">
                  {/* Icon */}
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#381932] flex items-center justify-center">
                    {/* <Icon className="text-[#FFF3E6] text-lg" /> */}
                    <Image
                      width={28}
                      height={28}
                      src={item.img}
                      alt="icons"
                    ></Image>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="font-sans text-base font-semibold text-[#381932]">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-[#381932]">
                      {item.description}
                    </p>

                    <p className="font-sans text-sm text-[#381932]">
                      {item.extra}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
