import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Consultation', desc: 'We dive deep into your business processes and bottlenecks.' },
  { number: '02', title: 'Strategy', desc: 'Designing a bespoke automation roadmap and tech stack.' },
  { number: '03', title: 'Development', desc: 'Building your custom workflows, AI agents, and systems.' },
  { number: '04', title: 'Launch & Scale', desc: 'Deployment, training, and continuous optimization.' },
];

const WorkflowProcess = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-gradient">Workflow</span></h2>
          <p className="text-secondary-text max-w-2xl mx-auto text-lg">How we transform your business from manual to automated in four simple steps.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 text-center"
            >
              <div className="w-20 h-20 rounded-full glass border border-primary/30 flex items-center justify-center mx-auto mb-8 text-2xl font-bold text-primary shadow-xl shadow-primary/10">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-secondary-text text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkflowProcess;
