import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = links.map(l => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          break;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-white font-mono text-sm tracking-wider">RC</span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className={`nav-link text-sm font-medium transition-colors duration-200 ${
                active === l.href ? 'text-blue-400' : 'text-slate-400 hover:text-white'
              } ${active === l.href ? 'active' : ''}`}
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:rahulchauhan1420@gmail.com"
            className="btn-primary text-sm font-medium text-white px-4 py-2 rounded-lg"
          >
            Hire Me
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-400 hover:text-white transition-colors"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-left text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="mailto:rahulchauhan1420@gmail.com"
            className="btn-primary text-sm font-medium text-white px-4 py-2 rounded-lg text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
