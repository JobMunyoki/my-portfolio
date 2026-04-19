export default function PortfolioWebsite() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "React",
    "Flask",
    "Android Development",
    "SQLite",
    "Git/GitHub",
    "Machine Learning",
    "Cybersecurity"
  ];

  const projects = [
    {
      title: "SmartVision",
      description:
        "An adaptive mobile system for eye comfort and radiation protection that monitors ambient light, proximity, screen time, and blink-related indicators to provide real-time recommendations.",
      tech: ["Java", "Android SDK", "SQLite", "Sensors", "Notifications"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    },
    {
      title: "Urban Swap",
      description:
        "A car hire web platform that allows owners to list vehicles and clients to browse, book, and manage rentals through a structured digital workflow.",
      tech: ["Flask", "HTML", "CSS", "JavaScript", "GitHub"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    },
    {
      title: "Machine Learning Coursework Projects",
      description:
        "Academic and practical work involving data analysis, model interpretation, and foundational machine learning concepts applied to problem-solving.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold tracking-[0.25em] uppercase text-cyan-300 mb-5">
                Software Developer Portfolio
              </p>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Hi, I’m <span className="text-cyan-300">Job Munyoki</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-8 max-w-2xl mb-8">
                A Computer Science graduate focused on software development, Android applications,
                backend systems, and practical technology solutions that solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-2xl bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 font-medium hover:bg-white/10 transition"
                >
                  Contact Me
                </a>
                <a
                  href="/cv.pdf"
                  className="px-6 py-3 rounded-2xl border border-cyan-400/40 text-cyan-200 font-medium hover:bg-cyan-400/10 transition"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-5">Quick Profile</h2>
              <div className="space-y-4 text-slate-300 leading-7">
                <p><span className="font-semibold text-white">Location:</span> Nairobi, Kenya</p>
                <p><span className="font-semibold text-white">Focus:</span> Software Development, Android, Backend, Web Applications</p>
                <p><span className="font-semibold text-white">Education:</span> Bachelor of Science in Computer Science</p>
                <p><span className="font-semibold text-white">Strengths:</span> Problem-solving, system design, debugging, academic and practical project development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
          <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-slate-300 leading-8 text-lg">
              I am a Computer Science graduate with experience in designing and building software systems
              across mobile, web, and backend environments. My work includes Android development,
              database integration, full-stack project development, and academic research-driven system
              design. I enjoy translating technical requirements into usable applications and continuously
              growing my skills in modern software engineering.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Highlights</h2>
            <div className="space-y-4 text-slate-300">
              <p>Built mobile, web, and backend projects with practical real-world use cases.</p>
              <p>Comfortable with version control, debugging, database integration, and modern development workflows.</p>
              <p>Open to graduate roles, internships, freelance work, and collaborative software projects.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <h2 className="text-3xl font-bold">Skills</h2>
          <p className="text-slate-400">Tools and technologies I work with</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-slate-900 border border-white/10 shadow-sm text-slate-200 hover:border-cyan-400/40 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-slate-400">Selected work that reflects my technical skills</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-3xl shadow-xl border border-white/10 p-6 flex flex-col"
            >
              <div className="mb-5">
                <div className="h-40 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center text-slate-400 text-sm">
                  Project Preview
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-300 leading-7 mb-5 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-white/5"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-3 rounded-2xl bg-cyan-400 text-slate-950 font-semibold hover:-translate-y-0.5 transition"
                >
                  View Code
                </a>
                <a
                  href={project.demo}
                  className="flex-1 text-center px-4 py-3 rounded-2xl border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-lg text-slate-300 leading-8">
            <span className="font-semibold text-white">Bachelor of Science in Computer Science</span><br />
            University of Embu, Kenya
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-gradient-to-br from-cyan-500/15 to-indigo-500/15 border border-cyan-400/20 text-white rounded-3xl shadow-2xl p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-3xl leading-8">
            I’m open to graduate roles, internships, freelance opportunities, and collaborative software projects.
            If you are looking for a motivated developer with practical project experience, let’s connect.
          </p>
          <div className="grid md:grid-cols-2 gap-5 text-lg mb-8">
            <p><span className="font-semibold">Email:</span> munyokijobdeveloper@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +254 799 165 471</p>
            <p><span className="font-semibold">GitHub:</span> github.com/JobMunyoki</p>
            <p><span className="font-semibold">Location:</span> Nairobi, Kenya</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:your.email@gmail.com"
              className="px-6 py-3 rounded-2xl bg-cyan-400 text-slate-950 font-semibold hover:-translate-y-0.5 transition"
            >
              Email Me
            </a>
            <a
              href="https://github.com/JobMunyoki"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition"
            >
              Visit GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
