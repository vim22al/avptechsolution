import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const Showcase = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { name: "Lead Captured", icon: "📥", color: "text-blue-400" },
    { name: "AI Processing", icon: "🧠", color: "text-primary" },
    { name: "Auto Assignment", icon: "🤖", color: "text-accent" },
    { name: "WhatsApp Sent", icon: "💬", color: "text-green-400" },
    { name: "CRM Updated", icon: "📊", color: "text-purple-400" },
    { name: "Analytics Ready", icon: "📈", color: "text-cyan-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section className="py-32 relative overflow-hidden bg-[#050816]">
      {/* Background Neural Network Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-10" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-accent font-black text-xs uppercase tracking-[0.4em] mb-6"
          >
             <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
             Live Automation Engine
          </motion.div>
          <h2 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
             The <span className="text-gradient">Showcase.</span>
          </h2>
          <p className="text-[#94A3B8] text-xl max-w-2xl mx-auto font-medium leading-relaxed">
             Experience the autonomous intelligence of AVP Tech. A multi-layered ecosystem that thinks, reacts, and scales your business 24/7.
          </p>
        </div>

        {/* MAIN SHOWCASE CONTAINER */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Dashboard Frame */}
          <div className="glass rounded-[4rem] border border-white/10 p-3 shadow-[0_0_100px_rgba(37,99,235,0.15)] overflow-hidden bg-[#02040a]">
             <div className="aspect-auto lg:aspect-[16/9] relative overflow-hidden rounded-[2.5rem] lg:rounded-[3.5rem] bg-[#02040a] p-6 lg:p-12">
                <div className="absolute inset-0 bg-grid opacity-5" />
                
                {/* Header Status Bar */}
                <div className="flex justify-between items-center mb-12 border-b border-white/5 pb-8">
                   <div className="flex items-center gap-6">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/30" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                        <div className="w-3 h-3 rounded-full bg-green-500/30" />
                      </div>
                      <div className="h-4 w-px bg-white/10" />
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                         Engine State: Active
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="px-4 py-1.5 glass rounded-lg text-[10px] font-black tracking-widest text-primary">v4.2.0-stable</div>
                      <div className="px-4 py-1.5 glass rounded-lg text-[10px] font-black tracking-widest text-accent">99.9% Uptime</div>
                   </div>
                </div>

                {/* WORKFLOW VISUALIZATION */}
                <div className="grid lg:grid-cols-3 gap-12 h-full">
                   
                   {/* Left: Workflow Nodes */}
                   <div className="lg:col-span-2 relative">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 h-full content-start">
                         {steps.map((step, i) => (
                           <motion.div
                             key={i}
                             animate={{ 
                               borderColor: activeStep === i ? 'rgba(37, 99, 235, 0.5)' : 'rgba(255, 255, 255, 0.05)',
                               backgroundColor: activeStep === i ? 'rgba(37, 99, 235, 0.1)' : 'rgba(255, 255, 255, 0.02)'
                             }}
                             className="glass p-6 rounded-3xl border transition-all duration-500 relative group overflow-hidden"
                           >
                              {activeStep === i && (
                                <motion.div 
                                  layoutId="glow"
                                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-xl"
                                />
                              )}
                              <div className="relative z-10 text-center">
                                 <div className={`text-3xl mb-4 ${activeStep === i ? 'scale-110' : 'scale-100'} transition-transform duration-500`}>
                                    {step.icon}
                                 </div>
                                 <h4 className={`text-[10px] font-black uppercase tracking-widest ${activeStep === i ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'}`}>
                                    {step.name}
                                 </h4>
                              </div>
                              {/* Connection Lines (Simulated) */}
                              {i < steps.length - 1 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-white/10" />
                              )}
                           </motion.div>
                         ))}
                      </div>

                      {/* Animated Neural Connections */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                         <motion.path 
                           d="M 100,100 C 200,150 300,50 400,100"
                           stroke="rgba(37, 99, 235, 0.5)"
                           strokeWidth="1"
                           fill="none"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 3, repeat: Infinity }}
                         />
                         <motion.path 
                           d="M 50,250 C 150,200 250,300 350,250"
                           stroke="rgba(6, 182, 212, 0.5)"
                           strokeWidth="1"
                           fill="none"
                           initial={{ pathLength: 0 }}
                           animate={{ pathLength: 1 }}
                           transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                         />
                      </svg>
                   </div>

                   {/* Right: Activity & Analytics */}
                   <div className="space-y-6">
                      {/* Floating Activity Card */}
                      <AnimatePresence mode="wait">
                         <motion.div
                           key={activeStep}
                           initial={{ opacity: 0, x: 20 }}
                           animate={{ opacity: 1, x: 0 }}
                           exit={{ opacity: 0, x: -20 }}
                           className="glass p-8 rounded-3xl border border-primary/20 shadow-2xl relative overflow-hidden"
                         >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-2xl" />
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Event Triggered</h5>
                            <p className="text-xl font-black tracking-tight text-[#F8FAFC] mb-2">{steps[activeStep].name}</p>
                            <p className="text-xs text-[#94A3B8] font-medium leading-relaxed">System successfully executed workflow path for incoming request #{Math.floor(Math.random() * 10000)}.</p>
                         </motion.div>
                      </AnimatePresence>

                      {/* Analytics Dashboard Mini */}
                      <div className="glass p-8 rounded-3xl border border-white/5 space-y-6">
                         <div className="flex justify-between items-center">
                            <h5 className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Performance Metrics</h5>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                         </div>
                         <div className="space-y-4">
                            {[
                              { label: "AI Confidence", val: "94%", color: "bg-primary" },
                              { label: "Exec Speed", val: "0.2ms", color: "bg-accent" },
                              { label: "Error Rate", val: "0.01%", color: "bg-red-500" }
                            ].map((stat, i) => (
                              <div key={i}>
                                 <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-[#F8FAFC]/50 mb-2">
                                    <span>{stat.label}</span>
                                    <span>{stat.val}</span>
                                 </div>
                                 <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                      initial={{ width: 0 }}
                                      animate={{ width: stat.val }}
                                      transition={{ duration: 1.5, delay: 0.5 }}
                                      className={`h-full ${stat.color}`}
                                    />
                                 </div>
                              </div>
                            ))}
                         </div>
                      </div>
                   </div>

                </div>

                {/* SCANNING LINE EFFECT */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3.5rem]">
                   <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-primary/10 to-transparent animate-scan" />
                </div>
             </div>
          </div>

          {/* Floating UI Decorative Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 glass p-6 rounded-3xl border border-primary/30 shadow-2xl hidden lg:block z-20"
          >
             <div className="text-xs font-black text-primary mb-1">REAL-TIME DATA</div>
             <div className="text-2xl font-black tracking-tighter">1,248 ops/sec</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 glass p-6 rounded-3xl border border-accent/30 shadow-2xl hidden lg:block z-20"
          >
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-xl">🚀</div>
                <div>
                   <div className="text-xs font-black uppercase tracking-widest text-[#94A3B8]">Throughput</div>
                   <div className="text-lg font-black tracking-tighter text-white">4.2 GB/min</div>
                </div>
             </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
