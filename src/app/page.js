import NavBar from "@/app/components/layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import ToolsSkills from "./sections/Tools-Skills";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <ToolsSkills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
