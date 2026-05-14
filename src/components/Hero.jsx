import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const scale = useTransform(scrollY, [0, 500], [1, 0.9]);
  
  const [activeUsers, setActiveUsers] = useState(1240);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUsers(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#050816]">
      {/* 1. BACKGROUND ANIMATIONS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-moving opacity-40" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/10 blur-[140px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/10 blur-[140px] rounded-full" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* 2. LEFT SIDE CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#F8FAFC]/50">Enterprise Intelligence v4.0</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85] text-[#F8FAFC]">
              We <br />
              <span className="text-gradient">Automate</span> <br />
              Your Future.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-[#94A3B8] mb-14 font-medium leading-relaxed max-w-xl">
              AVP Tech Solution architects intelligent ecosystems. From autonomous AI agents to enterprise-grade n8n pipelines, we turn operations into competitive advantages.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mb-20">
              <Link
                to="/contact"
                className="group relative bg-primary text-white px-12 py-6 rounded-3xl font-black text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=918090065713&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
                className="glass text-white px-12 py-6 rounded-3xl font-black text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center gap-3"
              >
                <span>💬</span> Chat Now
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="flex gap-12 border-t border-white/5 pt-12">
               <div>
                  <div className="text-3xl font-black tracking-tighter text-text">98%</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Automation rate</div>
               </div>
               <div>
                  <div className="text-3xl font-black tracking-tighter text-accent">24/7</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Operational Uptime</div>
               </div>
               <div>
                  <div className="text-3xl font-black tracking-tighter text-primary">0.5s</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Response Latency</div>
               </div>
            </motion.div>
          </motion.div>

          {/* 3. RIGHT SIDE DASHBOARD - REDESIGNED */}
          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 glass rounded-[4.5rem] border border-white/10 p-3 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden bg-[#02040a]">
               
               {/* Dashboard Inner Container */}
               <div className="aspect-[4/5] relative overflow-hidden rounded-[3.8rem] bg-[#02040a] p-8">
                  <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                  
                  {/* Header Area */}
                  <div className="flex justify-between items-center mb-10">
                     <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                     </div>
                     <div className="px-4 py-1.5 glass rounded-full border border-primary/20 text-[10px] font-black tracking-[0.2em] text-primary flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        LIVE ANALYTICS
                     </div>
                  </div>

                  {/* Main Visualization */}
                  <div className="space-y-8">
                     
                     {/* 1. Workflow Node Area */}
                     <div className="glass p-6 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl" />
                        <div className="flex justify-between items-end mb-6">
                           <div>
                              <h4 className="text-xs font-black uppercase tracking-widest text-[#94A3B8] mb-1">Lead Flow</h4>
                              <p className="text-2xl font-black tracking-tighter">Active Process</p>
                           </div>
                           <div className="text-primary font-black text-xs">84% Efficiency</div>
                        </div>
                        
                        {/* Animated Flow Lines */}
                        <div className="h-24 relative flex items-center justify-between px-4">
                           <div className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-xl">📥</div>
                           <div className="flex-grow h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 relative">
                              <motion.div 
                                animate={{ left: ['0%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-primary blur-md rounded-full"
                              />
                           </div>
                           <div className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-xl">🤖</div>
                           <div className="flex-grow h-px bg-gradient-to-r from-primary/50 via-accent/50 to-primary/50 relative">
                              <motion.div 
                                animate={{ left: ['0%', '100%'] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent blur-md rounded-full"
                              />
                           </div>
                           <div className="w-12 h-12 rounded-2xl glass border border-white/20 flex items-center justify-center text-xl">🎯</div>
                        </div>
                     </div>

                     {/* 2. Stats and Feed Area */}
                     <div className="grid grid-cols-2 gap-6">
                        <div className="glass p-8 rounded-[2.5rem] border border-white/5">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-4">Active Leads</h4>
                           <div className="text-5xl font-black tracking-tighter text-primary mb-2">
                             {activeUsers.toLocaleString()}
                           </div>
                           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                animate={{ width: ['40%', '85%', '60%', '95%'] }}
                                transition={{ duration: 8, repeat: Infinity }}
                                className="h-full bg-primary"
                              />
                           </div>
                        </div>
                        <div className="glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
                           <div className="absolute inset-0 bg-[#050816]/50 backdrop-blur-sm" />
                           <div className="relative z-10">
                              <h4 className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-4">Activity Feed</h4>
                              <div className="space-y-4">
                                 {[1, 2, 3].map(i => (
                                   <div key={i} className="flex items-center gap-3 opacity-50">
                                      <div className="w-2 h-2 rounded-full bg-green-400" />
                                      <div className="h-2 flex-grow bg-white/10 rounded-full" />
                                   </div>
                                 ))}
                              </div>
                           </div>
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary font-black text-xs animate-pulse">
                              PROCESSING...
                           </div>
                        </div>
                     </div>

                     {/* 3. Analytics Chart */}
                     <div className="glass p-8 rounded-[2.5rem] border border-white/5">
                        <div className="flex justify-between items-center mb-8">
                           <h4 className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Revenue Growth</h4>
                           <div className="flex gap-2">
                              {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />)}
                           </div>
                        </div>
                        <div className="h-32 flex items-end justify-between gap-2">
                           {[40, 70, 45, 90, 65, 80, 55, 95, 75, 100].map((h, i) => (
                             <motion.div 
                               key={i}
                               initial={{ height: 0 }}
                               animate={{ height: `${h}%` }}
                               transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }}
                               className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg"
                             />
                           ))}
                        </div>
                     </div>

                  </div>
               </div>

               {/* Scanning Line Effect */}
               <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[4.5rem]">
                  <div className="absolute top-0 left-0 w-full h-[20%] bg-gradient-to-b from-primary/10 to-transparent animate-scan" />
               </div>
            </div>

            {/* Floating External Widgets */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 glass px-8 py-6 rounded-3xl border border-primary/30 shadow-2xl z-20"
            >
               <div className="text-accent font-black text-2xl tracking-tighter">ROI: 320%</div>
               <div className="text-[10px] font-bold uppercase tracking-widest text-[#F8FAFC]/50">Measured monthly</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -right-10 glass p-8 rounded-[3rem] border border-accent/30 shadow-2xl z-20"
            >
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-2xl">✨</div>
                  <div>
                     <div className="text-white font-black tracking-tight">AI Optimizing...</div>
                     <div className="w-32 h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                           animate={{ x: ['-100%', '100%'] }}
                           transition={{ duration: 2, repeat: Infinity }}
                           className="w-1/2 h-full bg-accent"
                        />
                     </div>
                  </div>
               </div>
            </motion.div>

            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-white/[0.03] rounded-full -z-10 animate-spin-slow" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
