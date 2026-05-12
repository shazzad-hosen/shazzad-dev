import { useState, useEffect } from "react";

const sections = ["home", "about", "skills", "projects", "contact"];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false);
  };
  useEffect(() => {
    const sectionElements = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActive(visibleSection.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-80px 0px -40% 0px",
        threshold: 0.3,
      },
    );

    sectionElements.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionElements.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 left-0 backdrop-blur-md bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand */}
        <div
          onClick={scrollToTop}
          className="text-3xl font-bold tracking-tight text-white cursor-pointer hover:scale-105 transition-transform active:scale-95 select-none"
        >
          SH<span className="text-primary">.</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10 text-md font-medium">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={(e) => {
                if (sec === "home") {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className={`group relative capitalize transition-colors duration-300
    ${active === sec ? "text-primary" : "text-white/70 hover:text-white"}
  `}
            >
              {sec}

              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300
      ${active === sec ? "w-full" : "w-0 group-hover:w-full"}
    `}
              />
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-5 py-2 rounded-lg bg-linear-to-r from-primary to-accent text-white font-medium hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-primary/20"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-none z-50"
        >
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-black/95 backdrop-blur-2xl fixed inset-x-0 top-18 ${
          isOpen
            ? "h-screen border-t border-white/10 opacity-100"
            : "h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8 py-12">
          {sections.map((sec) => (
            <a
              key={sec}
              href={sec === "home" ? "#" : `#${sec}`}
              onClick={(e) => {
                setIsOpen(false);
                if (sec === "home") {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              className={`capitalize text-2xl tracking-wide transition-colors ${
                active === sec ? "text-primary font-bold" : "text-white/80"
              }`}
            >
              {sec}
            </a>
          ))}

          {/* Mobile Hire Me Button */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 rounded-full bg-primary text-white font-bold"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
