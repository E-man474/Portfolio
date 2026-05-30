import { useEffect, useRef, useState } from "react";

function Services() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const services = [
    {
      title: "Frontend Development",
      icon: "⚛️",
      description:
        "Building fast, responsive web apps using React JS, JavaScript, and modern best practices.",
      color: "group-hover:border-purple-500",
    },
    {
      title: "Database Integration with Supabase",
      icon: "🗄️",
      description:
        "Connecting frontends to Supabase for authentication, real-time databases, and REST APIs.",
      color: "group-hover:border-blue-500",
    },
    {
      title: "Responsive Websites",
      icon: "📱",
      description:
        "Creating mobile-first layouts that look great on every screen size using Tailwind CSS and CSS3.",
      color: "group-hover:border-pink-500",
    },
    {
      title: "Backend Integration",
      icon: "🔗",
      description:
        "Integrating REST APIs, third-party services, and backend logic seamlessly into the frontend.",
      color: "group-hover:border-green-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-28 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">

        <h2
          className={`text-5xl font-bold mb-4 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          What I Can Do{" "}
          <span className="text-purple-500">For You</span>
        </h2>

        <p
          className={`text-gray-400 mb-14 text-lg transition-all duration-700 delay-100 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          From design to deployment — I've got you covered.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-[#111827] border border-white/10 rounded-3xl p-8 text-center
                hover:-translate-y-3 hover:shadow-xl hover:shadow-purple-900/20
                transition-all duration-500 group cursor-default
                ${service.color}
                ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Animated Icon */}
              <div className="text-5xl mb-5 inline-block group-hover:scale-125 group-hover:-translate-y-2 transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-400 transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-7">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500 mx-auto"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;