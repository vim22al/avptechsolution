import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import founderImg from '../assets/founder.jpg';

const AICoreVisualization = () => {
  const [activeNode, setActiveNode] = useState(0);
  const nodes = [
    { name: "Lead Automation", icon: "📥" },
    { name: "CRM Sync", icon: "📊" },
    { name: "AI Processing", icon: "🧠" },
    { name: "WhatsApp Workflow", icon: "💬" },
    { name: "Smart Routing", icon: "🎯" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNode(prev => (prev + 1) % nodes.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="relative w-full aspect-square max-w-xl mx-auto group">
      {/* Container with Glassmorphism & Animated Border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-[4.5rem] blur-sm opacity-20 group-hover:opacity-40 transition-opacity duration-1000 animate-pulse" />
      
      <div className="relative h-full glass rounded-[4.5rem] border border-white/10 p-12 overflow-hidden bg-[#02040a] shadow-2xl flex items-center justify-center">
        <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
        
        {/* CENTER AI CORE */}
        <div className="relative z-10">
          {/* Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-primary/30 rounded-full border-dashed"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/20 rounded-full border-dashed"
          />
          
          {/* Pulsing Core */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-blue-500 flex items-center justify-center shadow-[0_0_60px_rgba(37,99,235,0.4)]"
          >
             <div className="text-5xl">🤖</div>
             <div className="absolute inset-0 rounded-full animate-ping bg-white/20" />
          </motion.div>
        </div>

        {/* WORKFLOW NETWORK NODES */}
        {nodes.map((node, i) => {
          const angle = (i * 360) / nodes.length;
          const radius = 180;
          const x = Math.cos((angle * Math.PI) / 180) * radius;
          const y = Math.sin((angle * Math.PI) / 180) * radius;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: activeNode === i ? 1.2 : 1,
                x, y
              }}
              className="absolute z-20 flex flex-col items-center gap-2"
            >
               <div className={`w-14 h-14 rounded-2xl glass border flex items-center justify-center text-2xl shadow-2xl transition-all duration-500 ${activeNode === i ? 'border-primary bg-primary/20 scale-110 shadow-primary/40' : 'border-white/10'}`}>
                  {node.icon}
               </div>
               <div className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded bg-black/40 border border-white/5 whitespace-nowrap transition-colors ${activeNode === i ? 'text-white' : 'text-[#94A3B8]'}`}>
                  {node.name}
               </div>
               
               {/* Animated Connector to Core */}
               {activeNode === i && (
                 <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] pointer-events-none overflow-visible">
                    <motion.line
                      x1="100" y1="100" x2={100 - x} y2={100 - y}
                      stroke="rgba(37, 99, 235, 0.5)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                    />
                 </svg>
               )}
            </motion.div>
          );
        })}

        {/* FLOATING STATUS CARDS */}
        <div className="absolute inset-0 pointer-events-none">
           {[
             { t: "Workflow Active", p: { top: '15%', left: '10%' } },
             { t: "AI Processing", p: { bottom: '20%', right: '15%' } },
             { t: "CRM Updated", p: { top: '25%', right: '10%' } }
           ].map((card, i) => (
             <motion.div
               key={i}
               animate={{ 
                 y: [0, -10, 0],
                 opacity: [0.3, 0.7, 0.3]
               }}
               transition={{ duration: 4, repeat: Infinity, delay: i * 1.5 }}
               style={card.p}
               className="absolute glass px-4 py-2 rounded-xl border border-white/10 text-[10px] font-black uppercase tracking-widest text-primary shadow-2xl"
             >
                {card.t}
             </motion.div>
           ))}
        </div>

        {/* ANALYTICS OVERLAY */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 flex justify-between items-end gap-1 px-4 pointer-events-none">
           {[40, 70, 45, 90, 60, 85, 50].map((h, i) => (
             <motion.div 
               key={i}
               animate={{ height: [`${h}%`, `${h+10}%`, `${h}%`] }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
               className="w-full bg-gradient-to-t from-primary/40 to-accent/40 rounded-t-sm"
               style={{ height: `${h}%` }}
             />
           ))}
        </div>

        {/* Scanning line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[4.5rem]">
           <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-primary/10 to-transparent animate-scan" />
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="bg-[#0F172A] text-[#F8FAFC] font-inter overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6"
            >
              Our Journey
            </motion.span>
            <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-[0.85]">
              Building Smart <br />
              Digital <span className="text-gradient">Systems.</span>
            </h1>
            <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              AVP Tech Solution helps businesses automate operations, improve workflows, and create powerful digital experiences using modern technologies and AI-driven solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/contact" className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-primary/30">
                Start Your Project
              </Link>
              <a 
                href="https://api.whatsapp.com/send?phone=918090065713&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-white px-10 py-5 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all"
              >
                Chat On WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. COMPANY INTRODUCTION (WHO WE ARE) */}
      <section className="py-32 relative bg-[#111827]/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                Who <span className="text-gradient">We Are</span>
              </h2>
              <div className="space-y-6 text-xl text-[#94A3B8] font-medium leading-relaxed">
                <p>
                  AVP Tech Solution is a modern technology agency based in Lucknow, India, specializing in AI automation, custom website development, and business optimization.
                </p>
                <p>
                  We believe that technology should work for you, not the other way around. Our goal is to empower businesses with intelligent systems that reduce manual work and accelerate growth.
                </p>
                <p>
                  Whether you are a startup or an established enterprise, we provide scalable solutions tailored to your unique business logic and operational requirements.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8 mt-12">
                 <div>
                    <div className="text-4xl font-black text-primary mb-2">50+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#F8FAFC]/50">Workflows Automated</div>
                 </div>
                 <div>
                    <div className="text-4xl font-black text-accent mb-2">100+</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-[#F8FAFC]/50">Projects Delivered</div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
               <AICoreVisualization />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER SECTION */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[4rem] -z-10 group-hover:bg-primary/30 transition-colors duration-1000" />
                <div className="glass rounded-[4rem] border border-white/10 p-2 overflow-hidden shadow-2xl relative">
                   <img 
                    src={founderImg} 
                    alt="Vimal Kumar Patel" 
                    className="w-full aspect-[4/5] object-cover rounded-[3.5rem] grayscale group-hover:grayscale-0 transition-all duration-700"
                   />
                   <div className="absolute bottom-10 left-10 right-10 glass p-8 rounded-[2.5rem] border border-white/10 backdrop-blur-2xl">
                      <h3 className="text-3xl font-black tracking-tight">Vimal Kumar Patel</h3>
                      <p className="text-primary font-bold uppercase tracking-widest text-xs mt-1">Founder & Lead Architect</p>
                   </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                The <span className="text-gradient">Visionary</span> <br /> Behind AVP Tech
              </h2>
              <p className="text-xl text-[#94A3B8] font-medium leading-relaxed mb-8">
                Vimal Kumar Patel founded AVP Tech Solution with a mission to bridge the gap between complex AI technology and practical business needs.
              </p>
              <div className="space-y-6">
                {[
                  { t: "Technical Excellence", d: "Deep expertise in modern development stacks and AI integration." },
                  { t: "Business First", d: "We focus on ROI and operational efficiency, not just code." },
                  { t: "Long-term Partner", d: "We grow with our clients, providing ongoing support and evolution." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                     <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <span className="text-xl font-bold">{i+1}</span>
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-1">{item.t}</h4>
                        <p className="text-secondary-text font-medium">{item.d}</p>
                     </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section className="py-32 bg-[#111827]/50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="glass p-16 rounded-[4rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
              <div className="text-5xl mb-8">🎯</div>
              <h3 className="text-4xl font-black mb-6 tracking-tight">Our Mission</h3>
              <p className="text-xl text-[#94A3B8] font-medium leading-relaxed">
                To simplify digital transformation for businesses by providing affordable, high-quality, and intelligent automation solutions that drive real-world results.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="glass p-16 rounded-[4rem] border border-white/10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-3xl" />
              <div className="text-5xl mb-8">👁️</div>
              <h3 className="text-4xl font-black mb-6 tracking-tight">Our Vision</h3>
              <p className="text-xl text-[#94A3B8] font-medium leading-relaxed">
                To become India's leading AI automation partner for small and medium-sized businesses, helping them compete on a global scale through technology.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. WHAT WE DO (MINI) */}
      <section className="py-32">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black mb-24 tracking-tighter">Engineered for <span className="text-gradient">Growth.</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { t: "AI Automation", i: "🤖" },
              { t: "Web Development", i: "🌐" },
              { t: "CRM Solutions", i: "📊" },
              { t: "Cloud Systems", i: "☁️" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="glass p-10 rounded-[3rem] border border-white/5"
              >
                <div className="text-4xl mb-6">{item.i}</div>
                <h4 className="text-lg font-black tracking-tight">{item.t}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK */}
      <section className="py-32 bg-[#0A0F1E] border-y border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-black uppercase tracking-[0.4em] text-[#F8FAFC]/30 mb-16">The Modern Tech Ecosystem</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-40 grayscale group hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
             {['React', 'Next.js', 'n8n', 'OpenAI', 'Sanity', 'Vite'].map((tech) => (
               <span key={tech} className="text-3xl font-black tracking-tighter text-text">{tech}</span>
             ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-32 relative">
         <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="glass rounded-[4rem] p-16 md:p-32 border border-primary/30 text-center relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-primary/5 -z-10" />
               <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50" />
               
               <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
                 Ready To Build <br />
                 Something <span className="text-gradient">Great?</span>
               </h2>
               <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-medium">
                 Let's create modern digital systems that improve efficiency and accelerate growth.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  <button className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                    Start Your Project
                  </button>
                  <a 
                    href="https://api.whatsapp.com/send?phone=918090065713&text=Hello!" 
                    target="_blank"
                    className="glass text-white px-12 py-6 rounded-2xl font-bold text-xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <span>💬</span> Chat On WhatsApp
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default About;
