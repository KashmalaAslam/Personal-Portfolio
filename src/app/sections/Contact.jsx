import { FiArrowUpRight, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FFF3E6] px-6 py-20 sm:px-10 md:px-16 lg:px-20"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#381932]/55">
            05 — Stay in touch
          </p>

          <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight text-[#381932] sm:text-2xl md:text-4xl">
            Let's Connect
          </h2>

          <p className="mt-14 max-w-lg text-sm leading-6 text-[#1f1f1f] sm:text-base sm:leading-7">
            Have an <strong>idea?</strong> Let's turn it into something
            beautiful and functional. I'm always open to exciting projects,
            creative collaborations and opportunities to grow.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/kashmalaaslam"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#381932] px-6 py-3 text-sm font-medium text-[#FFF3E6] transition-all duration-300 hover:-translate-y-1 hover:bg-[#512449]"
            >
              Let’s Connect
              <FiArrowUpRight
                size={17}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="mailto:kashmalaaslam1058@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-[#381932]/60 bg-white px-6 py-3 text-sm font-medium text-[#381932] transition-all duration-300 hover:-translate-y-1 hover:bg-[#381932] hover:text-white"
            >
              <FiMail size={16} />
              Email Me
            </a>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="flex items-center justify-center">
          <img
            src="/images/connect.png"
            alt="Character illustration"
            className="h-64 w-auto object-contain sm:h-72 md:h-110"
          />
        </div>
      </div>
    </section>
  );
}
