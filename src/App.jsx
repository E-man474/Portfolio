import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-[#050816] text-white overflow-hidden">

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Services />

      <Contact />

    

    </div>
  );
}

export default App;