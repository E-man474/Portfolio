import { motion } from "framer-motion";

function Experience() {
  const timeline = [
    {
      title: "IT Admin & Web Dev Instructor",
      org: "Dar Ul Ilm Higher Secondary School",
      period: "April 2025 – Present",
      border: "border-purple-500",
      text: "group-hover:text-purple-300",
      points: [
        "Teaching HTML, CSS, JavaScript & responsive web design to secondary-level students.",
        "Managing school IT infrastructure alongside teaching duties.",
      ],
    },
    {
      title: "Web Development Projects",
      org: "Self-directed & Freelance",
      period: "2025 – Present",
      border: "border-pink-500",
      text: "group-hover:text-pink-300",
      points: [
        "Built responsive React applications end-to-end, from UI to deployment.",
        "Integrated Supabase authentication and real-time databases.",
        "Created interactive dashboards using Recharts.",
        "Deployed production projects on Vercel with CI-friendly workflows.",
      ],
    },

  ];

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-14"
        >
          Experience <span className="text-purple-500">Timeline</span>
        </motion.h2>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`border-l-2 ${item.border} pl-6 group hover:pl-8 transition-all duration-300`}
            >
              <h3 className={`text-xl font-semibold text-white ${item.text} transition-colors duration-300`}>
                {item.title}
              </h3>
              <p className="text-purple-400 text-sm mt-1">{item.org}</p>
              <p className="text-gray-500 text-sm">{item.period}</p>
              <ul className="mt-3 space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="text-gray-400 text-sm leading-6 flex gap-2">
                    <span className="text-gray-600">•</span>
                    <span>{point}</span>
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

export default Experience;