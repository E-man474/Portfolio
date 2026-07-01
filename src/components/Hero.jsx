import { useEffect, useState } from "react";
import { FaReact, FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiSupabase, SiTailwindcss } from "react-icons/si";

function Hero() {
  const [visible, setVisible] = useState(false);
  const whatsappLink = "https://wa.me/923235847140";

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3Alt, label: "CSS3" },
    { Icon: FaReact, label: "React" },
    { Icon: FaJs, label: "JavaScript" },
    { Icon: SiTailwindcss, label: "Tailwind" },
    { Icon: SiSupabase, label: "Supabase" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            className={`text-purple-500 text-lg mb-4 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            Hi, I'm Eman 👋
          </p>

          <h1
            className={`text-6xl md:text-7xl font-bold leading-tight transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            I Build Modern
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow">
              Web Experiences
            </span>
          </h1>

          <p
            className={`text-gray-400 mt-8 text-lg leading-8 max-w-xl transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Passionate Frontend Developer focused on creating responsive and
            modern websites using React JS, JavaScript and Tailwind CSS.
          </p>

          <div
            className={`flex gap-5 mt-10 transition-all duration-700 delay-[400ms] ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="/CV_Eman_Ilyas.docx"
              download="CV_Eman_Ilyas.docx"
              className="bg-purple-600 hover:bg-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 duration-300 px-8 py-4 rounded-xl font-medium"
            >
              Download CV
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105 active:scale-95 duration-300 px-8 py-4 rounded-xl font-medium text-purple-400"
            >
              Hire Me
            </a>
          </div>

          {/* Tech Icons */}
          <div
            className={`flex gap-6 mt-12 transition-all duration-700 delay-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {icons.map(({ Icon, label }, i) => (
              <div
                key={label}
                className="group relative flex flex-col items-center"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <Icon className="text-4xl text-purple-500 hover:text-purple-300 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-default" />
                <span className="absolute -bottom-7 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div
          className={`relative flex justify-center transition-all duration-700 delay-300 ${
            visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute w-[300px] h-[300px] bg-pink-700 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

          <img
            src="/assets/profile.jpeg"
            alt="Eman Ilyas - Frontend Developer"
            className="w-[360px] h-[460px] object-cover rounded-[40px] border-4 border-purple-500 relative z-10 hover:border-purple-400 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;