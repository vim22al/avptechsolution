import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CRMDashboard = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [notifications, setNotifications] = useState([]);
  
  const steps = [
    { name: 'New Lead', icon: '📥', color: 'bg-blue-500' },
    { name: 'Follow-up', icon: '✉️', color: 'bg-cyan-500' },
    { name: 'Qualified', icon: '🧠', color: 'bg-primary' },
    { name: 'Proposal', icon: '📄', color: 'bg-accent' },
    { name: 'Converted', icon: '💰', color: 'bg-green-500' }
  ];

  const notificationTypes = [
    "New Lead Captured",
    "WhatsApp Sent",
    "AI Follow-up Triggered",
    "CRM Updated",
    "Lead Converted"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
      
      if (Math.random() > 0.5) {
        const id = Date.now();
        const type = notificationTypes[Math.floor(Math.random() * notificationTypes.length)];
        setNotifications(prev => [...prev, { id, type }]);
        setTimeout(() => {
          setNotifications(prev => prev.filter(n => n.id !== id));
        }, 3000);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square md:aspect-auto md:h-[600px] glass rounded-[3rem] border border-white/10 p-2 overflow-hidden shadow-2xl bg-[#02040a]">
      {/* Background Neural Network Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      </div>

      <div className="relative z-10 h-full flex flex-col p-6 md:p-10">
        
        {/* Header Area */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl glass border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <span className="text-xl">📊</span>
            </div>
            <div>
              <h4 className="font-black text-xl tracking-tighter italic">AVP<span className="text-primary">.</span>CRM</h4>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[8px] text-[#94A3B8] font-black uppercase tracking-widest">System Active</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
             <div className="px-4 py-2 glass rounded-full border border-white/5 text-[9px] font-black uppercase tracking-widest text-[#94A3B8]">v4.0.2</div>
             <div className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-lg">⚙️</div>
          </div>
        </div>

        {/* Analytics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className="glass p-5 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[#94A3B8] text-[9px] font-black uppercase tracking-widest mb-1">Conversion Rate</div>
              <div className="text-3xl font-black tracking-tighter text-gradient">24.8%</div>
              <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div animate={{ width: '24.8%' }} transition={{ duration: 2 }} className="h-full bg-primary" />
              </div>
           </div>
           <div className="glass p-5 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-[#94A3B8] text-[9px] font-black uppercase tracking-widest mb-1">Active Deals</div>
              <div className="text-3xl font-black tracking-tighter text-white">1,284</div>
              <div className="mt-2 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div animate={{ width: '85%' }} transition={{ duration: 2 }} className="h-full bg-accent" />
              </div>
           </div>
        </div>

        {/* Pipeline Section */}
        <div className="flex-grow glass p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden">
          <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8] mb-8 text-center">Live Lead Pipeline</div>
          
          <div className="relative flex justify-between items-center h-40">
             {/* Connection Lines */}
             <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 -z-10" />
             
             {steps.map((step, i) => (
               <div key={i} className="relative flex flex-col items-center gap-3">
                  <motion.div
                    animate={{
                      scale: activeStep === i ? 1.2 : 1,
                      backgroundColor: activeStep === i ? 'rgba(37, 99, 235, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                      borderColor: activeStep === i ? '#2563EB' : 'rgba(255, 255, 255, 0.1)'
                    }}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-2xl border flex items-center justify-center text-xl md:text-2xl transition-all duration-500 relative"
                  >
                     {step.icon}
                     {activeStep === i && (
                       <motion.div 
                         layoutId="pipeline-glow"
                         className="absolute -inset-2 bg-primary/20 blur-xl rounded-full -z-10"
                       />
                     )}
                  </motion.div>
                  <span className={`text-[9px] font-black uppercase tracking-widest ${activeStep === i ? 'text-primary' : 'text-[#94A3B8]'}`}>
                    {step.name}
                  </span>
                  
                  {/* Moving Particle between steps */}
                  {activeStep === i && i < steps.length - 1 && (
                    <motion.div 
                      initial={{ left: '50%', opacity: 0 }}
                      animate={{ left: '150%', opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                      className="absolute top-[28px] md:top-[32px] w-2 h-2 bg-primary rounded-full blur-sm"
                    />
                  )}
               </div>
             ))}
          </div>

          {/* Activity Logs */}
          <div className="mt-8 space-y-3">
             <div className="flex items-center gap-3 glass p-3 rounded-2xl border border-white/5 opacity-40">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <div className="text-[9px] font-medium text-[#94A3B8]">Incoming lead from Facebook Ads — 2m ago</div>
             </div>
             <div className="flex items-center gap-3 glass p-3 rounded-2xl border border-white/5">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <div className="text-[9px] font-medium text-white">AI Assistant qualifying lead #8241...</div>
             </div>
          </div>
        </div>

        {/* Floating Notifications */}
        <div className="absolute top-24 right-10 flex flex-col gap-3 pointer-events-none">
          <AnimatePresence>
            {notifications.map(n => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="glass px-4 py-2 rounded-xl border border-primary/30 shadow-xl bg-primary/10 flex items-center gap-2"
              >
                 <span className="text-[10px] text-primary">⚡</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-white whitespace-nowrap">{n.type}</span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Scanning Effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[3rem]">
          <div className="absolute top-0 left-0 w-full h-[15%] bg-gradient-to-b from-primary/10 to-transparent animate-scan" />
        </div>

      </div>
    </div>
  );
};

export default CRMDashboard;
