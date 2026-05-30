import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const whatsappLink =
    "https://wa.me/923235847140?text=Hi%20Eman!%20I%20found%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["home", "about", "skills", "projects", "services", "contact"];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070b1a]/95 shadow-lg shadow-purple-900/10"
          : "bg-[#070b1a]/90"
      } backdrop-blur-lg border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1 className="text-3xl font-bold tracking-tight">
          Code<span className="text-purple-500">ByEman</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                className="relative hover:text-purple-400 duration-300 group capitalize"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block bg-purple-600 hover:bg-purple-500 hover:scale-105 active:scale-95 duration-300 px-6 py-3 rounded-xl font-medium shadow-lg shadow-purple-900/30"
        >
          Let's Talk
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2 group"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-white rounded-full transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#0d1424] border-t border-white/10`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 text-gray-300 font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link}`}
                onClick={handleLinkClick}
                className="block py-2 hover:text-purple-400 hover:pl-2 transition-all duration-300 capitalize border-b border-white/5"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleLinkClick}
              className="block mt-2 bg-purple-600 hover:bg-purple-500 duration-300 px-6 py-3 rounded-xl text-center font-medium"
            >
              Let's Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;