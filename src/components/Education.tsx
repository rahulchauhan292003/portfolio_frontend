import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const education = [
  {
    institution: 'AKTU',
    fullName: 'Dr. A.P.J. Abdul Kalam Technical University',
    degree: 'Bachelor of Technology',
    field: 'Computer Science & Engineering',
    period: 'August 2020 – July 2024',
    grade: 'B.Tech (CSE)',
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/20',
    icon: GraduationCap,
  },
  {
    institution: 'PNS Arihant Public Academy',
    fullName: 'CBSE Board',
    degree: 'Intermediate (Class XII)',
    field: 'Science Stream',
    period: '2018 – 2020',
    grade: 'Senior Secondary',
    color: 'from-emerald-500 to-teal-500',
    border: 'border-emerald-500/20',
    icon: Award,
  },
  {
    institution: 'PNS Arihant Public Academy',
    fullName: 'CBSE Board',
    degree: 'High School (Class X)',
    field: 'General Studies',
    period: '2016 – 2018',
    grade: 'Secondary',
    color: 'from-amber-500 to-orange-500',
    border: 'border-amber-500/20',
    icon: Award,
  },
];

export default function Education() {
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
    <section id="education" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-blue-400 font-mono">
            <GraduationCap className="w-4 h-4" /> Education
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Academic <span className="text-gradient">Background</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A strong academic foundation in Computer Science combined with real-world development experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <div
              key={`${edu.institution}-${edu.degree}`}
              className={`section-reveal glass rounded-2xl overflow-hidden border ${edu.border} hover:scale-105 transition-transform duration-300`}
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={`h-1 bg-gradient-to-r ${edu.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${edu.color} bg-opacity-10 flex items-center justify-center mb-4`}
                  style={{ background: 'rgba(59,130,246,0.1)' }}>
                  <edu.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-xs font-bold uppercase tracking-widest font-mono bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-1`}>
                  {edu.grade}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{edu.degree}</h3>
                <p className="text-sm text-slate-400 mb-1">{edu.field}</p>
                <p className="text-sm font-semibold text-slate-300 mb-1">{edu.institution}</p>
                <p className="text-xs text-slate-600 mb-4">{edu.fullName}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <Calendar className="w-3 h-3" />
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
