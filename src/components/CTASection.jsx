import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden border border-primary/30 shadow-[0_0_80px_rgba(37,99,235,0.1)]"
        >
          {/* Background Glows */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[140px]" />

          <h2 className="text-5xl md:text-8xl font-black mb-10 relative z-10 tracking-tighter leading-none">
            Ready to <span className="text-gradient">Automate</span> <br />
            Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-secondary-text mb-16 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Join forward-thinking companies that are already scaling faster with our custom AI automation and business systems.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <Link 
              to="/contact"
              className="bg-primary hover:bg-blue-700 text-white px-12 py-6 rounded-3xl font-black transition-all shadow-2xl shadow-primary/40 flex items-center gap-3 text-xl hover:scale-105"
            >
              Schedule Demo →
            </Link>
            <Link 
              to="/contact"
              className="glass hover:bg-white/10 text-white px-12 py-6 rounded-3xl font-black transition-all border border-white/10 text-xl hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
