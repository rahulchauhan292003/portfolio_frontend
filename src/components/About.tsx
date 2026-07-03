import { useEffect, useRef } from 'react';
import { User, Code2, Globe, Database } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '1.5+' },
  { label: 'Projects Shipped', value: '10+' },
  { label: 'Technologies', value: '10+' },
  { label: 'Companies', value: '2' },
];

const highlights = [
  { icon: Code2, title: 'Backend', desc: 'Node.js & Express.js APIs with JWT auth, RBAC, and scalable architecture.' },
  { icon: Globe, title: 'Frontend', desc: 'Responsive React.js UIs with clean component structure and RESTful API integration.' },
  { icon: Database, title: 'Database', desc: 'MongoDB & MySQL design, query optimization, and data modeling for scale.' },
];

export default function About() {
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
    <section id="about" ref={ref} className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-blue-400 font-mono">
            <User className="w-4 h-4" /> About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Crafting <span className="text-gradient">Digital Experiences</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Passionate about building full-stack applications that are fast, scalable, and user-friendly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="section-reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 className="text-2xl font-bold text-white mb-5">
              Who I am
            </h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              I'm a <span className="text-white font-medium">MERN Stack Developer</span> based in Mohali, India,
              with over 1.5 years of professional experience building and shipping production web applications.
              I specialize in creating seamless, end-to-end solutions from RESTful APIs to responsive front-ends.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              At <span className="text-blue-400 font-medium">Fresco Web Services</span>, I've developed and maintained
              full-stack applications leveraging MongoDB, MySQL, Node.js, and React.js — implementing JWT authentication,
              RBAC, AWS S3 integrations, and payment gateways.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I hold a <span className="text-white font-medium">B.Tech in Computer Science</span> from AKTU and am
              constantly leveling up my skills to deliver solutions that are both technically sound and business-driven.
            </p>
          </div>

          <div className="section-reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '0.2s' }}>
            {stats.map(s => (
              <div key={s.label} className="glass rounded-2xl p-6 text-center glow-blue-sm hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-black text-gradient mb-2">{s.value}</div>
                <div className="text-sm text-slate-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <div
              key={h.title}
              className="section-reveal glass rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-300 group"
              style={{ transitionDelay: `${0.1 + i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <h.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{h.title}</h4>
              <p className="text-sm text-slate-400 leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
