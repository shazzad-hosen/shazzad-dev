import { ShieldCheck, Layers, Zap } from "lucide-react";

function About() {
  const highlights = [
    {
      title: "Secure Auth",
      description:
        "JWT-based systems with rotating refresh tokens and secure cookie handling.",
      icon: <ShieldCheck className="text-primary" size={24} />,
    },
    {
      title: "Clean Architecture",
      description:
        "Layered patterns (Controllers, Services) for maximum maintainability.",
      icon: <Layers className="text-primary" size={24} />,
    },
    {
      title: "Scalable APIs",
      description:
        "Optimized MongoDB indexing and high-performance RESTful endpoints.",
      icon: <Zap className="text-primary" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-6 px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: Text */}
          <div className="lg:w-1/2">
            <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">
              01. Background
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              Engineering with <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                Security & Scale.
              </span>
            </h3>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              I'm a backend-focused full stack developer who believes that
              <span className="text-white"> code is for humans to read </span>
              and only incidentally for machines to execute.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              With a focus on production-ready systems, I bridge the gap between
              complex backend logic and seamless user experiences.
            </p>
          </div>

          {/* Right: Highlight Grid */}
          <div className="lg:w-1/2 grid gap-4 w-full">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white/3 border border-white/5 hover:border-primary/30 hover:bg-white/5 transition-all duration-300 flex gap-5 items-start"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
