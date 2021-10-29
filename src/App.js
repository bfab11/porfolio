import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Skills from "./components/skills/Skills";
import Menu from "./components/menu/Menu";
import Works from "./components/works/Works";

import { useState } from "react";

import "./app.scss";

function App() {
  const [ menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About />
        <Skills />
        <Projects />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
