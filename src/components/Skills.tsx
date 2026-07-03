import { useEffect, useRef } from 'react';
import { Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    color: 'from-blue-500 to-blue-700',
    borderColor: 'border-blue-500/20',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'JWT Auth', level: 85 },
      { name: 'RBAC', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-cyan-500 to-cyan-700',
    borderColor: 'border-cyan-500/20',
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 87 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
  },
  {
    title: 'Database',
    color: 'from-emerald-500 to-emerald-700',
    borderColor: 'border-emerald-500/20',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Mongoose', level: 83 },
    ],
  },
  {
    title: 'Tools & Cloud',
    color: 'from-amber-500 to-amber-700',
    borderColor: 'border-amber-500/20',
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'AWS S3', level: 72 },
      { name: 'PayU Gateway', level: 70 },
    ],
  },
];

const techTags = [
  'Node.js', 'Express.js', 'React.js', 'MongoDB', 'MySQL',
  'JavaScript', 'HTML5', 'CSS3', 'RESTful API', 'JWT',
  'RBAC', 'Git', 'GitHub', 'AWS S3', 'PayU',
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            const bars = e.target.querySelectorAll<HTMLElement>('.skill-bar-fill');
            bars.forEach(bar => bar.classList.add('animated'));
          }
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.section-reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 relative bg-[#080d1a]">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-blue-400 font-mono">
            <Cpu className="w-4 h-4" /> Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A collection of technologies I use to build fast, scalable, and maintainable applications.
          </p>
        </div>

        <div className="section-reveal grid md:grid-cols-2 gap-6 mb-12" style={{ transitionDelay: '0.1s' }}>
          {skillCategories.map(cat => (
            <div key={cat.title} className={`glass rounded-2xl p-6 border ${cat.borderColor}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-6 rounded-full bg-gradient-to-b ${cat.color}`} />
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-slate-500 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className={`skill-bar-fill h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        style={{ '--target-width': `${skill.level}%` } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-reveal text-center" style={{ transitionDelay: '0.2s' }}>
          <p className="text-xs text-slate-600 uppercase tracking-widest font-mono mb-4">All Technologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techTags.map(tag => (
              <span
                key={tag}
                className="glass text-sm text-slate-300 px-4 py-2 rounded-full border border-white/5 hover:border-blue-500/40 hover:text-blue-300 transition-all duration-300 cursor-default font-mono"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
