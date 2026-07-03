import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown, Download } from 'lucide-react';

const roles = [
  'MERN Stack Developer',
  'Full-Stack Engineer',
  'React.js Developer',
  'Node.js Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1e]/50 to-[#0a0f1e]" />

      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm text-blue-400 font-mono">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I'm{' '}
            <span className="text-gradient">Rahul</span>
            <br />
            <span className="text-gradient">Chauhan</span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 h-10 mb-6">
            <span className="text-xl md:text-2xl text-slate-300 font-medium">{displayed}</span>
            <span className="cursor-blink text-blue-400 text-2xl font-light">|</span>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
            MERN Stack Developer with <span className="text-blue-400 font-semibold">1.5+ years</span> of experience building
            scalable, production-grade web applications with modern technologies.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-10">
            <a href="mailto:rahulchauhan1420@gmail.com" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
              <Mail className="w-4 h-4" /> rahulchauhan1420@gmail.com
            </a>
            <span className="text-slate-700 hidden sm:block">|</span>
            <a href="tel:8755383654" className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors">
              <Phone className="w-4 h-4" /> +91 8755383654
            </a>
            <span className="text-slate-700 hidden sm:block">|</span>
            <span className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="w-4 h-4" /> Mohali, India
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-primary text-white font-semibold px-6 py-3 rounded-xl"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="btn-outline text-white font-semibold px-6 py-3 rounded-xl"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
            <a
              href="https://github.com/rahulchauhan292003"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/rahul-chauhan-2903-c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:rahulchauhan1420@gmail.com"
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex-shrink-0 hidden lg:block">
          <div className="relative w-72 h-72 animate-float">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-500 opacity-20 blur-2xl" />
            <div className="relative w-72 h-72 rounded-3xl glass-blue overflow-hidden flex items-center justify-center glow-blue">
              <div className="text-center p-8">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-6 flex items-center justify-center shadow-2xl">
                  <span className="text-5xl font-black text-white font-mono">RC</span>
                </div>
                <div className="font-mono text-sm text-blue-400 mb-1">const developer = {`{`}</div>
                <div className="font-mono text-xs text-slate-400 pl-4">name: "Rahul",</div>
                <div className="font-mono text-xs text-slate-400 pl-4">stack: "MERN",</div>
                <div className="font-mono text-xs text-slate-400 pl-4">exp: "1.5+ yrs"</div>
                <div className="font-mono text-sm text-blue-400">{`}`}</div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 glass rounded-2xl px-3 py-2 text-xs font-mono text-green-400 border border-green-500/20">
              React.js
            </div>
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-3 py-2 text-xs font-mono text-yellow-400 border border-yellow-500/20">
              Node.js
            </div>
            <div className="absolute top-1/2 -right-8 glass rounded-2xl px-3 py-2 text-xs font-mono text-blue-400 border border-blue-500/20">
              MongoDB
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
