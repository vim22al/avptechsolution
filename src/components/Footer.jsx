import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      link: 'https://www.facebook.com/AVPTechSolution',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" />
        </svg>
      ),
      color: 'hover:text-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/avp_techsolution',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      color: 'hover:text-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]'
    },
    {
      name: 'YouTube',
      link: 'https://www.youtube.com/@BusinessAutomationVimalPatel',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      color: 'hover:text-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]'
    },
    {
      name: 'WhatsApp',
      link: 'https://api.whatsapp.com/send?phone=918090065713&text=Hello!',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-2.652-.001-5.146 1.031-7.023 2.91s-2.91 4.371-2.911 7.022c0 2.251.644 3.844 1.737 5.753l-1.122 4.095 4.195-1.101-.286.107zm11.383-7.797c-.312-.156-1.844-.91-2.13-.101-.286.107-.572.572-.7.7-.128.128-.256.143-.568-.013-.312-.156-1.317-.484-2.508-1.546-.926-.826-1.551-1.846-1.733-2.158-.182-.312-.019-.481.136-.635.141-.141.312-.364.468-.546.156-.182.208-.312.312-.52s.052-.39-.026-.546c-.078-.156-.7-1.69-.961-2.313-.254-.607-.512-.524-.7-.534-.176-.009-.377-.011-.578-.011-.201 0-.527.075-.803.375-.276.3-.1.546-.1.546s-1.157 1.144-.803 2.156c.354 1.012.721 1.603 1.258 2.454 2.156 3.42 4.161 5.385 7.152 6.643 2.991 1.258 3.51.844 4.144.757.634-.087 1.844-.753 2.103-1.448.259-.695.259-1.291.182-1.413-.076-.122-.284-.195-.596-.351z" />
        </svg>
      ),
      color: 'hover:text-green-500 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]'
    },
    {
      name: 'Telegram',
      link: 'https://t.me/avptechsolution',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0C5.346 0 0 5.346 0 11.944s5.346 11.944 11.944 11.944 11.944-5.346 11.944-11.944S18.542 0 11.944 0zm5.203 7.841l-1.815 8.563c-.137.604-.495.753-.997.471l-2.766-2.039-1.334 1.284c-.147.147-.271.271-.555.271l.198-2.813 5.121-4.625c.223-.198-.049-.307-.346-.109l-6.328 3.986-2.727-.852c-.593-.186-.605-.593.124-.878l10.659-4.109c.494-.186.926.109.756.841z" />
        </svg>
      ),
      color: 'hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]'
    }
  ];

  return (
    <footer className="bg-[#0F172A] pt-32 pb-12 border-t border-white/5 relative overflow-hidden font-inter">
      {/* Footer Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/10 blur-[150px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* 1. COMPANY INFO */}
          <div className="space-y-8">
            <Link to="/" className="relative z-10">
              <Logo />
            </Link>
            <p className="text-[#94A3B8] leading-relaxed font-medium">
              Modern AI automation and business technology solutions designed to help businesses scale faster with intelligent digital systems.
            </p>
            
            {/* SOCIAL MEDIA SECTION */}
            <div>
              <h5 className="text-sm font-black uppercase tracking-[0.2em] text-[#F8FAFC]/30 mb-6">Connect With Us</h5>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a 
                    key={i} 
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className={`w-12 h-12 rounded-2xl glass border border-white/10 flex items-center justify-center transition-all duration-300 ${social.color} group`}
                    title={social.name}
                  >
                    <div className="text-white opacity-70 group-hover:opacity-100">
                      {social.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* 2. QUICK LINKS & SERVICES */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-1">
             <div>
                <h4 className="text-lg font-black mb-8 tracking-tight text-[#F8FAFC]">Quick Links</h4>
                <ul className="space-y-4 text-[#94A3B8] font-medium">
                  <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                  <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                  <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                </ul>
             </div>
             <div>
                <h4 className="text-lg font-black mb-8 tracking-tight text-[#F8FAFC]">Services</h4>
                <ul className="space-y-4 text-[#94A3B8] font-medium">
                  <li><Link to="/services" className="hover:text-primary transition-colors">AI Automation</Link></li>
                  <li><Link to="/services" className="hover:text-primary transition-colors">Web Dev</Link></li>
                  <li><Link to="/services" className="hover:text-primary transition-colors">n8n Automation</Link></li>
                  <li><a href="https://crm.avptechsolution.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">CRM Solutions</a></li>
                </ul>
             </div>
          </div>

          {/* 3. LEGAL LINKS */}
          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight text-[#F8FAFC]">Legal</h4>
            <ul className="space-y-4 text-[#94A3B8] font-medium mb-10">
              <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link></li>
              <li><Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* 4. CONTACT & BUSINESS HOURS */}
          <div>
            <h4 className="text-lg font-black mb-8 tracking-tight text-[#F8FAFC]">Contact Info</h4>
            <ul className="space-y-6 text-[#94A3B8] font-medium">
               <li className="flex gap-4">
                  <span className="text-primary text-xl">📍</span>
                  <span className="text-sm">Lucknow, Uttar Pradesh, India</span>
               </li>
               <li className="flex gap-4 items-center">
                  <span className="text-primary text-xl">📧</span>
                  <a href="mailto:vimal45k@gmail.com" className="text-sm hover:text-primary transition-colors">vimal45k@gmail.com</a>
               </li>
               <li className="flex gap-4 items-center">
                  <span className="text-primary text-xl">💬</span>
                  <a href="https://api.whatsapp.com/send?phone=918090065713" target="_blank" className="text-sm hover:text-primary transition-colors">+91 8090065713</a>
               </li>
               <li className="pt-4 border-t border-white/5">
                  <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#F8FAFC]/30 mb-4">Business Hours</h5>
                  <div className="space-y-2 text-xs">
                     <div className="flex justify-between"><span>Mon - Fri:</span> <span className="text-[#F8FAFC]">10 AM - 7 PM</span></div>
                     <div className="flex justify-between"><span>Saturday:</span> <span className="text-[#F8FAFC]">10 AM - 2 PM</span></div>
                     <div className="flex justify-between"><span>Sunday:</span> <span className="text-red-400">Closed</span></div>
                  </div>
                  <div className="mt-4 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary inline-flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                     AI Support 24/7
                  </div>
               </li>
            </ul>
          </div>
        </div>

        {/* Divider Line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        {/* COPYRIGHT SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div>
            <p className="text-[#F8FAFC] text-sm font-black tracking-tight">
              © 2026 AVP Tech Solution. All Rights Reserved.
            </p>
            <p className="text-[#94A3B8] text-xs font-medium mt-1">
              Built with modern AI automation and scalable technology.
            </p>
          </div>
          
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-[#F8FAFC]/20">
             <span className="hover:text-primary transition-colors cursor-default">Innovation</span>
             <span className="hover:text-primary transition-colors cursor-default">Reliability</span>
             <span className="hover:text-primary transition-colors cursor-default">Performance</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
