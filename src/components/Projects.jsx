import { motion } from "framer-motion";

function Projects() {
  const featured = {
    title: "Expense Tracker",
    image: "assets/project1.PNG",
    desc: "Track income and expenses with authentication, analytics, reports, and savings goals.",
    stack: "React.js • Tailwind CSS • Supabase • Recharts",
    features: [
      "Full CRUD for income & expense transactions",
      "Interactive dashboard charts and reports (Recharts)",
      "Savings goals tracking",
      "Multi-currency support (PKR / USD / EUR)",
      "Supabase authentication & real-time data",
    ],
    live: "https://expense-tracker-wokx.vercel.app",
    github: "https://github.com/E-man474/Expense-Tracker",
  };

  const otherProjects = [
    {
      title: "CleanGermany",
      image: "assets/cleangermany.PNG",
      desc: "Responsive landing page for a cleaning service business with interactive animations.",
      stack: "HTML5 • CSS3 • JavaScript",
      features: [
        "Before/after drag comparison slider",
        "Animated statistics counters",
        "Testimonial carousel",
        "Validated contact form",
      ],
      live: "https://cleangermany-website-2zb2.vercel.app",
      github: "https://github.com/E-man474/cleangermany-website",
    },
    {
      title: "PackRight",
      image: "assets/ClientProduct.PNG",
      desc: "Business website with a full-featured admin panel, built for a private freelance client.",
      stack: "React.js • Supabase",
      features: [
        "Full CRUD for products, categories & inquiries",
        "Sidebar admin navigation",
        "Profile photo upload",
        "WhatsApp reply integration",
      ],
      live: null,
      github: null,
    },
    {
      title: "Portfolio Website",
      image: "/assets/portfolio.PNG",
      desc: "This site — a responsive single-page portfolio built with React and Tailwind CSS.",
      stack: "React.js • Tailwind CSS • Framer Motion",
      features: [
        "Scroll-triggered section animations",
        "Fully responsive across all devices",
        "Category-based skills & project showcase",
      ],
      live: "https://portfolio-snowy-gamma-hkrkoo9vum.vercel.app",
      github: "https://github.com/E-man474/Portfolio",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Featured <span className="text-purple-500">Projects</span>
        </motion.h2>
        <p className="text-gray-400 mb-14 text-lg">
          A selection of what I've built and shipped.
        </p>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-0 bg-[#111827] border border-white/10 rounded-3xl overflow-hidden mb-16 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-500"
        >
          <div className="relative">
            <span className="absolute top-4 left-4 z-10 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
              ⭐ Featured Project
            </span>
            <img
              src={featured.image}
              alt={featured.title}
              loading="lazy"
              className="w-full h-full min-h-[280px] object-cover"
            />
          </div>

          <div className="p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-3 text-white">
              {featured.title}
            </h3>
            <p className="text-gray-400 leading-7 mb-5">{featured.desc}</p>

            <p className="text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full inline-block mb-4 w-fit">
              {featured.stack}
            </p>

            <p className="text-xs font-semibold text-pink-400 uppercase tracking-wide mb-2">
              Features
            </p>
            <ul className="space-y-1.5 mb-6">
              {featured.features.map((f) => (
                <li key={f} className="text-sm text-gray-400 flex gap-2">
                  <span className="text-pink-400">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <a
                href={featured.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-500 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-300"
              >
                Live Demo
              </a>
              <a
                href={featured.github}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:border-white/40 hover:bg-white/5 text-sm font-medium px-5 py-2.5 rounded-lg transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#111827] border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/60 hover:shadow-2xl hover:shadow-purple-900/30 transition-all duration-300 group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-44 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-6 mb-4">
                  {project.desc}
                </p>

                <span className="text-xs font-medium text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full inline-block mb-4">
                  {project.stack}
                </span>

                <p className="text-xs font-semibold text-pink-400 uppercase tracking-wide mb-1">
                  Features
                </p>
                <ul className="space-y-1 mb-5">
                  {project.features.map((f) => (
                    <li key={f} className="text-xs text-gray-500 flex gap-1.5">
                      <span className="text-pink-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-purple-300 border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 px-3 py-2 rounded-lg transition-all duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-gray-300 border border-white/20 hover:border-white/40 hover:bg-white/5 px-3 py-2 rounded-lg transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                  {!project.live && !project.github && (
                    <span className="text-xs text-gray-500 italic">
                      Private client project
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;