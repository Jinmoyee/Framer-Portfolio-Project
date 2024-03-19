import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import MouseCursor from "./components/corsor/MouseCursor";
import MyProjects from "./components/myProjects/MyProjects";

function App() {
  return (
    <div>
      <MouseCursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="skills" />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <MyProjects />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
