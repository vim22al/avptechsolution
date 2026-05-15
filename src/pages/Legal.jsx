import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LegalLayout = ({ title, subtitle, children }) => (
  <div className="bg-[#0F172A] text-[#F8FAFC] min-h-screen pt-40 pb-24 font-inter">
    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
    <div className="container mx-auto px-6 relative z-10 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <Link to="/" className="text-primary hover:underline text-sm font-bold mb-8 inline-block flex items-center gap-2">
           ← Back to Home
        </Link>
        <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
          {title}
        </h1>
        <p className="text-xl text-[#94A3B8] font-medium leading-relaxed">
          {subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="glass rounded-[3rem] border border-white/10 p-10 md:p-16 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl -z-10" />
        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-p:text-[#94A3B8] prose-li:text-[#94A3B8]">
          {children}
        </div>
        
        <div className="mt-16 pt-10 border-t border-white/5 flex justify-between items-center flex-wrap gap-4">
           <div className="text-xs font-bold uppercase tracking-widest text-[#94A3B8]">
              Last Updated: May 2024
           </div>
           <div className="text-xs font-bold text-[#F8FAFC]/50">
              © AVP Tech Solution
           </div>
        </div>
      </motion.div>
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <LegalLayout 
    title="Privacy Policy" 
    subtitle="How AVP Tech Solution collects, uses, and protects your information."
  >
    <h2>INTRODUCTION</h2>
    <p>
      AVP Tech Solution respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
    </p>

    <h2>INFORMATION WE COLLECT</h2>
    <ul>
      <li>Name</li>
      <li>Email address</li>
      <li>Phone number</li>
      <li>Business information</li>
      <li>Project requirements</li>
      <li>Communication details</li>
    </ul>

    <h2>HOW WE USE INFORMATION</h2>
    <p>We use information to:</p>
    <ul>
      <li>Respond to inquiries</li>
      <li>Provide services</li>
      <li>Improve website experience</li>
      <li>Deliver automation and development solutions</li>
      <li>Send important updates</li>
    </ul>

    <h2>DATA SECURITY</h2>
    <p>
      We implement reasonable security measures to protect your information from unauthorized access, misuse, or disclosure.
    </p>

    <h2>THIRD-PARTY SERVICES</h2>
    <p>
      Our website may use third-party services including:
    </p>
    <ul>
      <li>Analytics tools</li>
      <li>Hosting services</li>
      <li>CRM systems</li>
      <li>Automation tools</li>
    </ul>

    <h2>COOKIES</h2>
    <p>
      Our website may use cookies to improve user experience and website performance.
    </p>

    <h2>CONTACT INFORMATION</h2>
    <p>
      AVP Tech Solution<br />
      Lucknow, Uttar Pradesh, India<br /><br />
      Email: <a href="mailto:vimal45k@gmail.com" className="text-primary">vimal45k@gmail.com</a>
    </p>
  </LegalLayout>
);

export const Disclaimer = () => (
  <LegalLayout 
    title="Website Disclaimer" 
    subtitle="Important information regarding the use of AVP Tech Solution website and services."
  >
    <h2>GENERAL INFORMATION</h2>
    <p>
      The information provided on this website is for general informational and business purposes only.
    </p>

    <h2>NO GUARANTEE</h2>
    <p>
      While we strive to provide accurate and professional solutions, AVP Tech Solution does not guarantee specific business outcomes, revenue increases, or automation performance results.
    </p>

    <h2>TECHNOLOGY SERVICES</h2>
    <p>
      All automation, development, and digital solutions are provided based on project scope, technical feasibility, and client requirements.
    </p>

    <h2>THIRD-PARTY TOOLS</h2>
    <p>
      Our services may involve third-party platforms and technologies such as APIs, automation tools, hosting providers, and external software services.
    </p>

    <h2>LIMITATION OF LIABILITY</h2>
    <p>
      AVP Tech Solution shall not be held liable for any direct or indirect losses resulting from the use of our website, services, or third-party integrations.
    </p>

    <h2>CONTACT</h2>
    <p>
      For any questions regarding this Disclaimer, contact:<br /><br />
      AVP Tech Solution<br />
      Lucknow, India<br />
      <a href="mailto:vimal45k@gmail.com" className="text-primary">vimal45k@gmail.com</a>
    </p>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout 
    title="Terms & Conditions" 
    subtitle="Terms governing the use of AVP Tech Solution website and services."
  >
    <h2>ACCEPTANCE OF TERMS</h2>
    <p>
      By accessing this website or using our services, you agree to comply with these Terms & Conditions.
    </p>

    <h2>SERVICES</h2>
    <p>AVP Tech Solution provides:</p>
    <ul>
      <li>Website Development</li>
      <li>AI Automation</li>
      <li>Workflow Automation</li>
      <li>CRM Solutions</li>
      <li>Custom Business Systems</li>
    </ul>

    <h2>CLIENT RESPONSIBILITIES</h2>
    <p>Clients are responsible for:</p>
    <ul>
      <li>Providing accurate project information</li>
      <li>Timely communication</li>
      <li>Necessary approvals and access</li>
    </ul>

    <h2>INTELLECTUAL PROPERTY</h2>
    <p>
      All website content, branding, code, and materials remain the property of AVP Tech Solution unless otherwise agreed in writing.
    </p>

    <h2>PAYMENTS</h2>
    <p>
      Project payments, milestones, and service fees are agreed upon before project initiation.
    </p>

    <h2>SERVICE MODIFICATIONS</h2>
    <p>
      AVP Tech Solution reserves the right to modify or discontinue services without prior notice.
    </p>

    <h2>LIMITATION OF LIABILITY</h2>
    <p>We are not responsible for losses arising from:</p>
    <ul>
      <li>Third-party platform failures</li>
      <li>Hosting issues</li>
      <li>API changes</li>
      <li>External service interruptions</li>
    </ul>

    <h2>GOVERNING LAW</h2>
    <p>
      These terms shall be governed by the laws of India.
    </p>

    <h2>CONTACT</h2>
    <p>
      AVP Tech Solution<br />
      Lucknow, Uttar Pradesh, India<br /><br />
      Email: <a href="mailto:vimal45k@gmail.com" className="text-primary">vimal45k@gmail.com</a>
    </p>
  </LegalLayout>
);
