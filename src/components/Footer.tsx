import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Rahul Chauhan</p>
              <p className="text-xs text-slate-500 font-mono">MERN Stack Developer</p>
            </div>
          </div>

          <p className="text-sm text-slate-600 flex items-center gap-1.5">
            Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Rahul &copy; {year}
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/rahulchauhan292003"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/rahul-chauhan-2903-c"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:rahulchauhan1420@gmail.com"
              className="w-9 h-9 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-blue-400 hover:border-blue-500/30 transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
