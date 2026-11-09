import {
  FiArrowUpRight,
  FiDribbble,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { FaBehance, FaPinterestP } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
];

const exploreLinks = [
  { label: "Design Projects", href: "#projects" },
  { label: "Development Projects", href: "#projects" },
  { label: "My Resume", href: "/resume.pdf" },
  { label: "Blogs", href: "#blogs" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kashmalaaslam/",
    icon: FiLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/KashmalaAslam",
    icon: FiGithub,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FiInstagram,
  },
  {
    label: "Dribbble",
    href: "https://dribbble.com/",
    icon: FiDribbble,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: FaBehance,
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/",
    icon: FaPinterestP,
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative overflow-hidden bg-[#1E1E1E] text-white"
    >
      <div className="grid min-h-[480px] lg:grid-cols-[74%_26%]">
        {/* Main Footer Content */}
        <div className="px-7 py-16 sm:px-12 md:px-16 lg:px-20">
          <div className="max-w-3xl">
            <h2 className="font-heading max-w-md text-2xl font-semibold leading-snug sm:text-3xl">
              Hire a Good Web Designer
              <br />
              and Developer Today
            </h2>

            <p className="mt-5 max-w-sm text-xs leading-relaxed text-white/65">
              High level experience in web design and development knowledge,
              producing quality work.
            </p>

            <a
              href="https://www.linkedin.com/in/kashmalaaslam/"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/70 px-4 py-2 text-[11px] transition-all duration-300 hover:bg-white hover:text-[#1E1E1E]"
            >
              Connect On LinkedIn
              <FiArrowUpRight size={13} />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="mt-12 grid max-w-md grid-cols-2 gap-10">
            <div>
              <h3 className="mb-5 text-sm font-semibold">Quick Links</h3>

              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[11px] text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-5 text-sm font-semibold">Explore More</h3>

              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[11px] text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px w-full bg-white/30" />

          {/* Social Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className="mr-1 text-sm font-semibold">Connect on</span>

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#1E1E1E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#FFF3E6]"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Decorative Right Panel */}
        <img src="/images/pattern.png" />
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-7 py-4 text-center sm:px-12 lg:px-20">
        <p className="text-[10px] text-white/45">
          © {new Date().getFullYear()} Kashmala Aslam. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
