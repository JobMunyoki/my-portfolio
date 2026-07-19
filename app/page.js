export default function PortfolioWebsite() {
  const skills = [
    "Java",
    "Python",
    "JavaScript",
    "Spring Boot",
    "FastAPI",
    "Django REST Framework",
    "React",
    "Next.js",
    "Material UI",
    "Tailwind CSS",
    "MySQL",
    "PostgreSQL",
    "SQLite",
    "Supabase",
    "REST APIs",
    "JWT Authentication",
    "Machine Learning",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Streamlit",
    "Plotly",
    "Data Analytics",
    "Predictive Analytics",
    "Cybersecurity",
    "Git/GitHub",
    "Vercel",
    "Railway",
    "Render",
    "Android Development"
  ];

  const projects = [
    {
  title: "FraudGuard AI",
  category: "AI-Powered Banking Fraud Detection",
  description:
    "An AI-powered banking fraud detection platform built with Spring Boot, React, FastAPI, MySQL, Render, and Vercel. The system analyzes financial transactions, predicts fraudulent activity using machine learning, calculates fraud risk scores, provides interactive analytics dashboards, and supports secure fraud investigation workflows through role-based access."
  tech: [
    "Spring Boot",
    "React",
    "FastAPI",
    "Python",
    "MySQL",
    "JWT Authentication",
    "Machine Learning",
    "REST APIs",
    "Render",
    "Vercel"
  ],
  github: "https://github.com/JobMunyoki/fraudguard-ai",
  demo: "https://fraudguard-ai-2foh.vercel.app"
},
    {
      title: "CyberShield",
      category: "Cybersecurity Incident & Vulnerability Management System",
      description:
        "A full-stack cybersecurity platform that enables organizations to manage IT assets, report security incidents, track vulnerabilities, monitor critical alerts, maintain investigation timelines, and generate audit logs through a secure role-based system.",
      tech: [
        "Django REST Framework",
        "React",
        "Material UI",
        "MySQL",
        "Railway",
        "Vercel"
      ],
      github: "https://github.com/JobMunyoki/cybershield",
      demo: "https://cybershield-three-pi.vercel.app"
    },
    {
      title: "SmartVision",
      category: "Android Application",
      status: "Ongoing Development",
      description:
        "An Android-based eye health application that monitors ambient light, screen time, device proximity, and user behavior to promote healthier digital habits. The system provides real-time recommendations and notifications to reduce eye strain, with ongoing development focused on AI-powered eye health analysis, cloud synchronization, and personalized wellness insights.",
      tech: ["Java", "Android SDK", "SQLite", "CameraX", "Device Sensors", "Usage Stats API", "Foreground Services", "Notifications"],
      github: "https://github.com/JobMunyoki",
      demo: "#"
    },
    {
      title: "Urban Swap",
      category: "Web Platform",
      description:
        "A car hire web platform that allows owners to list vehicles and clients to browse, book, and manage rentals through a structured digital workflow.",
      tech: ["Next.js", "Supabase", "Tailwind CSS", "Vercel", "GitHub"],
      github: "https://github.com/JobMunyoki/urban-swap-lite",
      demo: "https://urban-swap-lite-4frfzdunj-jobmunyokis-projects.vercel.app"
    },
    {
  title: "Smart Agrovet Sales Analytics Dashboard",
  category: "Data Analytics & Business Intelligence",
  description:
    "A business intelligence dashboard designed for agrovet businesses to analyze sales performance, product demand, revenue trends, and inventory movement. The system processes sales data from CSV files and provides actionable insights through interactive visualizations and KPI tracking.",
  tech: [
    "Python",
    "Pandas",
    "Streamlit",
    "Plotly",
    "CSV Analytics",
    "Business Intelligence"
  ],
  github: "https://github.com/JobMunyoki",
  demo: "https://smart-agrovet-sales-dashboard-adm6s4hshkgz2ejtpehewx.streamlit.app"
},
  {
  title: "Agrovet Sales Prediction Model",
  category: "Machine Learning & Predictive Analytics",
  description:
    "A machine learning application that predicts future agrovet sales using historical sales data. The model helps businesses forecast demand, identify sales trends, and support inventory planning and business decision-making.",
  tech: [
    "Python",
    "Scikit-Learn",
    "Pandas",
    "NumPy",
    "Machine Learning",
    "Sales Forecasting"
  ],
  github: "https://github.com/JobMunyoki",
  demo: "https://jobmunyoki-agrovet-sales-prediction-model-app-j7b7sn.streamlit.app"
},
        
  ];
  const experience = [
  {
    role: "QuickBooks POS & IT Support",
    company: "Winner Distributors",
    type: "IT Support & Business Systems",
    description:
      "Provided technical support, QuickBooks Point of Sale maintenance, troubleshooting, backup and recovery, network support, and user assistance. Helped maintain business systems and ensure smooth daily operations.",
    tools: [
      "QuickBooks POS",
      "Windows",
      "Networking",
      "Data Backup",
      "Technical Support"
    ]
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
            <a href="#skills" className="hover:text-cyan-300 transition">Skills</a>
            <a href="#projects" className="hover:text-cyan-300 transition">Projects</a>
            <a href="#experience" className="hover:text-cyan-300 transition">Experience</a>
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
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-blue-300 hover:bg-blue-400/20 hover:-translate-y-0.5 transition"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-sm">
              in
            </span>
            <span>LinkedIn</span>
          </a>
          </div>
          </nav>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
            <div>
              <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 mb-6">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                Open to junior software engineering, backend, full-stack, AI/ML, cybersecurity, and remote opportunities
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Building practical{" "}
                <span className="text-cyan-300">full-stack</span>,{" "}
                <span className="text-cyan-300">backend</span>, and{" "}
                <span className="text-cyan-300">AI-powered</span> solutions.
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
                    <span>Download CV</span>
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
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">6+</p>
                  <p className="text-sm text-slate-400 mt-1">Featured Projects</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">20+</p>
                  <p className="text-sm text-slate-400 mt-1">Core Technologies</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">5+</p>
                  <p className="text-sm text-slate-400 mt-1">Live Deployments</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-cyan-300">Full-Stack</p>
                  <p className="text-sm text-slate-400 mt-1">Backend • AI • Android</p>
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
                  <p><strong>Focus:</strong> Full-Stack Development, Backend Engineering,  AI/ML, Cybersecurity, and Android Development</p>
                  <p><span className="font-semibold text-white">Education:</span> Bachelor of Science in Computer Science</p>
                  <p><strong>Current Goal:</strong> Seeking junior software engineering, backend, full-stack, AI/ML, and cybersecurity opportunities.</p>
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
              I am a Computer Science graduate with practical experience building
              full-stack web applications, backend APIs, Android applications,
              machine-learning systems, and database-driven platforms.
            </p>

            <p className="text-slate-300 leading-8 text-lg">
              My projects include fraud detection, cybersecurity management,
              business analytics, sales prediction, and mobile health technology.
              I focus on building reliable, usable, and deployable software solutions.
            </p>
          </div>

          <div className="bg-slate-900 border border-white/10 rounded-3xl shadow-xl p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">What I Bring</p>
            <div className="space-y-5 text-slate-300 leading-7">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-2">
                  Full-Stack Perspective
                </h3>
                <p>
                  I work across frontend interfaces, backend APIs, databases,
                  machine-learning services, and deployment workflows.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-2">
                  End-to-End Project Experience
                </h3>
                <p>
                  I have designed, developed, tested, documented, and deployed practical
                  software projects from concept to production.
                </p>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-semibold text-white mb-2">Growth Mindset</h3>
                <p>I learn quickly, adapt to tools fast, and value clean solutions that solve real problems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-2">
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
                  {project.status && (
                    <span className="mb-2 inline-flex w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-300">
                      {project.status}
                    </span>
                  )}
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
                {project.demo !== "#" && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center px-4 py-3 rounded-2xl border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition"
                >
                  Live Demo
                </a>
              )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
  <div className="flex items-end justify-between gap-4 mb-8 flex-wrap">
    <div>
      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-2">
        Experience
      </p>
      <h2 className="text-3xl font-bold">Professional Experience</h2>
    </div>
    <p className="text-slate-400 max-w-xl">
      Practical IT and business systems experience supporting real company operations.
    </p>
  </div>

  <div className="grid md:grid-cols-1 gap-6">
    {experience.map((item) => (
      <div
        key={item.role}
        className="bg-slate-900 rounded-3xl shadow-xl border border-white/10 p-8 hover:border-cyan-400/30 transition"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-3">
          {item.type}
        </p>

        <h3 className="text-2xl font-semibold mb-2">{item.role}</h3>

        <p className="text-slate-400 mb-5">{item.company}</p>

        <p className="text-slate-300 leading-8 mb-6">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {item.tools.map((tool) => (
            <span
              key={tool}
              className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-white/5"
            >
              {tool}
            </span>
          ))}
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
              Backend Software Engineer, Full-Stack Developer, AI/ML Developer, Cybersecurity Engineer, and Android Developer.
            </p>
          </div>
          <div className="bg-slate-900 border border-white/10 rounded-3xl p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300 mb-4">Availability</p>
            <h3 className="text-2xl font-semibold mb-3">Open for Opportunities</h3>
            <p className="text-slate-300 leading-8">
              Open to graduate software engineering roles, backend development, full-stack development, AI/ML engineering, cybersecurity, internships, and remote opportunities.
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let’s Build Your Next Software Solution</h2>
        <p className="text-slate-300 text-lg mb-8 max-w-3xl leading-8">
          I’m currently seeking junior software engineering, backend, full-stack,
          AI/ML, and cybersecurity opportunities. Whether you’re hiring,
          collaborating, or discussing a software project, I’d be happy to connect.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=munyokijobdeveloper@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>

          <a
            href="tel:+254799165471"
            className="inline-flex items-center justify-center rounded-lg border border-green-400/40 bg-green-400/10 px-5 py-3 font-semibold text-green-300 transition hover:bg-green-400/20"
          >
            Call Me
          </a>

          <a
            href="https://wa.me/254799165471?text=Hello%20Job%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-green-400/40 bg-green-400/10 px-5 py-3 font-semibold text-green-300 transition hover:bg-green-400/20"
          >
            WhatsApp
          </a>

          <a
            href="https://github.com/JobMunyoki"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 font-medium hover:bg-white/10 transition"
          >
            GitHub Profile
          </a>
        
        </div>
        <p className="mt-8 border-t border-white/10 pt-6 text-slate-400 leading-7 italic">
          Thank you for taking the time to explore my portfolio. I&apos;m
          passionate about building practical software solutions that solve
          real-world problems, and I&apos;m always open to new opportunities,
          collaborations, and meaningful conversations. I look forward to
          connecting with you.
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-7">
        <h3 className="text-2xl font-semibold mb-5">Contact Details</h3>

        <div className="space-y-4 text-slate-300 text-lg">
          <p><span className="font-semibold text-white">📧 Email:</span>{" "}
            <a
              href="mailto:munyokijobdeveloper@gmail.com"
              className="text-cyan-300 hover:text-cyan-200 hover:underline transition"
            >
              munyokijobdeveloper@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">📱 Phone:</span>{" "}
            <a
              href="tel:+254799165471"
              className="text-cyan-300 hover:text-cyan-200 hover:underline transition"
            >
              +254 799 165 471
            </a>
          </p>
          <p>
            <span className="font-semibold text-white">💻 GitHub:</span>{" "}
            <a
              href="https://github.com/JobMunyoki"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 hover:text-cyan-200 hover:underline transition"
            >
              github.com/JobMunyoki
            </a>
          </p>

          <div className="rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3">
            <p className="mb-1 font-semibold text-white">LinkedIn</p>

            <p className="text-sm text-slate-400 mb-3">
              Connect with me professionally
            </p>

            <a
              href="https://www.linkedin.com/in/job-munyoki-8b4456303"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-cyan-300 hover:text-cyan-200 transition"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-300">
                in
              </span>

              <span className="break-all">
                linkedin.com/in/job-munyoki-8b4456303
              </span>
            </a>
          </div>

          <p>
            <span className="font-semibold text-white">📍 Location:</span>{" "}
            Nairobi, Kenya
          </p>
          <p>
            <span className="font-semibold text-white">🟢 Availability:</span>{" "}
            Available for software engineering opportunities
          </p>

          <p>
            <span className="font-semibold text-white">🕒 Time Zone:</span>{" "}
            East Africa Time (UTC+3)
          </p>

          <p>
            <span className="font-semibold text-white">💬 Response Time:</span>{" "}
            Usually responds within 24 hours
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}
