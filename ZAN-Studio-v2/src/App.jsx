import Intro from "./components/Intro";
import OSBar from "./components/OSBar";
import FloatingNav from "./components/FloatingNav";
import Availability from "./components/Availability";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Process from "./components/Process";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Packages from "./components/Packages";
import Faq from "./components/Faq";
import StartProject from "./components/StartProject";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Intro />
      <OSBar />
      <FloatingNav />
      <Availability floating />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Projects />
        <About />
        <Process />
        <Reviews />
        <Packages />
        <Faq />
        <StartProject />
      </main>
      <Footer />
    </>
  );
}
