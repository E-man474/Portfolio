import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111827] border border-white/10 rounded-3xl p-10 md:p-14 hover:border-purple-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-500"
        >
          <h2 className="text-5xl font-bold mb-8">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="text-gray-400 leading-9 text-lg">
            I am a BSCS graduate and a passionate Web Developer with
            experience in building responsive web applications using
            React.js, JavaScript, HTML, CSS, Tailwind CSS, and Supabase. I
            enjoy solving real-world problems, learning modern technologies,
            and building applications that provide a great user experience.
            I am currently looking for opportunities where I can grow as a
            developer and contribute to impactful projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About; 