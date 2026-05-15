import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Logo from './Logo';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'static';
      document.body.style.width = 'auto';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Services', path: '/services' },
    { name: 'AVP CRM', path: 'https://crm.avptechsolution.com/' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        when: "afterChildren"
      }
    },
    opened: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[1000] origin-left"
        style={{ scaleX }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-[900] transition-all duration-500 ${
          isScrolled ? 'glass py-4 shadow-2xl shadow-black/20' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="relative z-[900]">
            <Logo size="sm" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.name === 'AVP CRM' ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-[11px] font-black uppercase tracking-[0.3em] transition-all text-[#94A3B8] hover:text-primary"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-[11px] font-black uppercase tracking-[0.3em] transition-all ${
                    location.pathname === link.path ? 'text-primary' : 'text-[#94A3B8] hover:text-primary'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary"
                    />
                  )}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
            >
              Consult Now
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="lg:hidden relative z-[1000] w-12 h-12 flex flex-col items-center justify-center gap-1.5 glass rounded-2xl group transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-colors"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-colors"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white rounded-full transition-colors"
            />
          </button>
        </div>

        {/* Mobile Fullscreen Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed inset-0 bg-[#050816] z-[950] flex flex-col lg:hidden"
            >
              <div className="absolute inset-0 bg-grid opacity-10" />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
              
              <div className="relative z-10 flex justify-between items-center px-6 py-8 md:px-12">
                 <Logo size="sm" />
              </div>

              <div className="relative z-10 flex-grow flex flex-col justify-center items-center gap-6 md:gap-10 px-6">
                {navLinks.map((link) => (
                  <motion.div key={link.name} variants={itemVariants}>
                    {link.name === 'AVP CRM' ? (
                      <a
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-4xl md:text-7xl font-black text-white hover:text-primary transition-all tracking-tighter uppercase"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className={`text-4xl md:text-7xl font-black tracking-tighter uppercase transition-all ${
                          location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
                        }`}
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants} className="mt-12 w-full max-w-sm">
                   <Link
                    to="/contact"
                    className="block w-full bg-primary text-white py-6 rounded-2xl font-black text-center text-xl shadow-2xl shadow-primary/30"
                  >
                    GET STARTED NOW
                  </Link>
                </motion.div>
              </div>

              <div className="relative z-10 p-8 md:p-12 mt-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5">
                  <div className="text-[#94A3B8] text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left">
                    © 2026 AVP Tech Solution. Built for Excellence.
                  </div>
                  <div className="flex gap-8">
                    <a href="#" className="text-white hover:text-primary transition-colors text-2xl">𝕏</a>
                    <a href="#" className="text-white hover:text-primary transition-colors text-2xl">in</a>
                    <a href="#" className="text-white hover:text-primary transition-colors text-2xl">fb</a>
                  </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
