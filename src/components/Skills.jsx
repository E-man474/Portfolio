import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaCode,
} from "react-icons/fa";
import { SiSupabase, SiTailwindcss, SiVercel } from "react-icons/si";

function Skills() {
  const categories = [
    {
      title: "Frontend",
      accent: "border-purple-500 text-purple-400",
      iconColor: "text-purple-400",
      skills: [
        { name: "HTML5", Icon: FaHtml5 },
        { name: "CSS3", Icon: FaCss3Alt },
        { name: "JavaScript", Icon: FaJs },
        { name: "React.js", Icon: FaReact },
        { name: "Tailwind CSS", Icon: SiTailwindcss },
      ],
    },
    {
      title: "Database",
      accent: "border-pink-500 text-pink-400",
      iconColor: "text-pink-400",
      skills: [{ name: "Supabase", Icon: SiSupabase }],
    },
    {
      title: "Tools",
      accent: "border-gray-500 text-gray-300",
      iconColor: "text-gray-300",
      skills: [
        { name: "Git", Icon: FaGitAlt },
        { name: "GitHub", Icon: FaGithub },
        { name: "Vercel", Icon: SiVercel },
        { name: "VS Code", Icon: FaCode },
      ],
    },
  ];

  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-14"
        >
          My Skills & <span className="text-purple-500">Expertise</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, catIndex) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#111827] border border-white/10 rounded-3xl p-8 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300"
            >
              <h3 className={`text-lg font-bold mb-6 pb-3 border-b-2 ${cat.accent}`}>
                {cat.title}
              </h3>
              <ul className="space-y-4">
                {cat.skills.map(({ name, Icon }) => (
                  <li key={name} className="flex items-center gap-3 text-gray-300 font-medium">
                    <Icon className={`text-xl ${cat.iconColor}`} />
                    {name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;