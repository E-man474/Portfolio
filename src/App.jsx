import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Footer from "./components/Footer";


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
      <Experience/>
      <Footer/>
      <Stats/>

    

    </div>
  );
}

export default App;