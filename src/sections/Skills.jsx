import { Monitor, Server, Terminal } from "lucide-react";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <Monitor className="text-primary" size={20} />,
      skills: [
        "HTML5",
        "React",
        "Tailwind CSS",
        "JavaScript (ES6+)",
        "Responsive Design",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="text-primary" size={20} />,
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "JWT Auth",
        "OAuth",
        "REST APIs",
        "Clean Architecture",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="text-primary" size={20} />,
      skills: ["Git", "GitHub", "Postman", "MongoDB Atlas", "Prisma", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-[#030712] relative">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-4">
            02. Expertise
          </h2>
          <h3 className="text-3xl md:text-5xl mb-6 font-(--font-heading)">
            Technical Stack
          </h3>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            My toolbelt for crafting high-performance, secure digital products.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white/2 border border-white/5 hover:border-primary/30 hover:bg-white/4 transition-all duration-500 group"
            >
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {group.title}
                </h3>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-white/70 group-hover:border-primary/20 group-hover:text-white transition-all duration-300"
                  >
                    {skill}
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

export default Skills;
