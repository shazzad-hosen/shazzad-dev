import { Github, ExternalLink, Code2, Terminal } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "HireFlow API",
      description:
        "A production-ready Job Application Tracker API. Features secure JWT authentication with rotating refresh tokens in HTTP-only cookies, hashed token storage, and a robust layered architecture (Controllers, Services, Middlewares).",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Clean Architecture"],
      github: "https://github.com/shazzad-hosen/hireflow-api.git",
      live: "https://hireflow-api-qwvn.onrender.com",
      featured: true,
      type: "Backend",
    },
    {
      title: "Red Circle",
      description:
        "Red Circle is a blood donation management backend built with Node.js, Express, and MongoDB. It provides secure authentication, donor availability tracking, donor searching based on location and blood group, donation timing rules.",
      tech: ["Node", "Express.js", "MongoDB", "JWT"],
      github: "https://github.com/shazzad-hosen/red-circle.git",
      live: "https://red-circle-backend.onrender.com/",
      featured: false,
      type: "Backend",
    },
    {
      title: "Nestify",
      description:
        "Nestify is a Fullstack modern, user-friendly stay-booking platform inspired by Airbnb. It allows users to create, browse, and manage property listings. Built with Node.js, Express, MongoDB, and EJS.",
      tech: ["Node", "Express.js", "MongoDB", "Passport.js", "EJS"],
      github: "https://github.com/shazzad-hosen/nestify.git",
      live: "https://nestify-mvgw.onrender.com",
      featured: false,
      type: "Full Stack",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 relative overflow-hidden bg-darkBg"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">
            03. Selected Work
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h3>
          <p className="text-white/60 max-w-2xl text-lg">
            Focused on building{" "}
            <span className="text-white">secure backend systems</span> and
            scalable API architectures that solve real-world problems.
          </p>
        </div>

        {/* Featured Projects Stack */}
        <div className="space-y-12 mb-20">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="group relative grid md:grid-cols-12 gap-8 p-8 md:p-12 rounded-3xl bg-white/2 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Visual Background Decoration */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="md:col-span-7 relative z-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary text-xs font-bold mb-4 tracking-widest uppercase">
                    <span className="w-8 h-px bg-primary"></span> Featured{" "}
                    {project.type}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-8 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/50 group-hover:text-white group-hover:border-primary/20 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white hover:text-primary transition-all font-medium"
                    >
                      <Github size={20} /> Codebase
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-white hover:text-primary transition-all font-medium"
                    >
                      <ExternalLink size={20} /> Live
                    </a>
                  </div>
                </div>

                {/* Visual Backend Architecture Mockup */}
                <div className="md:col-span-5 hidden md:flex items-center justify-center relative">
                  <div className="relative w-full aspect-square max-h-80 bg-[#050505] rounded-2xl border border-white/10 p-6 font-mono text-[10px] overflow-hidden shadow-2xl group-hover:border-primary/20 transition-all duration-500">
                    <div className="flex gap-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 group-hover:bg-red-500/50 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/50 transition-colors" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 group-hover:bg-green-500/50 transition-colors" />
                    </div>
                    <p className="text-primary mb-2 opacity-80">
                      // Security Middleware
                    </p>
                    <p className="text-white/80">
                      const verifyRefreshToken = async (req, res, next) =&gt;
                      &#123;
                    </p>
                    <p className="text-white/80 pl-4">
                      const token = req.cookies?.refreshToken;
                    </p>
                    <p className="text-white/80 pl-8">
                      if (!token) return next(new ApiError(401, "Refresh token
                      missing"));
                    </p>
                    <p className="text-white/40 mb-2">&#125;</p>

                    <div className="mt-4 p-3 rounded bg-white/5 border border-white/5">
                      <p className="text-accent mb-1 font-bold">
                        API STATUS: 200 OK
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4 animate-pulse"></div>
                        </div>
                        <span className="text-[8px] text-white/40">124ms</span>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                      <Terminal
                        size={40}
                        className="text-primary/10 group-hover:text-primary/20 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Smaller Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary transition-colors duration-500">
                      <Code2
                        className="text-primary group-hover:text-white transition-colors"
                        size={24}
                      />
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="text-white/40 hover:text-primary transition-colors"
                      >
                        <Github size={22} />
                      </a>
                      <a
                        href={project.live}
                        className="text-white/40 hover:text-primary transition-colors"
                      >
                        <ExternalLink size={22} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-widest text-primary/80 font-bold bg-primary/5 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
