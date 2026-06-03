const resumeData = {
  name: "Rene B. Villondo Jr.",
  title: "Full-Stack Developer Resume",
  headline: "Full-stack developer building responsive web applications with React, Next.js, Tailwind CSS, and MongoDB, backed by a strong IT support and problem-solving foundation.",
  contact: {
    phone: "+63 9154889725",
    email: "rene.villondo01@gmail.com",
    location: "Guiwan, Zamboanga City",
  },
};

const skills = [
  "Hardware Troubleshooting",
  "Network Troubleshooting",
  "HTML",
  "CSS",
  "PHP",
  "JavaScript",
  "Automation & IT Support",
  "Tailwind CSS",
  "React",
  "Next.js",
  "MongoDB",
];

const experience = [
  {
    id: "emergency-operations",
    role: "IT Support",
    company: "BIOND INC.",
    period: "Emergency Operations Center Project - Dapitan City",
    summary:
      "Provided IT support for emergency operations systems and operational technology needs during the project implementation.",
  },
  {
    id: "automation-modernization",
    role: "IT Support",
    company: "BIOND INC.",
    period: "Automation and Modernization Project - Municipal Government of Kabasalan",
    summary:
      "Supported automation and modernization efforts for municipal operations, improving IT service reliability and workflow efficiency.",
  },
  {
    id: "uz-internship",
    role: "Intern",
    company: "UZ MANAGEMENT INFORMATION SYSTEM DEPARTMENT",
    period: "Summer of SY 2019-2020",
    summary:
      "Gained hands-on exposure to IT systems support, troubleshooting, and practical office technology operations.",
  },
];

const trainings = [
  "Android Mobile Application Development Training — March 16-19, 2019",
  "4th ICT Research Conference — December 6-8, 2018",
  "CSS NC II Seminar-Workshop — March 3, 10, 17 & 24, 2018",
  "Basic Computer Network Training — February 1-2, 2018",
  "Web-based Programming (HTML, PHP, Bootstrap) — November 19, 2017",
  "Android Workshop for Beginners — July 26 to 28, 2017",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#07111f_0%,#111827_45%,#172554_100%)] text-slate-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 py-10 lg:px-10">
        <header className="rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl shadow-black/20 backdrop-blur md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="lg:max-w-3xl">
              <div className="space-y-4 text-left lg:pt-1">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">{resumeData.title}</p>
                <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-5xl">
                  {resumeData.name} · Full-Stack Developer
                </h1>
                <p className="max-w-2xl text-lg text-slate-200 md:text-xl">
                  {resumeData.headline}
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5 text-sm text-cyan-100 lg:min-w-[320px] lg:self-start">
              <p className="font-semibold">Available for full-stack development and IT support roles</p>
              <p className="mt-1 text-cyan-50/80">{resumeData.contact.phone} · {resumeData.contact.email}</p>
              <p className="mt-1 text-cyan-50/70">{resumeData.contact.location}</p>
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-black/25 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Profile</h2>
            <p className="mt-4 text-slate-200">
              Full-stack developer focused on building responsive web applications with React, Next.js, Tailwind CSS, MongoDB, HTML, CSS, PHP, and JavaScript. I combine practical web development skills with a strong IT support background to deliver reliable, user-friendly solutions.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Focus", "Full-stack development"],
                ["Stack", "Tailwind CSS, React, Next.js, MongoDB"],
                ["Strength", "IT support & problem solving"],
                ["Location", resumeData.contact.location],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">{label}</p>
                  <p className="mt-2 text-sm text-slate-100">{value}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-black/25 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Core Skills</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-50"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-8 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-50">
              <strong>Strength:</strong> Full-stack web development, troubleshooting, and practical IT support for modern digital projects.
            </div>
          </article>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-black/25 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Experience</h2>
            <div className="mt-6 space-y-6">
              {experience.map((item) => (
                <article key={item.id} className="border-l border-cyan-400/30 pl-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">{item.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.role}</h3>
                  <p className="text-sm text-slate-300">{item.company}</p>
                  <p className="mt-3 text-slate-200">{item.summary}</p>
                </article>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-black/25 backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Trainings & Seminars</h2>
            <div className="mt-6 space-y-5">
              {trainings.map((training) => (
                <article key={training} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="mt-2 text-slate-200">{training}</p>
                </article>
              ))}
            </div>
          </article>
        </section>

        <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-8 shadow-2xl shadow-black/25 backdrop-blur">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">Education & Contact</h2>
              <p className="mt-3 max-w-2xl text-slate-200">
                Bachelor of Science in Computer Science · Universidad de Zamboanga · 2015-2020
              </p>
              <p className="mt-2 text-slate-300">{resumeData.contact.phone} · {resumeData.contact.email}</p>
            </div>
            <a
              href="/VillondoCV.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Download CV
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
