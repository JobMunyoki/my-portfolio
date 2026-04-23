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
      category: "Android Application",
      description:
        "An adaptive mobile system for eye comfort and radiation protection that monitors ambient light, proximity, screen time, and blink-related indicators to provide real-time recommendations.",
      tech: ["Java", "Android SDK", "SQLite", "Sensors", "Notifications"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    },
    {
      title: "Urban Swap",
      category: "Web Platform",
      description:
        "A car hire web platform that allows owners to list vehicles and clients to browse, book, and manage rentals through a structured digital workflow.",
      tech: ["Flask", "HTML", "CSS", "JavaScript", "GitHub"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    },
    {
      title: "Machine Learning Coursework Projects",
      category: "Data & AI",
      description:
        "Academic and practical work involving data analysis, model interpretation, and foundational machine learning concepts applied to problem-solving.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    }
  ];

  const strengths = [
    "Problem-solving and debugging",
    "Android and backend development",
    "Database integration and clean system design",
    "Git, collaboration, and deployment workflows"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-300 selection:text-slate-950">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(99,102,241,0.16),_transparent_24%),linear-gradient(to_bottom_right,_#020617,_#0f172a,_#111827)]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
          <nav className="flex items-center justify-between mb-14">
            <div>
              <p className="text-sm font-semibold tracking-[0.35em] uppercase text-cyan-300">
                Job Munyoki
              </p>
              <p className="text-sm text-slate-400 mt-2">Software Developer Portfolio</p>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm text-slate-300">
            <a href="#about" className="hover:text-cyan-300 transition">About</a>
            <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-300 transition">Contact</a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 px-4 py-2 text-cyan-200 hover:bg-cyan-400/10 transition"
            >
              <span>📄</span>
              <span>CV</span>
            </a>
            <a
              href="https://www.linkedin.com/in/job-munyoki-8b4456303"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 px-4 py-2 text-blue-300 hover:bg-blue-400/10 transition"
            >
              <span>💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
          </nav>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-200 text-sm mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Open to graduate roles, internships, and freelance opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl">
                Building practical <span className="text-cyan-300">mobile</span>, <span className="text-cyan-300">web</span>, and <span className="text-cyan-300">backend</span> solutions.
              </h1>

              <p className="text-lg md:text-xl text-slate-300 leading-8 max-w-3xl mb-8">
                I’m <span className="font-semibold text-white">Job Munyoki</span>, a Computer Science graduate focused on software development,
                Android applications, backend systems, and real-world technology solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-2xl bg-cyan-400 text-slate-950 font-semibold shadow-lg shadow-cyan-500/20 hover:-translate-y-0.5 transition"
                >
                  Explore Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-2xl border border-white/15 bg-white/5 font-medium hover:bg-white/10 transition"
                >
                  Contact Me
                </a>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white text-slate-950 font-semibold shadow-lg hover:-translate-y-0.5 transition"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">📄</span>
                    <span className="flex flex-col items-start leading-tight">
                      <span>View CV</span>
                      <span className="text-xs font-medium text-slate-500 group-hover:text-slate-700">Opens in new tab</span>
                    </span>
                  </a>
                  <a
                    href="/cv.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-cyan-400/30 text-cyan-200 font-medium hover:bg-cyan-400/10 transition"
                  >
                    <span>⬇</span>
                    <span>Download</span>
                  </a>
                </div>
              </div>
              <a
                href="https://www.linkedin.com/in/job-munyoki-8b4456303"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-blue-400/30 text-blue-300 font-medium hover:bg-blue-400/10 transition"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>

              <div className="mb-10 max-w-3xl rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur p-5 shadow-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-2">Premium CV Access</p>
                    <h3 className="text-xl font-semibold text-white">Recruiter-ready resume</h3>
                    <p className="text-slate-300 mt-2 leading-7">
                      View my latest CV in a new tab or download a copy for review.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300">
                    Updated for software development roles
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">3+</p>
                  <p className="text-sm text-slate-400 mt-1">Featured Projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">8+</p>
                  <p className="text-sm text-slate-400 mt-1">Core Technologies</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">Mobile</p>
                  <p className="text-sm text-slate-400 mt-1">Android Focus</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">Live</p>
                  <p className="text-sm text-slate-400 mt-1">Portfolio Online</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-2xl">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-2">Quick Profile</p>
                    <h2 className="text-2xl font-semibold">Professional Snapshot</h2>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-cyan-400/15 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-bold">
                    JM
                  </div>
                </div>
                <div className="space-y-4 text-slate-300 leading-7">
                  <p><span className="font-semibold text-white">Location:</span> Nairobi, Kenya</p>
                  <p><span className="font-semibold text-white">Focus:</span> Software Development, Android, Backend, Web Applications</p>
                  <p><span className="font-semibold text-white">Education:</span> Bachelor of Science in Computer Science</p>
                  <p><span className="font-semibold text-white">Current Goal:</span> Building a strong professional portfolio and launching a software career.</p>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl">
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-4">Core Strengths</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {strengths.map((item) => (
                    <div key={item} className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-slate-300">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-5">A developer focused on useful, practical systems.</h2>
            <p className="text-slate-300 leading-8 text-lg mb-5">
              I am a Computer Science graduate with experience in designing and building software systems
              across mobile, web, and backend environments. My work includes Android development,
              database integration, full-stack project development, and academic research-driven system design.
            </p>
            <p className="text-slate-300 leading-8 text-lg">
              I enjoy translating technical requirements into usable applications, improving user experiences,
              and continuously sharpening my software engineering skills through projects and deployment.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">What I Bring</p>
            <div className="space-y-5 text-slate-300 leading-7">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-2">Mobile + Web Perspective</h3>
                <p>I can think across Android apps, backend logic, and browser-based user experiences.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-2">Project-Based Experience</h3>
                <p>I have built and documented practical academic and personal software projects end to end.</p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-2">Growth Mindset</h3>
                <p>I learn quickly, adapt to tools fast, and value clean solutions that solve real problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-2">Skills</p>
            <h2 className="text-3xl font-bold">Technology Stack</h2>
          </div>
          <p className="text-slate-400">Tools and technologies I use in development</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-slate-900 border border-white/10 shadow-sm text-slate-200 hover:border-cyan-400/40 hover:bg-cyan-400/5 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-2">Projects</p>
            <h2 className="text-3xl font-bold">Selected Work</h2>
          </div>
          <p className="text-slate-400 max-w-xl">A few featured projects that reflect my Android, backend, and software engineering capabilities.</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-slate-900 rounded-3xl shadow-xl border border-white/10 p-6 flex flex-col hover:border-cyan-400/30 transition"
            >
              <div className="mb-5 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 via-slate-800 to-slate-700 h-44 relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.18),_transparent_30%)]" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-5">
                  <span className="text-xs uppercase tracking-[0.25em] text-cyan-200/90 mb-2">{project.category}</span>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
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

      <section className="max-w-6xl mx-auto px-6 py-2">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">Education</p>
            <h3 className="text-2xl font-semibold mb-3">Academic Background</h3>
            <p className="text-slate-300 leading-8">
              <span className="font-semibold text-white">Bachelor of Science in Computer Science</span><br />
              University of Embu, Kenya
            </p>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">Career Focus</p>
            <h3 className="text-2xl font-semibold mb-3">Target Roles</h3>
            <p className="text-slate-300 leading-8">
              Junior Software Developer, Android Developer, Backend Developer, Graduate Trainee, and internship opportunities.
            </p>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">Availability</p>
            <h3 className="text-2xl font-semibold mb-3">Open for Opportunities</h3>
            <p className="text-slate-300 leading-8">
              Available for full-time roles, internships, freelance work, collaboration, and portfolio-driven opportunities.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
        <div className="relative overflow-hidden bg-gradient-to-br from-cyan-500/15 via-slate-900 to-indigo-500/15 border border-cyan-400/20 rounded-[2rem] shadow-2xl p-8 md:p-12">
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-[1fr_0.8fr] gap-10 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">Contact</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s build something valuable together.</h2>
              <p className="text-slate-300 text-lg mb-8 max-w-3xl leading-8">
                I’m open to graduate roles, internships, freelance opportunities, and collaborative software projects.
                If you are looking for a motivated developer with practical project experience, let’s connect.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:munyokijobdeveloper@gmail.com"
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

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7">
              <h3 className="text-2xl font-semibold mb-5">Contact Details</h3>
              <div className="space-y-4 text-slate-300 text-lg">
                <p><span className="font-semibold text-white">Email:</span> munyokijobdeveloper@gmail.com</p>
                <p><span className="font-semibold text-white">Phone:</span> +254 799 165 471</p>
                <p><span className="font-semibold text-white">GitHub:</span> github.com/JobMunyoki</p>
                <p>
                <span className="font-semibold text-white">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/job-munyoki-8b4456303"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 hover:underline"
                >
                  linkedin.com/in/job-munyoki-8b4456303
                </a>
              </p>
                <p><span className="font-semibold text-white">Location:</span> Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
