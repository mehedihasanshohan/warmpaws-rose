import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaPaw, FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] pt-24 pb-10 overflow-hidden">
      {/* Background Glass Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="bg-cyan-500/20 p-2 rounded-xl border border-cyan-500/30 group-hover:bg-cyan-500 transition-all duration-300">
                <FaPaw className="text-cyan-400 group-hover:text-[#0f172a] text-2xl" />
              </div>
              <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
                WARMPAWS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-8">
              Ensuring every pet stays warm, healthy, and happy during the winter season. Your pet's comfort is our priority.
            </p>
            <div className="flex gap-4">
              {[FaFacebook, FaGithub, FaLinkedin].map((Icon, index) => (
                <Link key={index} to="/" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-2">
            <h6 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Services</h6>
            <ul className="flex flex-col gap-4 text-sm">
              {["Pet Grooming", "Winter Care", "Vet Consultation", "Pet Adoption"].map((link) => (
                <li key={link}>
                  <Link className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-2">
            <h6 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Company</h6>
            <ul className="flex flex-col gap-4 text-sm">
              {["About Us", "Contact", "Privacy Policy", "Terms"].map((link) => (
                <li key={link}>
                  <Link className="text-slate-400 hover:text-cyan-400 transition-colors duration-300">{link}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-4">
            <h6 className="text-white font-bold uppercase tracking-[0.2em] text-xs mb-8">Newsletter</h6>
            <p className="text-slate-400 text-sm mb-6">Stay updated with the latest winter pet care tips.</p>
            <div className="relative group">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/3 border border-white/10 rounded-2xl py-4 px-6 text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-cyan-500 hover:bg-cyan-400 text-[#0f172a] px-4 rounded-xl transition-all flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs tracking-wide">
            © {new Date().getFullYear()} <span className="text-slate-300 font-bold">WARMPAWS</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest">
             <span className="text-slate-600">Status: <span className="text-green-500">Online</span></span>
             <span className="text-slate-400 flex items-center gap-2">
                Dev with <span className="text-pink-500 animate-pulse text-lg">❤</span>
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;