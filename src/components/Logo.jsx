import { motion } from 'framer-motion';

const Logo = ({ className = "", showText = true, size = "md" }) => {
  const sizes = {
    sm: "scale-[0.6]",
    md: "scale-100",
    lg: "scale-[1.5]"
  };

  return (
    <div className={`flex items-center gap-3 ${sizes[size]} ${className} group cursor-pointer`}>
      {/* ICON SYMBOL */}
      <div className="relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-primary/40 blur-[15px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <svg 
          width="44" 
          height="44" 
          viewBox="0 0 44 44" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Abstract Triangular 'A' / Node Structure */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            d="M22 4L38 34H6L22 4Z"
            stroke="url(#logo_grad_1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            cx="22" cy="4" r="3"
            fill="#06B6D4"
          />
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            cx="38" cy="34" r="3"
            fill="#2563EB"
          />
          <motion.circle
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            cx="6" cy="34" r="3"
            fill="#2563EB"
          />
          
          {/* Inner Connection Node */}
          <motion.path
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            d="M22 14L28 26H16L22 14Z"
            fill="url(#logo_grad_2)"
          />
          
          <defs>
            <linearGradient id="logo_grad_1" x1="6" y1="4" x2="38" y2="34" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="logo_grad_2" x1="16" y1="14" x2="28" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#06B6D4" stopOpacity="0.8" />
              <stop offset="1" stopColor="#2563EB" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* BRAND NAME */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="text-2xl font-black tracking-tighter italic">
            <span className="text-gradient">AVP</span>
            <span className="text-[#F8FAFC] ml-1.5 transition-colors group-hover:text-primary">TECH</span>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em] text-[#94A3B8] mt-1 group-hover:text-accent transition-colors">
            SOLUTION
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
