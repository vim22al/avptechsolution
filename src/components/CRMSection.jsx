import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CRMSection = () => {
  return (
    <section id="crm" className="py-32 relative overflow-hidden bg-[#0A0F1E]">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* High-Fidelity Dashboard Mockup */}
            <div className="glass rounded-[3rem] border border-white/10 p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute inset-0 bg-grid opacity-5" />
               <div className="relative z-10">
                  <div className="flex items-center justify-between mb-10">
                    <div>
                       <h4 className="font-black text-2xl tracking-tighter italic">AVP<span className="text-primary">.</span>CRM</h4>
                       <p className="text-xs text-secondary-text uppercase font-bold tracking-widest mt-1">Enterprise Analytics</p>
                    </div>
                    <div className="flex gap-3">
                       <div className="w-10 h-10 rounded-xl glass flex items-center justify-center">
                          <span className="text-accent text-xl">📈</span>
                       </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 p-6 rounded-[2rem] border border-white/5"
                    >
                      <div className="text-secondary-text text-sm font-bold mb-2">Lead Pipeline</div>
                      <div className="text-4xl font-black text-gradient">2,840</div>
                      <div className="text-green-500 text-xs font-bold mt-2 flex items-center gap-1">
                         ↗ +24% this month
                      </div>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/5 p-6 rounded-[2rem] border border-white/5"
                    >
                      <div className="text-secondary-text text-sm font-bold mb-2">Revenue Sync</div>
                      <div className="text-4xl font-black">$184k</div>
                      <div className="text-primary text-xs font-bold mt-2 flex items-center gap-1">
                         ⚡ Automated daily
                      </div>
                    </motion.div>
                  </div>

                  {/* Pipeline Visualization */}
                  <div className="space-y-6">
                    {[
                      { name: 'Initial Contact', val: 90, color: 'bg-primary' },
                      { name: 'AI Qualification', val: 75, color: 'bg-accent' },
                      { name: 'System Proposal', val: 45, color: 'bg-blue-400' },
                      { name: 'Onboarding', val: 30, color: 'bg-green-500' },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs font-bold mb-2 uppercase tracking-widest text-secondary-text">
                          <span>{item.name}</span>
                          <span className="text-text">{item.val}%</span>
                        </div>
                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${item.val}%` }}
                            transition={{ duration: 1.5, delay: i * 0.2 }}
                            className={`h-full rounded-full ${item.color} shadow-[0_0_15px_rgba(37,99,235,0.5)]`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
            
            {/* Extra Floating Badge */}
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-10 -right-10 glass px-6 py-3 rounded-full border border-primary/30 shadow-2xl z-20"
            >
               <span className="text-primary font-bold text-sm">Real-time Sync Active</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-[0.2em] mb-6"
            >
               ⚡ AVP CRM System
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">
              Control Your <br />
              <span className="text-gradient">Growth Engine.</span>
            </h2>
            <p className="text-xl text-secondary-text mb-12 leading-relaxed font-medium">
              Most CRMs are just fancy spreadsheets. Ours is an automation engine that hunts for leads, qualifies them, and closes deals while you sleep.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {[
                { icon: '📊', title: 'Predictive ROI', desc: 'AI-driven revenue forecasting.' },
                { icon: '👥', title: 'Auto-Prospecting', desc: 'Find leads on autopilot.' },
                { icon: '🛡️', title: 'Data Sovereignty', desc: 'You own 100% of your data.' },
                { icon: '📈', title: 'Sales Velocity', desc: 'Shorten your closing cycle.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h5>
                    <p className="text-sm text-secondary-text font-medium leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-6 mt-14">
              <Link 
                to="/contact"
                className="bg-primary text-white px-10 py-5 rounded-2xl font-black transition-all shadow-2xl shadow-primary/40 flex items-center gap-3 text-lg hover:scale-105"
              >
                Schedule Demo →
              </Link>
              <Link 
                to="/contact"
                className="glass text-white px-10 py-5 rounded-2xl font-black transition-all border border-white/10 text-lg hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CRMSection;
