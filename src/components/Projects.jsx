import { useEffect, useRef, useState } from "react";

function Projects() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    { title: "Expense Tracker", image: "assets/project1.PNG", tag: "Full Stack" },
    { title: "Ecommerce Store", image: "assets/project2.PNG", tag: "React JS" },
    { title: "Figma Website", image: "assets/project3.PNG", tag: "Figma UI/UX" },
    { title: "Portfolio Website", image: "/assets/project4.PNG", tag: "React JS" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        <h2
          className={`text-5xl font-bold mb-14 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Featured{" "}
          <span className="text-purple-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-[#111827] border border-white/10 rounded-3xl overflow-hidden
                hover:-translate-y-4 hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-900/30
                transition-all duration-500 group cursor-pointer
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image with overlay on hover */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-purple-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm tracking-wider border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    View Project
                  </span>
                </div> */}
              </div>

              <div className="p-6">
                {/* Tag */}
                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full">
                  {project.tag}
                </span>

                <h3 className="text-xl font-bold mt-3 mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-6">
                  Modern responsive website using React JS and Tailwind CSS.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;