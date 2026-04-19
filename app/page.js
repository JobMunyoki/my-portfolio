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
      tech: ["Java", "Android SDK", "SQLite", "Sensors", "Notifications"]
    },
    {
      title: "Urban Swap",
      description:
        "A car hire web platform that allows owners to list vehicles and clients to browse, book, and manage rentals through a structured digital workflow.",
      tech: ["Python", "HTML", "CSS", "JavaScript", "GitHub"]
    },
    {
      title: "Machine Learning Coursework Projects",
      description:
        "Academic and practical work involving data analysis, model interpretation, and foundational machine learning concepts applied to problem-solving.",
      tech: ["Python", "Machine Learning", "Data Analysis"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-500 mb-4">
              Software Developer Portfolio
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-5">
              Hi, I’m Job Munyoki
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
              A Computer Science graduate focused on software development, Android applications,
              backend systems, and practical technology solutions that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-2xl bg-slate-900 text-white font-medium shadow-sm hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-slate-300 bg-white font-medium shadow-sm hover:bg-slate-100 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-semibold mb-4">Quick Profile</h2>
            <div className="space-y-4 text-slate-700">
              <p><span className="font-semibold">Location:</span> Nairobi, Kenya</p>
              <p><span className="font-semibold">Focus:</span> Software Development, Android, Backend, Web Applications</p>
              <p><span className="font-semibold">Education:</span> Bachelor of Science in Computer Science</p>
              <p><span className="font-semibold">Strengths:</span> Problem-solving, system design, debugging, academic and practical project development</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-slate-700 leading-8 text-lg">
            I am a Computer Science graduate with experience in designing and building software systems
            across mobile, web, and backend environments. My work includes Android development,
            database integration, full-stack project development, and academic research-driven system
            design. I enjoy translating technical requirements into usable applications and continuously
            growing my skills in modern software engineering.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white rounded-3xl shadow-lg border border-slate-200 p-6"
            >
              <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
              <p className="text-slate-600 leading-7 mb-5">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1 rounded-full bg-slate-100 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-slate-200">
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <p className="text-lg text-slate-700">
            <span className="font-semibold">Bachelor of Science in Computer Science</span><br />
            University of Embu, Kenya
          </p>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-slate-900 text-white rounded-3xl shadow-xl p-8 md:p-10">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-slate-300 text-lg mb-6">
            I’m open to graduate roles, internships, freelance opportunities, and collaborative software projects.
          </p>
          <div className="space-y-3 text-lg">
            <p><span className="font-semibold">Email:</span> munyokijobdeveloper@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> +254 799 165 471</p>
            <p><span className="font-semibold">GitHub:</span> github.com/JobMunyoki</p>
            <p><span className="font-semibold">Location:</span> Nairobi, Kenya</p>
          </div>
        </div>
      </section>
    </div>
  );
}