import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaJs, FaCss3Alt } from "react-icons/fa";
import { SiSupabase, SiTailwindcss } from "react-icons/si";

function Hero() {
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-purple-500 text-lg mb-4"
          >
            Hi, I'm Eman Ilyas 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-7xl font-bold leading-tight"
          >
            Web Developer
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow">
              React.js Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-400 mt-8 text-lg leading-8 max-w-xl"
          >
            I build responsive, modern, and user-friendly web applications
            using React.js, JavaScript, HTML, CSS, Tailwind CSS, and
            Supabase. I'm passionate about creating clean, accessible, and
            high-performance web experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 mt-10 flex-wrap"
          >
            <a
              href="#projects"
              className="bg-purple-600 hover:bg-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 duration-300 px-7 py-4 rounded-xl font-medium"
            >
              🚀 View Projects
            </a>
            <a
              href="/CV_Eman_Ilyas.docx"
              download="CV_Eman_Ilyas.docx"
              className="border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105 active:scale-95 duration-300 px-7 py-4 rounded-xl font-medium text-purple-400"
            >
              📄 Download CV
            </a>
            <a
              href="#contact"
              className="border border-pink-500/50 hover:border-pink-400 hover:bg-pink-500/10 hover:scale-105 active:scale-95 duration-300 px-7 py-4 rounded-xl font-medium text-pink-400"
            >
              📩 Contact Me
            </a>
          </motion.div>

          {/* Tech Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-6 mt-12"
          >
            {icons.map(({ Icon, label }) => (
              <div
                key={label}
                className="group relative flex flex-col items-center"
              >
                <Icon className="text-4xl text-purple-500 hover:text-purple-300 hover:scale-125 hover:-translate-y-1 transition-all duration-300 cursor-default" />
                <span className="absolute -bottom-7 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative flex justify-center"
        >
          <div className="absolute w-[400px] h-[400px] bg-purple-700 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute w-[300px] h-[300px] bg-pink-700 rounded-full blur-[100px] opacity-10 animate-pulse" style={{ animationDelay: "1s" }}></div>

          <img
            src="/assets/profile.jpeg"
            alt="Eman Ilyas - Frontend Developer"
            loading="lazy"
            className="w-[360px] h-[460px] object-cover rounded-[40px] border-4 border-purple-500 relative z-10 hover:border-purple-400 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;