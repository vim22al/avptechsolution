import { motion } from 'framer-motion';


const services = [
  {
    title: 'Website Design',
    description: 'High-converting, visually stunning websites built with modern technologies for maximum performance.',
    icon: <span className="text-2xl">🌐</span>,
    color: 'from-blue-500/20 to-transparent'
  },
  {
    title: 'AI Automation',
    description: 'Leverage LLMs and AI agents to automate content, customer support, and internal decision making.',
    icon: <span className="text-2xl">🧠</span>,
    color: 'from-cyan-500/20 to-transparent'
  },
  {
    title: 'n8n Automation',
    description: 'Complex multi-step workflows connecting 400+ apps without the high costs of traditional platforms.',
    icon: <span className="text-2xl">⚡</span>,
    color: 'from-yellow-500/20 to-transparent'
  },
  {
    title: 'Custom Business Automation',
    description: 'Bespoke solutions tailored to your unique operational bottlenecks and growth objectives.',
    icon: <span className="text-2xl">⚙️</span>,
    color: 'from-purple-500/20 to-transparent'
  },
  {
    title: 'AVP CRM',
    description: 'Our proprietary CRM system designed for automation-first businesses to track sales and leads.',
    icon: <span className="text-2xl">📊</span>,
    color: 'from-green-500/20 to-transparent'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
            >
              Our <span className="text-gradient">Capabilities.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-secondary-text text-xl leading-relaxed font-medium"
            >
              We don't just build tools; we build ecosystems that empower your team and multiply your output.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
             <button className="glass px-8 py-4 rounded-2xl font-bold hover:bg-white/5 transition-all flex items-center gap-2">
                View All Services →
             </button>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`glass p-10 rounded-[2.5rem] border border-white/5 hover:border-primary/50 transition-all duration-500 group relative overflow-hidden bg-gradient-to-br ${service.color}`}
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 group-hover:bg-white/10">
                {service.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors tracking-tight">
                {service.title}
              </h3>
              <p className="text-secondary-text text-lg leading-relaxed font-medium mb-8">
                {service.description}
              </p>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-primary font-bold">
                 Learn More →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
