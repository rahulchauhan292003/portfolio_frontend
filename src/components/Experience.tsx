import { useEffect, useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Fresco Web Services',
    role: 'MERN Stack Developer',
    period: 'January 2025 – June 2026',
    current: true,
    points: [
      'Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, Node.js, and MySQL.',
      'Built responsive React.js interfaces and integrated them with RESTful APIs for seamless user experience.',
      'Developed scalable backend services using Node.js and Express.js with JWT Authentication and Role-Based Access Control (RBAC).',
      'Designed and optimized MySQL and MongoDB databases for efficient data storage and retrieval.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'RBAC'],
  },
  {
    company: 'Sensation Solutions',
    role: 'MERN Stack Developer',
    period: 'August 2024 – January 2025',
    current: false,
    points: [
      'Designed and developed dynamic full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, and Node.js).',
      'Created RESTful APIs and integrated them with front-end components to ensure seamless data flow.',
      'Implemented robust back-end functionality with Node.js and Express.js, ensuring scalability and security.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful API'],
  },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.target.classList.toggle('visible', e.isIntersecting)),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-blue-400 font-mono">
            <Briefcase className="w-4 h-4" /> Work Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Career Journey</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Over 1.5 years of professional experience delivering production-grade applications.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className="section-reveal timeline-item relative md:pl-20"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="timeline-dot absolute left-6 top-8 w-4 h-4 rounded-full border-2 border-blue-500 bg-[#0a0f1e] hidden md:block z-10" />

                <div className="glass rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                        {exp.current && (
                          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-green-400 bg-green-400/10 border border-green-400/20 rounded-full px-3 py-0.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-blue-400 font-medium">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 flex-shrink-0">
                      <Calendar className="w-4 h-4" />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map(t => (
                      <span key={t} className="text-xs font-mono text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
