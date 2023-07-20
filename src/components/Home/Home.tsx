import About from "../About/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div>
      <div style={{ height: "100%", width: "100%" }}>
        <h3>Hi I´m Guillermina</h3>
        <h1>Full Stack Developer</h1>
        <a
          href="https://docs.google.com/document/d/1JAcvrJwgtZvf6ujYA_1T7qD6mKM_j9GUuUjL7aMO4F8/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>This is my CV</button>
        </a>
      </div>
      <div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
