import { motion } from "framer-motion";

function Stats() {
  const stats = [
    { icon: "✅", label: "5+ Projects Completed" },
    { icon: "💻", label: "React.js Developer" },
    { icon: "🎓", label: "BSCS Graduate" },
    { icon: "🌱", label: "Continuously Learning" },
  ];

  return (
    <section className="px-6 -mt-8 relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-[#111827] border border-white/10 rounded-2xl p-6 text-center hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <p className="text-purple-300 font-semibold text-sm leading-snug">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;