import { useEffect, useRef } from 'react';
import { FolderGit2, ExternalLink, Calendar, Shield, ShoppingCart, Users } from 'lucide-react';

const projects = [
  {
    title: 'Ahuja Books',
    subtitle: 'E-commerce Web Application',
    period: 'Jan 2026 – Mar 2026',
    icon: ShoppingCart,
    gradient: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-500/20',
    description:
      'A full-stack e-commerce platform with product management, shopping cart, orders, and integrated payment processing.',
    highlights: [
      'Full-stack app using MongoDB, Express.js, React.js, Node.js, and MySQL',
      'Backend APIs for authentication, product management, cart, orders & payments',
      'JWT Authentication, RBAC, and AWS S3 image uploads',
      'PayU Payment Gateway integration',
      'Optimized database queries for scalability and reliability',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'AWS S3', 'PayU'],
  },
  {
    title: 'Community Resource & Discussion Platform',
    subtitle: 'Social Community Web App',
    period: 'Aug 2025 – Nov 2025',
    icon: Users,
    gradient: 'from-emerald-600 to-teal-600',
    borderColor: 'border-emerald-500/20',
    description:
      'A community-driven discussion platform supporting rich interactions, resource sharing, and an admin panel for content governance.',
    highlights: [
      'Full-stack platform using React.js, Node.js, Express.js, MongoDB, and MySQL',
      'RESTful APIs for auth, discussions, comments, reactions & resource management',
      'Admin Panel with RBAC for user and content management',
      'Secure authentication with JWT and optimized backend performance',
      'Responsive React.js components integrated with backend services',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'JWT', 'RBAC', 'Admin Panel'],
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-28 relative bg-[#080d1a]">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-blue-400 font-mono">
            <FolderGit2 className="w-4 h-4" /> Projects
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Production-grade applications built end-to-end — from database design to responsive UI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`section-reveal project-card glass rounded-2xl overflow-hidden border ${project.borderColor}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className={`h-1.5 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20 flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                      <p className="text-sm text-slate-500">{project.subtitle}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono flex-shrink-0">
                    <Calendar className="w-3 h-3" />
                    <span className="hidden sm:block">{project.period}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">{project.description}</p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-400 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="text-xs font-mono text-slate-400 bg-slate-800/60 border border-white/5 rounded-full px-2.5 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal text-center mt-12" style={{ transitionDelay: '0.3s' }}>
          <a
            href="https://github.com/rahulchauhan292003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-outline text-white font-medium px-6 py-3 rounded-xl"
          >
            <ExternalLink className="w-4 h-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
