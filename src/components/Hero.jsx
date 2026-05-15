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
    <section className="relative min-h-[110vh] flex items-center pt-32 lg:pt-40 pb-20 overflow-hidden bg-[#050816]">
      {/* 1. BACKGROUND ANIMATIONS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-moving opacity-20 lg:opacity-40" />
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] bg-primary/10 blur-[80px] lg:blur-[140px] rounded-full" 
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] lg:w-[60%] lg:h-[60%] bg-accent/10 blur-[80px] lg:blur-[140px] rounded-full" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* 2. LEFT SIDE CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto lg:mx-0 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-2 lg:px-5 lg:py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 lg:mb-10 backdrop-blur-2xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-[9px] lg:text-[10px] font-black uppercase tracking-[0.4em] text-[#F8FAFC]/50">Enterprise Intelligence v4.0</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-8 lg:mb-10 tracking-tighter leading-[0.9] text-[#F8FAFC]">
              We <br className="hidden lg:block" />
              <span className="text-gradient">Automate</span> <br className="hidden lg:block" />
              Your Future.
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg lg:text-2xl text-[#94A3B8] mb-10 lg:mb-14 font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
              AVP Tech Solution architects intelligent ecosystems. From autonomous AI agents to enterprise n8n pipelines, we turn operations into competitive advantages.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6 mb-16 lg:mb-20">
              <Link
                to="/contact"
                className="w-full sm:w-auto group relative bg-primary text-white px-10 py-5 lg:px-12 lg:py-6 rounded-[1.5rem] lg:rounded-3xl font-black text-base lg:text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] text-center"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=918090065713&text=Hello!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto glass text-white px-10 py-5 lg:px-12 lg:py-6 rounded-[1.5rem] lg:rounded-3xl font-black text-base lg:text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-3"
              >
                <span>💬</span> Chat Now
              </a>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 sm:gap-12 border-t border-white/5 pt-10 lg:pt-12">
               <div>
                  <div className="text-2xl lg:text-3xl font-black tracking-tighter text-white">98%</div>
                  <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Automation</div>
               </div>
               <div>
                  <div className="text-2xl lg:text-3xl font-black tracking-tighter text-accent">24/7</div>
                  <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Uptime</div>
               </div>
               <div>
                  <div className="text-2xl lg:text-3xl font-black tracking-tighter text-primary">0.5s</div>
                  <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Latency</div>
               </div>
            </motion.div>
          </motion.div>

          {/* 3. RIGHT SIDE DASHBOARD */}
          <motion.div
            style={{ scale }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 glass rounded-[4rem] border border-white/10 p-2 shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden bg-[#02040a]">
               
               <div className="aspect-[4/5] relative overflow-hidden rounded-[3.5rem] bg-[#02040a] p-8">
                  <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                  
                  <div className="flex justify-between items-center mb-8">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                     </div>
                     <div className="px-4 py-1 glass rounded-full border border-primary/20 text-[9px] font-black tracking-[0.2em] text-primary flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                        SYSTEMS ACTIVE
                     </div>
                  </div>

                  <div className="space-y-6">
                     <div className="glass p-5 rounded-[2rem] border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-4">
                           <div>
                              <h4 className="text-[9px] font-black uppercase tracking-widest text-[#94A3B8] mb-1">Workflow Status</h4>
                              <p className="text-xl font-black tracking-tighter">Autonomous Mode</p>
                           </div>
                           <div className="text-primary font-black text-[10px]">Active</div>
                        </div>
                        <div className="h-16 relative flex items-center justify-between px-2">
                           <div className="w-10 h-10 rounded-xl glass border border-white/20 flex items-center justify-center text-lg">📥</div>
                           <div className="flex-grow h-px bg-primary/30 relative mx-2">
                              <motion.div animate={{ left: ['0%', '100%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-primary blur-md rounded-full"/>
                           </div>
                           <div className="w-10 h-10 rounded-xl glass border border-white/20 flex items-center justify-center text-lg">🤖</div>
                        </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                        <div className="glass p-6 rounded-[2rem] border border-white/5">
                           <h4 className="text-[9px] font-black uppercase tracking-widest text-[#94A3B8] mb-3">Live Ops</h4>
                           <div className="text-3xl font-black tracking-tighter text-primary mb-2">{activeUsers.toLocaleString()}</div>
                           <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                              <motion.div animate={{ width: ['40%', '85%', '60%', '95%'] }} transition={{ duration: 8, repeat: Infinity }} className="h-full bg-primary"/>
                           </div>
                        </div>
                        <div className="glass p-6 rounded-[2rem] border border-white/5 flex flex-col justify-center items-center">
                            <div className="text-accent font-black text-2xl">A.I</div>
                            <div className="text-[8px] font-black uppercase tracking-widest text-[#94A3B8] mt-2">Thinking...</div>
                        </div>
                     </div>

                     <div className="glass p-6 rounded-[2rem] border border-white/5">
                        <div className="h-24 flex items-end justify-between gap-1.5">
                           {[40, 70, 45, 90, 65, 80, 55, 95, 75, 100].map((h, i) => (
                             <motion.div key={i} animate={{ height: `${h}%` }} transition={{ duration: 1.5, delay: i * 0.1, repeat: Infinity, repeatType: 'reverse' }} className="w-full bg-gradient-to-t from-primary to-accent rounded-t-lg"/>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
