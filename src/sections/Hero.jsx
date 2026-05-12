import profile_image from "../assets/profile_image.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="flex items-center justify-center px-6 pt-32 pb-12 md:pt-40 md:pb-20"
    >
      <div className="text-center max-w-2xl">
        {/* Profile Image Container */}
        <div className="relative w-40 h-40 mx-auto mb-6 group">
          {/* Animated Glow Background */}
          <div className="absolute inset-0 bg-linear-to-r from-primary to-accent rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition duration-500 animate-pulse" />

          {/* Image */}
          <img
            src={profile_image}
            alt="Shazzad Hosen - Full Stack Developer"
            loading="eager"
            className="relative w-40 h-40 object-cover rounded-full border-4 border-white/10 transition-transform duration-500 group-hover:scale-105 shadow-2xl"
          />

          {/* Status Indicator Dot */}
          <span
            className="absolute bottom-4 right-4 w-5 h-5 bg-green-500 rounded-full border-4 border-[#0a0a0a] shadow-lg"
            title="Available for Work"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl mb-4 tracking-tight font-(--font-heading)">
          Shazzad Hosen
        </h1>

        {/* Description */}
        <p className="text-white/70 mb-8 text-lg leading-relaxed">
          Full Stack Developer specializing in{" "}
          <span className="text-white">secure backend systems</span>, scalable
          APIs, and clean architecture design.
        </p>

        {/* Status Text */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <p className="text-green-400 font-medium uppercase tracking-wider text-sm">
            Available for Work
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-linear-to-r from-primary to-accent font-semibold hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/20"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-primary/50 transition-all active:scale-95"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
