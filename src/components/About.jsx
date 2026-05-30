import { useEffect, useRef, useState } from "react";

function About() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* About Me Card */}
        <div
          className={`bg-[#111827] border border-white/10 rounded-3xl p-10
            hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20
            transition-all duration-500 cursor-default
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: visible ? "0ms" : "0ms" }}
        >
          <h2 className="text-5xl font-bold mb-6">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-9 mb-5">
            I'm{" "}
            <span className="text-white font-semibold">Eman Ilyas</span> — a
            Frontend Developer, Freelancer, and Web Development Instructor
            based in Faisalabad, Pakistan. I turn ideas into polished,
            pixel-perfect web experiences that actually work.
          </p>

          <p className="text-gray-400 leading-9 mb-5">
            With{" "}
            <span className="text-purple-400 font-semibold">3+ years</span> of
            hands-on experience on Upwork, I've built everything from
            e-commerce stores and real estate apps to restaurant booking
            systems — all with clean code, smooth UI, and happy clients
            (5-star rated!).
          </p>

          <p className="text-gray-400 leading-9">
            Beyond freelancing, I teach Web Development at Dar Ul Ilm Higher
            Secondary School, where I help students go from zero to building
            their first websites. I love coding and I love sharing that love
            even more. ✨
          </p>
        </div>

        {/* Experience Card */}
        <div
          className={`bg-[#111827] border border-white/10 rounded-3xl p-10
            hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20
            transition-all duration-500 cursor-default
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "150ms" }}
        >
          <h2 className="text-4xl font-bold text-purple-500 mb-8">
            Experience
          </h2>

          <div className="space-y-8">

            <div className="border-l-2 border-purple-500 pl-6 group hover:pl-8 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">
                IT Admin & Web Dev Instructor
              </h3>
              <p className="text-purple-400 text-sm mt-1">
                Dar Ul Ilm Higher Secondary School
              </p>
              <p className="text-gray-500 text-sm">April 2024 – Present</p>
              <p className="text-gray-400 mt-2 text-sm leading-6">
                Teaching HTML, CSS, JavaScript & responsive web design to
                secondary-level students while managing school IT infrastructure.
              </p>
            </div>

            <div className="border-l-2 border-pink-500 pl-6 group hover:pl-8 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                Freelance Web Developer
              </h3>
              <p className="text-purple-400 text-sm mt-1">Upwork — Remote</p>
              <p className="text-gray-500 text-sm">2022 – Present</p>
              <p className="text-gray-400 mt-2 text-sm leading-6">
                Delivered 10+ client projects with 5-star ratings across
                retail, hospitality, and real estate industries.
              </p>
            </div>

            <div className="border-l-2 border-gray-600 pl-6 group hover:pl-8 hover:border-gray-400 transition-all duration-300">
              <h3 className="text-xl font-semibold text-white group-hover:text-gray-300 transition-colors duration-300">
                BS Computer Science
              </h3>
              <p className="text-purple-400 text-sm mt-1">
                Government College University Faisalabad
              </p>
              <p className="text-gray-500 text-sm">2021 – July 2025</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;