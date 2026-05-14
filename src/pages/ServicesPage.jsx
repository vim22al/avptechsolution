import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ServicesPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const services = [
    {
      title: "Website Design & Development",
      desc: "Modern, responsive, and high-performance websites built to help your business grow online with a professional digital presence.",
      features: ["Responsive Design", "Fast Loading", "SEO Friendly", "Premium UI/UX", "Business Websites", "Landing Pages"],
      icon: "🌐",
      color: "from-blue-500/20"
    },
    {
      title: "AI Automation Solutions",
      desc: "Automate repetitive business tasks using intelligent workflows that improve speed, accuracy, and efficiency.",
      features: ["AI Workflows", "Smart Automation", "Lead Automation", "Task Automation", "Business Optimization"],
      icon: "🧠",
      color: "from-cyan-500/20"
    },
    {
      title: "n8n Workflow Automation",
      desc: "Custom n8n automation systems that connect your apps, automate workflows, and streamline daily business operations.",
      features: ["WhatsApp Automation", "CRM Integrations", "API Connections", "Workflow Automation", "Data Sync Systems"],
      icon: "⚡",
      color: "from-purple-500/20"
    },
    {
      title: "Custom Business Automation",
      desc: "Tailored automation systems built specifically for your business process, operations, and workflow requirements.",
      features: ["ERP Workflows", "Internal Dashboards", "Team Management", "Process Automation", "Reporting Systems"],
      icon: "⚙️",
      color: "from-orange-500/20"
    },
    {
      title: "CRM Automation Solutions",
      desc: "Automate your entire lead lifecycle with intelligent CRM systems designed to improve sales tracking and customer management.",
      features: ["Lead Tracking", "Sales Pipeline", "Follow-up Automation", "Customer Management", "Analytics Dashboard"],
      icon: "📊",
      color: "from-green-500/20"
    }
  ];

  const industries = [
    { name: "Real Estate", icon: "🏠" },
    { name: "Coaching Institutes", icon: "👨‍🏫" },
    { name: "Agencies", icon: "🏢" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Schools", icon: "🏫" },
    { name: "Local Businesses", icon: "🏪" },
    { name: "E-commerce", icon: "🛒" }
  ];

  const faqs = [
    { q: "What industries do you work with?", a: "We work with a wide range of industries including Real Estate, Healthcare, E-commerce, and Professional Services. Our automation solutions are highly adaptable to any business model." },
    { q: "Do you provide custom automation solutions?", a: "Absolutely. Every business has unique bottlenecks. We build bespoke automation roadmaps and systems tailored specifically to your operations." },
    { q: "Can you automate WhatsApp workflows?", a: "Yes, we specialize in WhatsApp Business API integrations and n8n workflows to automate lead qualification, notifications, and customer support." },
    { q: "Do you create business websites?", a: "Yes, we build high-performance, SEO-optimized business websites using modern technologies like React, Next.js, and Sanity CMS." },
    { q: "Can AVP CRM handle lead management?", a: "AVP CRM is designed specifically for end-to-end lead lifecycle management, from initial capture to final conversion and analytics." },
    { q: "Do you provide ongoing support?", a: "Yes, we offer comprehensive support and optimization packages to ensure your systems evolve with your business growth." }
  ];

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
              Enterprise Automation Systems
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Smart Digital Solutions For <br />
              <span className="text-gradient">Modern Businesses</span>
            </h1>
            <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              We build AI-powered websites, automation systems, CRM workflows, and business solutions designed to save time, increase productivity, and accelerate growth.
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

      {/* 2. SERVICES GRID */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
             <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Premium <span className="text-gradient">Capabilities</span></h2>
             <p className="text-[#94A3B8] font-medium">Engineered to scale your operations at lightning speed.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass p-10 rounded-[3rem] border border-white/5 hover:border-primary/50 transition-all group bg-gradient-to-br ${s.color} to-transparent`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-3xl group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{s.title}</h3>
                <p className="text-[#94A3B8] mb-8 text-sm leading-relaxed font-medium">{s.desc}</p>
                <div className="grid grid-cols-2 gap-3">
                  {s.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#F8FAFC]/50">
                      <span className="text-primary">✓</span> {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICE - AVP CRM */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="glass rounded-[4rem] p-12 md:p-24 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] -z-10" />
              <div className="grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <span className="text-accent font-bold text-sm uppercase tracking-[0.3em] mb-6 block">Featured Solution</span>
                    <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                      AVP CRM — Complete <br />
                      <span className="text-gradient">Lead Lifecycle.</span>
                    </h2>
                    <p className="text-xl text-[#94A3B8] mb-12 font-medium leading-relaxed">
                      Manage leads, automate follow-ups, track sales performance, and streamline customer communication from one powerful platform.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-6">
                       {["Lead Management", "Automated Follow-ups", "Team Collaboration", "Sales Tracking", "Performance Reports", "Workflow Automation"].map((f, i) => (
                         <div key={i} className="flex items-center gap-3 text-sm font-bold">
                            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent text-[10px]">✓</div>
                            {f}
                         </div>
                       ))}
                    </div>
                 </div>
                 <div className="relative">
                    <div className="glass aspect-square rounded-[3rem] border border-white/10 p-8 shadow-2xl relative overflow-hidden bg-[#050505]">
                       <div className="absolute inset-0 bg-grid opacity-5" />
                       <div className="relative z-10 h-full flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                             <div className="w-1/2 space-y-4">
                                <div className="h-6 w-3/4 bg-primary/20 rounded-lg animate-pulse" />
                                <div className="h-4 w-full bg-white/5 rounded-md" />
                             </div>
                             <div className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-primary">📊</div>
                          </div>
                          <div className="h-1/2 w-full bg-gradient-to-t from-primary/10 to-transparent border-t border-white/10 rounded-t-3xl p-6 flex items-end">
                             <div className="w-full flex justify-between gap-2 items-end">
                                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                                  <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    whileInView={{ height: `${h}%` }}
                                    className="w-full bg-primary/40 rounded-t-lg"
                                  />
                                ))}
                             </div>
                          </div>
                       </div>
                    </div>
                    <motion.div 
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute -top-10 -right-10 glass p-6 rounded-3xl border border-accent/20 shadow-2xl"
                    >
                       <span className="text-xs font-bold uppercase tracking-widest text-accent">Active Leads: 2.8k</span>
                    </motion.div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. AUTOMATION WORKFLOW SECTION */}
      <section className="py-32 relative">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">The <span className="text-gradient">Workflow</span> Engine</h2>
               <p className="text-[#94A3B8] font-medium max-w-xl mx-auto">See how your business transforms into a high-speed automation machine.</p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
               {[
                 { name: "Lead Captured", icon: "📥" },
                 { name: "Auto Assignment", icon: "🤖" },
                 { name: "Auto Follow-up", icon: "✉️" },
                 { name: "Engagement", icon: "💬" },
                 { name: "Tracking", icon: "🎯" },
                 { name: "Analytics", icon: "📈" }
               ].map((step, i) => (
                 <div key={i} className="relative group">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="glass p-8 rounded-[2.5rem] border border-white/5 text-center relative z-10"
                    >
                       <div className="text-3xl mb-4">{step.icon}</div>
                       <h4 className="text-xs font-bold uppercase tracking-tighter leading-tight">{step.name}</h4>
                    </motion.div>
                    {i < 5 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-primary/30 z-0" />
                    )}
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-32 bg-[#111827]/50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Industries We <span className="text-gradient">Serve</span></h2>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
               {industries.map((ind, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ scale: 1.1, backgroundColor: "rgba(37, 99, 235, 0.1)" }}
                   className="glass px-8 py-6 rounded-3xl border border-white/5 flex items-center gap-4 cursor-default transition-all"
                 >
                    <span className="text-2xl">{ind.icon}</span>
                    <span className="font-bold tracking-tight">{ind.name}</span>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-32 relative">
         <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                    Why Businesses Choose <br />
                    <span className="text-gradient">AVP Tech Solution</span>
                  </h2>
                  <div className="grid gap-6">
                     {[
                       { t: "Modern Tech Stack", d: "Built with cutting-edge tools for maximum reliability." },
                       { t: "Automation Expertise", d: "Senior engineers focused solely on system efficiency." },
                       { t: "Scalable Systems", d: "Infrastructure that grows as your business grows." },
                       { t: "Fast Support", d: "Dedicated team for troubleshooting and optimization." }
                     ].map((item, i) => (
                       <div key={i} className="flex gap-6 p-6 rounded-3xl glass border border-white/5 hover:border-primary/30 transition-all">
                          <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary shrink-0 font-bold">✓</div>
                          <div>
                             <h4 className="font-bold mb-1">{item.t}</h4>
                             <p className="text-sm text-[#94A3B8]">{item.d}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Efficiency", val: "95%" },
                    { label: "Uptime", val: "99.9%" },
                    { label: "Time Saved", val: "40h/wk" },
                    { label: "ROI", val: "300%" }
                  ].map((stat, i) => (
                    <div key={i} className={`glass p-10 rounded-[3rem] border border-white/10 text-center ${i % 2 !== 0 ? 'mt-12' : ''}`}>
                       <div className="text-5xl font-black text-primary mb-2 tracking-tighter">{stat.val}</div>
                       <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">{stat.label}</div>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* 7. PROCESS SECTION */}
      <section className="py-32 bg-[#111827]/30">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Our <span className="text-gradient">Process</span></h2>
               <p className="text-[#94A3B8] font-medium">A systematic roadmap to digital transformation.</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-12 relative">
               <div className="absolute top-0 left-[2.5rem] w-px h-full bg-primary/20 -z-10" />
               {[
                 { t: "Requirement Analysis", d: "Deep dive into your current operations and identify gaps." },
                 { t: "Strategy Planning", d: "Architecting the automation blueprint and selecting tech stack." },
                 { t: "Design & Development", d: "Building custom interfaces and core logic for your systems." },
                 { t: "Automation Setup", d: "Configuring n8n, AI agents, and integration webhooks." },
                 { t: "Testing & Optimization", d: "Rigorous stress tests and performance fine-tuning." },
                 { t: "Deployment & Support", d: "Final launch followed by continuous system maintenance." }
               ].map((step, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   className="flex gap-12 items-start"
                 >
                    <div className="w-20 h-20 rounded-full glass border border-primary flex items-center justify-center shrink-0 bg-[#0F172A] text-xl font-black">
                       {i + 1}
                    </div>
                    <div className="pt-4">
                       <h4 className="text-2xl font-bold mb-2 tracking-tight">{step.t}</h4>
                       <p className="text-[#94A3B8] font-medium text-lg leading-relaxed">{step.d}</p>
                    </div>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 8. FAQ SECTION */}
      <section className="py-32">
         <div className="container mx-auto px-6 max-w-3xl">
            <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">Common <span className="text-gradient">Questions</span></h2>
            <div className="glass rounded-[3rem] border border-white/10 p-8 md:p-12">
               {faqs.map((faq, i) => (
                 <div key={i} className="border-b border-white/5 last:border-0">
                    <button 
                      onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                      className="w-full py-8 flex justify-between items-center text-left hover:text-primary transition-all group"
                    >
                       <span className="text-lg font-bold tracking-tight">{faq.q}</span>
                       <span className={`text-2xl transition-transform duration-500 ${activeFaq === i ? 'rotate-180 text-primary' : ''}`}>↓</span>
                    </button>
                    <AnimatePresence>
                      {activeFaq === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                           <p className="pb-8 text-[#94A3B8] leading-relaxed font-medium">{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
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
                 Ready To <span className="text-gradient">Automate</span> <br />
                 And Scale?
               </h2>
               <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-medium">
                 Let's build smarter systems that save time and increase growth. Your transformation starts with a single conversation.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  <button className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                    Schedule Consultation
                  </button>
                  <button className="glass text-white px-12 py-6 rounded-2xl font-bold text-xl border border-white/10 hover:bg-white/5 transition-all">
                    Contact Us
                  </button>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default ServicesPage;
