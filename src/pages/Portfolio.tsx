import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

import WhatICanDo from "../components/WhatICanDo";
import LearningJourney from "../components/LearningJourney";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import GithubProjects from "../components/GithubProjects";

const Portfolio = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Education />

        <Skills />

        <Projects />

        <GithubProjects />

        <WhatICanDo />

        <LearningJourney />

        <Contact />
      </main>

      <Footer />
    </>
  );
};

export default Portfolio;
