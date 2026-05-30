import { useEffect, useRef, useState } from "react";

function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const whatsappLink =
    "https://wa.me/923235847140?text=Hi%20Eman!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactLinks = [
    {
      icon: "📧",
      label: "Email",
      href: "mailto:emanilyas02@gmail.com",
      display: "emanilyas02@gmail.com",
    },
    {
      icon: "📞",
      label: "Phone",
      href: "tel:+923235847140",
      display: "+92 323 584 7140",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      href: whatsappLink,
      display: "Chat on WhatsApp",
      external: true,
    },
    {
      icon: "💼",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/eman-ilyas-56166440b",
      display: "linkedin.com/in/eman-ilyas-56166440b",
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-28 px-6" ref={sectionRef}>

      {/* Contact Card */}
      <div
        className={`max-w-5xl mx-auto bg-[#111827] border border-white/10 rounded-3xl p-16 text-center
          hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-900/20
          transition-all duration-700
          ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.98]"}`}
      >
        <h2
          className={`text-5xl font-bold mb-6 transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Get In Touch
        </h2>

        <p
          className={`text-gray-400 text-lg leading-8 mb-10 transition-all duration-700 delay-200 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Have a project in mind? Let's build something amazing together.
        </p>

        {/* Contact Info */}
        <div
          className={`space-y-4 text-gray-300 mb-10 transition-all duration-700 delay-300 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {contactLinks.map(({ icon, label, href, display, external }) => (
            <p key={label}>
              {icon} {label}:{" "}
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="text-purple-400 hover:text-purple-300 hover:underline underline-offset-4 transition-colors duration-300"
              >
                {display}
              </a>
            </p>
          ))}
        </div>

        <div
          className={`flex gap-4 justify-center flex-wrap transition-all duration-700 delay-[400ms] ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-500 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 active:scale-95 duration-300 px-8 py-3 rounded-xl font-medium inline-block"
          >
            💬 Let's Talk on WhatsApp
          </a>

          <a
            href="mailto:emanilyas02@gmail.com"
            className="border border-purple-500/40 hover:border-purple-400 hover:bg-purple-500/10 hover:scale-105 active:scale-95 duration-300 px-8 py-3 rounded-xl font-medium inline-block text-purple-400"
          >
            📧 Send an Email
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20 py-8 text-center text-gray-400">
        <p className="hover:text-gray-300 transition-colors duration-300">
          © 2026{" "}
          <span className="text-purple-400 font-medium">CodeByEman</span>. Built
          with React & Tailwind CSS.
        </p>
      </footer>
    </section>
  );
}

export default Contact;