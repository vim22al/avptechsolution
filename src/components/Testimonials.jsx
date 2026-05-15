import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Rahul Verma",
    role: "Founder, RV Digital Solutions",
    industry: "Digital Marketing Agency",
    review: "AVP Tech Solution automated our lead management and follow-up system completely. Our response time improved massively and daily operations became much smoother.",
    stars: 5,
    initials: "RV"
  },
  {
    name: "Aman Singh",
    role: "Director, Singh Realty Group",
    industry: "Real Estate",
    review: "The automation workflows and CRM system helped us manage property leads much more efficiently. The entire process now feels organized and scalable.",
    stars: 5,
    initials: "AS"
  },
  {
    name: "Priya Sharma",
    role: "Owner, Bright Future Academy",
    industry: "Coaching Institute",
    review: "AVP Tech Solution created a modern website and automation system for our institute. Student inquiries and follow-ups are now fully streamlined.",
    stars: 5,
    initials: "PS"
  },
  {
    name: "Vikash Patel",
    role: "Operations Manager, Patel Enterprises",
    industry: "Business Operations",
    review: "The custom automation solutions reduced repetitive manual work and improved our business workflow significantly.",
    stars: 5,
    initials: "VP"
  },
  {
    name: "Neha Kapoor",
    role: "Founder, Kapoor Media Agency",
    industry: "Creative Agency",
    review: "The website design and AI automation setup gave our business a much more professional and modern system.",
    stars: 5,
    initials: "NK"
  }
];

const TrustStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
    {[
      { label: "Workflows Automated", val: "50+", icon: "⚡" },
      { label: "Projects Delivered", val: "100+", icon: "🎯" },
      { label: "Fast Support", val: "24/7", icon: "🛠️" },
      { label: "AI Expertise", val: "Elite", icon: "🧠" }
    ].map((stat, i) => (
      <motion.div 
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="glass p-8 rounded-3xl border border-white/5 text-center group hover:border-primary/30 transition-all"
      >
        <div className="text-3xl mb-3">{stat.icon}</div>
        <div className="text-3xl font-black text-text tracking-tighter mb-1">{stat.val}</div>
        <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">{stat.label}</div>
      </motion.div>
    ))}
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#0A0F1E]">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-grid opacity-10" />
      <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             whileInView={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.4em] mb-6"
           >
              ⭐ Client Success
           </motion.div>
           <h2 className="text-4xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
              Trusted By Growing <br />
              <span className="text-gradient">Indian Businesses.</span>
           </h2>
           <p className="text-[#94A3B8] text-xl max-w-3xl mx-auto font-medium leading-relaxed">
              From startups to growing companies, businesses across India use our automation and digital solutions to improve efficiency and scale faster.
           </p>
        </div>

        {/* Trust Stats */}
        <TrustStats />

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {testimonials.map((t, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               whileHover={{ y: -10 }}
               className="glass p-10 rounded-[3rem] border border-white/5 flex flex-col justify-between h-full group transition-all hover:border-primary/20 shadow-2xl shadow-black/20"
             >
                <div>
                   <div className="flex gap-1 mb-8">
                      {[...Array(t.stars)].map((_, i) => (
                        <motion.span 
                          key={i} 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: 0.5 + (i * 0.1) }}
                          className="text-primary text-lg"
                        >
                          ★
                        </motion.span>
                      ))}
                   </div>
                   <p className="text-[#F8FAFC] text-xl font-medium leading-relaxed italic mb-10">
                      "{t.review}"
                   </p>
                </div>
                
                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                   <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center font-black text-primary text-xl shadow-inner">
                      {t.initials}
                   </div>
                   <div>
                      <h4 className="text-lg font-black tracking-tight text-white">{t.name}</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">{t.role}</p>
                      <div className="mt-1 px-2 py-0.5 rounded-md bg-white/5 text-[9px] font-black uppercase tracking-widest text-primary inline-block">
                         {t.industry}
                      </div>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-32 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>
    </section>
  );
};

export default Testimonials;
