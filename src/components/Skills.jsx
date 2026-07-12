import { useEffect, useRef, useState } from "react";

function Skills() {
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML5", level: 5, icon: "🌐" },
    { name: "CSS3", level: 5, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 4, icon: "⚡" },
    { name: "React JS", level: 4, icon: "⚛️" },
    { name: "Tailwind CSS", level: 5, icon: "💨" },
    { name: "Supabase", level: 4, icon: "🗄️" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimated(true), 300);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        <h2
          className={`text-5xl font-bold mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          My Skills &{" "}
          <span className="text-purple-500">Expertise</span>
        </h2>

        <p
          className={`text-gray-400 mb-14 text-lg transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Technologies I work with every day to build modern web apps.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`bg-[#111827] border border-white/10 p-8 rounded-3xl
                hover:border-purple-500/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-900/20
                transition-all duration-500 group
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className="flex justify-between mb-4 items-center">
                <h3 className="text-xl font-semibold flex items-center gap-3">
                  <span className="group-hover:scale-125 inline-block transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <span className="group-hover:text-purple-300 transition-colors duration-300">
                    {skill.name}
                  </span>
                </h3>
              </div>

              {/* Proficiency Dots */}
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className={`h-2.5 flex-1 rounded-full transition-all duration-700 ${
                      animated
                        ? dot <= skill.level
                          ? "bg-gradient-to-r from-purple-600 to-pink-500"
                          : "bg-gray-800"
                        : "bg-gray-800"
                    }`}
                    style={{ transitionDelay: `${index * 100 + dot * 60}ms` }}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;