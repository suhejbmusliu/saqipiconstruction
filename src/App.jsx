import "./styles/global.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Process from "./sections/Process";
import Gallery from "./sections/Gallery";
import About from "./sections/About";
import Stats from "./sections/Stats";
import FeaturedProjects from "./sections/FeaturedProjects";
import WhyChoose from "./sections/WhyChoose";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Gallery />
        <About />
        <Stats />
        <FeaturedProjects />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
