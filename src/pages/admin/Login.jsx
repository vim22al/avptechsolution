import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulated login for now - in production, this would verify against Sanity or a dedicated auth provider
    setTimeout(() => {
      if (email === 'admin@avptechsolution.com' && password === 'admin123') {
        localStorage.setItem('isAdminAuthenticated', 'true');
        navigate('/admin/dashboard');
      } else {
        setError('Invalid credentials. Please try again.');
        setIsLoading(false);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050816] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-accent/20 blur-[150px] rounded-full" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="glass rounded-[3rem] border border-white/10 p-12 shadow-2xl bg-[#0a0f1e]/80 backdrop-blur-3xl">
          <div className="text-center mb-10">
            <Logo className="justify-center mb-8" size="lg" />
            <h1 className="text-3xl font-black tracking-tight text-white mb-2">Admin Panel</h1>
            <p className="text-[#94A3B8] font-medium uppercase tracking-widest text-[10px]">Secure Enterprise Login</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] ml-4">Email Address</label>
              <input
                type="email"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="admin@avptechsolution.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] ml-4">Password</label>
              <input
                type="password"
                required
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-400 text-xs font-bold text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20"
              >
                {error}
              </motion.div>
            )}

            <button
              disabled={isLoading}
              className="w-full bg-primary text-white py-5 rounded-2xl font-black text-lg transition-all hover:scale-[1.02] shadow-2xl shadow-primary/40 flex items-center justify-center gap-3"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                'Sign In to Dashboard'
              )}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-[10px] font-bold text-[#F8FAFC]/30 uppercase tracking-[0.3em]">
              Powered by Sanity CMS v3.0
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
