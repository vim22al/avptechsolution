import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const contactCards = [
    {
      title: "Email Us",
      content: "vimal45k@gmail.com",
      btnText: "Send Email",
      link: "mailto:vimal45k@gmail.com",
      icon: "📧"
    },
    {
      title: "WhatsApp Support",
      content: "+91 8090065713",
      btnText: "Chat Now",
      link: "https://api.whatsapp.com/send?phone=918090065713&text=Hello!",
      icon: "💬"
    },
    {
      title: "AI Assistant Support",
      content: "Our AI assistant is available 24/7 to help with inquiries and business support.",
      btnText: "Online 24/7",
      link: "#",
      icon: "🤖",
      isAI: true
    }
  ];

  const faqs = [
    { q: "How quickly do you respond?", a: "We typically respond within 2-4 hours during business hours. Our AI assistant is available 24/7 for immediate help." },
    { q: "Do you provide custom automation solutions?", a: "Yes, we specialize in building bespoke automation roadmaps and systems tailored to your unique business processes." },
    { q: "Can you build business websites?", a: "Absolutely. We build high-performance, modern business websites using React, Vite, and headless CMS systems." },
    { q: "Do you work with startups and agencies?", a: "Yes, we work with both growing startups and established agencies looking to scale their operations through technology." },
    { q: "Can you automate workflows using n8n?", a: "Yes, n8n is one of our core tools for building complex, multi-app automation ecosystems." }
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
              Get In Touch
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9]">
              Let’s Build <span className="text-gradient">Smarter</span> <br />
              Systems Together.
            </h1>
            <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Have a project, automation idea, or business requirement? Connect with AVP Tech Solution to create modern digital systems powered by AI and automation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl shadow-primary/30"
              >
                Start Your Project
              </button>
              <a 
                href="https://api.whatsapp.com/send?phone=918090065713&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-white px-10 py-5 rounded-2xl font-bold border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
              >
                <span>💬</span> Chat On WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTACT INFORMATION CARDS */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="glass p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between items-start"
              >
                <div>
                   <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8">
                      {card.icon}
                   </div>
                   <h3 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h3>
                   <p className="text-[#94A3B8] font-medium leading-relaxed mb-10 text-sm">
                      {card.content}
                   </p>
                </div>
                {card.isAI ? (
                  <span className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {card.btnText}
                  </span>
                ) : (
                  <a 
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:gap-3 transition-all flex items-center gap-2"
                  >
                    {card.btnText} →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTACT FORM SECTION */}
      <section id="contact-form" className="py-32 relative overflow-hidden bg-[#111827]/30">
        <div className="container mx-auto px-6">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
                    Send Us Your <br />
                    <span className="text-gradient">Requirements.</span>
                 </h2>
                 <p className="text-xl text-[#94A3B8] mb-12 font-medium leading-relaxed">
                    Fill out the form and our team will connect with you shortly to discuss your automation roadmap.
                 </p>
                 <div className="space-y-8">
                    {[
                      "Fast Response Time", "Expert Consultation", "Custom Roadmap Design"
                    ].map((p, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg font-bold">
                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</div>
                         {p}
                      </div>
                    ))}
                 </div>
              </div>
              
              <div className="relative">
                 <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-[4rem] -z-10" />
                 <div className="glass rounded-[3rem] border border-white/10 p-2 overflow-hidden shadow-2xl bg-white">
                    <div className="rounded-[2.5rem] overflow-hidden bg-[#F8FAFC]">
                       <iframe 
                        width="100%" 
                        height="850" 
                        src="https://avptechsolution.com/crm/forms/wtl/4edcc151bf2d58547f96a28de08c1c21" 
                        frameBorder="0" 
                        sandbox="allow-top-navigation allow-forms allow-scripts allow-same-origin allow-popups" 
                        allowFullScreen
                        className="w-full"
                       />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. BUSINESS HOURS SECTION */}
      <section className="py-32">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[4rem] border border-white/5 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px]" />
               <div className="grid md:grid-cols-2 gap-16 items-center">
                  <div>
                     <h3 className="text-4xl font-black mb-6 tracking-tighter">Business <span className="text-gradient">Hours</span></h3>
                     <div className="space-y-8">
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Monday - Friday</p>
                           <p className="text-2xl font-bold tracking-tight">10:00 AM - 7:00 PM IST</p>
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Saturday</p>
                           <p className="text-2xl font-bold tracking-tight">10:00 AM - 2:00 PM IST</p>
                        </div>
                        <div>
                           <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Sunday</p>
                           <p className="text-2xl font-bold tracking-tight text-red-400">Closed</p>
                        </div>
                     </div>
                  </div>
                  <div className="text-center p-10 glass rounded-[3rem] border border-white/10">
                     <div className="text-5xl mb-6">🤖</div>
                     <p className="text-[#94A3B8] font-medium italic">
                        “AI assistant support available 24/7 for automated responses and basic inquiries.”
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5. WHY CONTACT US SECTION */}
      <section className="py-32 bg-[#111827]/50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-24">
               <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Why Businesses <span className="text-gradient">Connect</span></h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[
                 { t: "Fast Response", d: "We value your time. Expect a quick and professional response." },
                 { t: "Custom Solutions", d: "No generic plans. We build specifically for your business logic." },
                 { t: "Modern Stack", d: "Built with industry-leading tools for speed and stability." },
                 { t: "AI Expertise", d: "Deep knowledge in LLMs, n8n, and custom AI agents." },
                 { t: "Business Focused", d: "We focus on ROI and operational efficiency first." },
                 { t: "Long-Term Support", d: "We're your technology partner, not just a service provider." }
               ].map((item, i) => (
                 <motion.div 
                   key={i}
                   whileHover={{ y: -10 }}
                   className="glass p-10 rounded-[3rem] border border-white/5 text-center group"
                 >
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 text-primary font-bold group-hover:bg-primary group-hover:text-white transition-all">✓</div>
                    <h4 className="text-xl font-bold mb-4">{item.t}</h4>
                    <p className="text-sm text-[#94A3B8] font-medium leading-relaxed">{item.d}</p>
                 </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. FAQ MINI SECTION */}
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

      {/* 7. FINAL CTA SECTION */}
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
                 Your Business?
               </h2>
               <p className="text-xl text-[#94A3B8] mb-12 max-w-2xl mx-auto font-medium">
                 Let's create modern digital systems that improve efficiency and accelerate growth.
               </p>
               <div className="flex flex-wrap justify-center gap-6">
                  <button className="bg-primary text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
                    Schedule Consultation
                  </button>
                  <a 
                    href="https://api.whatsapp.com/send?phone=918090065713&text=Hello!" 
                    target="_blank"
                    className="glass text-white px-12 py-6 rounded-2xl font-bold text-xl border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2"
                  >
                    <span>💬</span> Contact On WhatsApp
                  </a>
               </div>
            </motion.div>
         </div>
      </section>

    </div>
  );
};

export default Contact;
