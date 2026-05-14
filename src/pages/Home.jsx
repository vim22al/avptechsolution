import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CRMSection from '../components/CRMSection';
import WorkflowProcess from '../components/WorkflowProcess';
import CTASection from '../components/CTASection';
import Showcase from '../components/Showcase';
import Testimonials from '../components/Testimonials';
import { useState } from 'react';

const TrustedBy = () => (
  <div className="py-20 glass border-y border-white/5 overflow-hidden">
    <div className="container mx-auto px-6">
      <p className="text-center text-secondary-text text-sm font-bold uppercase tracking-[0.3em] mb-12 opacity-50">Empowering the World's Most Ambitious Teams</p>
      <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
        {['OpenAI', 'Vercel', 'Stripe', 'Linear', 'Framer', 'Anthropic'].map((brand) => (
          <span key={brand} className="text-3xl font-black tracking-tighter text-text">{brand}</span>
        ))}
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex justify-between items-center text-left hover:text-primary transition-all group"
      >
        <span className="text-xl font-bold tracking-tight group-hover:pl-2 transition-all">{question}</span>
        <div className={`p-2 glass rounded-full transition-transform duration-500 ${isOpen ? 'rotate-180 bg-primary/20' : ''}`}>
          <span className="text-xl">↓</span>
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-8 text-secondary-text text-lg leading-relaxed font-medium">{answer}</p>
      </motion.div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <TrustedBy />

      <div className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
        <Services />
      </div>

      <Showcase />

      <CRMSection />

      {/* Why Choose Us - Refined */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest mb-6">
                🏆 Why AVP Tech
              </div>
              <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter">Engineered for <br /><span className="text-gradient">Performance.</span></h2>
              <div className="space-y-10">
                {[
                  { title: 'Industry-Leading Expertise', desc: 'Our team consists of senior AI engineers and system architects with a track record of scaling enterprises.' },
                  { title: 'Custom Native Systems', desc: 'We don\'t use generic wrappers. We build native systems that integrate deeply with your existing tech stack.' },
                  { title: 'Obsessive Optimization', desc: 'Every millisecond counts. We optimize for speed, reliability, and maximum ROI on every automation.' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-12 h-12 rounded-full glass border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary transition-all duration-500">
                      <span className="text-primary group-hover:text-white transition-colors text-2xl">✓</span>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-secondary-text text-lg leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { label: 'Efficiency Gain', val: '98%', color: 'text-primary' },
                { label: 'Systems Built', val: '250+', color: 'text-accent' },
                { label: 'Automated Ops', val: '24/7', color: 'text-blue-400' },
                { label: 'Tasks Executed', val: '25M+', color: 'text-green-400' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`glass p-10 rounded-[2.5rem] border border-white/5 text-center ${i % 2 !== 0 ? 'mt-12' : '-mt-12 hidden md:block'} md:block`}
                >
                  <div className={`text-5xl font-black mb-3 tracking-tighter ${stat.color}`}>{stat.val}</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-secondary-text">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="bg-[#0A0F1E]">
        <WorkflowProcess />
      </div>

      <Testimonials />

      {/* FAQ - Refined */}
      <section className="py-32 bg-card/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Your <span className="text-gradient">Questions.</span></h2>
          </div>
          <div className="glass rounded-[3rem] p-10 md:p-16 border border-white/10">
            <FAQItem
              question="How secure is our data with your AI systems?"
              answer="Security is our top priority. We use enterprise-grade encryption and can deploy local AI models that ensure your proprietary data never leaves your infrastructure."
            />
            <FAQItem
              question="Can you automate existing legacy software?"
              answer="Yes. Through a combination of API integrations, custom webhooks, and even RPA (Robotic Process Automation), we can breathe new life into older systems."
            />
            <FAQItem
              question="What is the typical return on investment?"
              answer="Most clients see a complete ROI within 4-6 months through reduced labor costs, increased lead conversion, and 24/7 operational capability."
            />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Home;
