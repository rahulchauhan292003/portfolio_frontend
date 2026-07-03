import { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rahulchauhan1420@gmail.com',
    href: 'mailto:rahulchauhan1420@gmail.com',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8755383654',
    href: 'tel:+918755383654',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mohali, Punjab, India',
    href: null,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    username: 'rahulchauhan292003',
    href: 'https://github.com/rahulchauhan292003',
    color: 'hover:border-slate-400/50 hover:text-white',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    username: 'rahul-chauhan-2903-c',
    href: 'https://linkedin.com/in/rahul-chauhan-2903-c',
    color: 'hover:border-blue-400/50 hover:text-blue-400',
  },
];

export default function Contact() {
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
    <section id="contact" ref={ref} className="py-28 relative bg-[#080d1a]">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-4 text-sm text-blue-400 font-mono">
            <MessageSquare className="w-4 h-4" /> Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Have a project in mind or an opportunity to discuss? I'm just a message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="section-reveal space-y-6" style={{ transitionDelay: '0.1s' }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Get In Touch</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm actively looking for new opportunities as a MERN Stack Developer. Whether you have a
                full-time role, freelance project, or just want to connect — I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(item => (
                <div key={item.label} className={`glass rounded-xl p-4 border ${item.bg} flex items-center gap-4`}>
                  <div className={`w-10 h-10 rounded-lg border flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className={`text-sm font-medium ${item.color} hover:underline`}>
                        {item.value}
                      </a>
                    ) : (
                      <p className={`text-sm font-medium ${item.color}`}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <p className="text-xs text-slate-600 uppercase tracking-widest font-mono mb-3">Connect on</p>
              <div className="flex gap-3">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass flex items-center gap-3 px-4 py-3 rounded-xl text-slate-400 border border-white/5 transition-all duration-300 ${link.color}`}
                  >
                    <link.icon className="w-5 h-5" />
                    <div className="text-left">
                      <p className="text-xs text-slate-500">{link.label}</p>
                      <p className="text-xs font-mono">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="section-reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-5 h-5 text-blue-400" />
                Send a Message
              </h3>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  window.location.href = 'mailto:rahulchauhan1420@gmail.com';
                }}
                className="space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-slate-500 font-mono mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-500 font-mono mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-500 font-mono mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    placeholder="Job Opportunity / Project Collaboration"
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 font-mono mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full text-white font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
