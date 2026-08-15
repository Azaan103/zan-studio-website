import Intro from "./components/Intro";
import OSBar from "./components/OSBar";
import FloatingNav from "./components/FloatingNav";
import Hero from "./components/Hero";
import PacmanDivider from "./components/PacmanDivider";
import Certification from "./components/Certification";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Intro />
      <OSBar />
      <FloatingNav />

      <main>
        <Hero />
        <Certification />
        <About />
        <PacmanDivider />
        <Services />
        <Projects />
                <PacmanDivider />

        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
