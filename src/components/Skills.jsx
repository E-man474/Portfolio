import { useEffect, useRef, useState } from "react";

function Skills() {
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: "HTML5", level: 100, icon: "🌐" },
    { name: "CSS3", level: 95, icon: "🎨" },
    { name: "JavaScript (ES6+)", level: 85, icon: "⚡" },
    { name: "React JS", level: 92, icon: "⚛️" },
    { name: "Tailwind CSS", level: 95, icon: "💨" },
    { name: "Supabase", level: 80, icon: "🗄️" },
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
                <span className="text-purple-400 font-bold text-lg">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${skill.level}%` : "0%",
                    transitionDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;