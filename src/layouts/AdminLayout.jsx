import { useState, useEffect } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/Logo';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('isAdminAuthenticated');
    if (auth !== 'true') {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/admin/login');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: '📊' },
    { name: 'Blogs', path: '/admin/blogs', icon: '✍️' },
    { name: 'Media', path: '/admin/media', icon: '🖼️' },
    { name: 'Categories', path: '/admin/categories', icon: '📁' },
    { name: 'Settings', path: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <div className="min-h-screen bg-[#050816] flex text-[#F8FAFC]">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: isSidebarOpen ? 320 : 100 }}
        className="glass border-r border-white/5 h-screen sticky top-0 flex flex-col z-50 bg-[#0a0f1e]/40 backdrop-blur-3xl"
      >
        <div className="p-8 mb-10 flex items-center justify-between">
          <Logo showText={isSidebarOpen} size="sm" />
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all"
          >
            {isSidebarOpen ? '❮' : '❯'}
          </button>
        </div>

        <nav className="flex-grow px-6 space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-6 py-4 rounded-2xl transition-all duration-300 group ${
                location.pathname === item.path 
                  ? 'bg-primary text-white shadow-xl shadow-primary/30' 
                  : 'hover:bg-white/5 text-[#94A3B8]'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              {isSidebarOpen && <span className="font-bold tracking-tight">{item.name}</span>}
            </Link>
          ))}
        </nav>

        <div className="p-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-red-400 hover:bg-red-400/10 transition-all font-bold"
          >
            <span className="text-xl">🚪</span>
            {isSidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-grow flex flex-col min-h-screen overflow-x-hidden">
        {/* Topbar */}
        <header className="h-24 border-b border-white/5 flex items-center justify-between px-12 bg-[#0a0f1e]/20 backdrop-blur-xl sticky top-0 z-40">
           <div className="flex items-center gap-4">
              <h2 className="text-2xl font-black tracking-tight">
                {menuItems.find(item => location.pathname === item.path)?.name || 'Admin Panel'}
              </h2>
           </div>
           <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary font-black text-xs">
                A
              </div>
              <div className="hidden md:block">
                 <p className="text-sm font-bold">Admin User</p>
                 <p className="text-[10px] text-[#94A3B8] font-black uppercase tracking-widest">Master Admin</p>
              </div>
           </div>
        </header>

        <div className="p-12">
          <AnimatePresence mode="wait">
             <motion.div
               key={location.pathname}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
             >
               <Outlet />
             </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
