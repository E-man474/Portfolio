import { motion } from "framer-motion";

function Contact() {
  const whatsappLink =
    "https://wa.me/923235847140?text=Hi%20Eman!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.";

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      href: "mailto:emanilyas02@gmail.com",
      display: "emanilyas02@gmail.com",
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eman-ilyas-48b907294",
      display: "linkedin.com/in/eman-ilyas-48b907294",
      external: true,
    },
    {
      icon: "💻",
      label: "GitHub",
      href: "https://github.com/E-man474",
      display: "github.com/E-man474",
      external: true,
    },
    {
      icon: "🌐",
      label: "Portfolio",
      href: "https://portfolio-snowy-gamma-hkrkoo9vum.vercel.app",
      display: "View this site",
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto bg-[#111827] border border-white/10 rounded-3xl p-16 text-center hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-700"
      >
        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>

        <p className="text-gray-400 text-lg leading-8 mb-10">
          Have a project in mind? Let's build something amazing together.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-10 text-left max-w-xl mx-auto">
          {contactLinks.map(({ icon, label, href, display, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-colors duration-300"
            >
              <span className="text-xl">{icon}</span>
              <span className="text-sm text-gray-300 font-medium truncate">
                {display}
              </span>
            </a>
          ))}
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 duration-300 px-8 py-3 rounded-xl font-medium"
          >
            💬 Chat on WhatsApp
          </a>
          <a
            href="mailto:emanilyas02@gmail.com"
            className="border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105 active:scale-95 duration-300 px-8 py-3 rounded-xl font-medium text-purple-400"
          >
            📩 Send an Email
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;