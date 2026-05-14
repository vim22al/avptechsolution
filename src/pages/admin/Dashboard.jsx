import { motion } from 'framer-motion';

const Dashboard = () => {
  const stats = [
    { label: 'Total Blogs', val: '12', icon: '✍️', trend: '+2 this week' },
    { label: 'Total Views', val: '4.2k', icon: '👁️', trend: '+18% growth' },
    { label: 'Media Items', val: '48', icon: '🖼️', trend: '8.2GB used' },
    { label: 'Active Drafts', val: '3', icon: '📝', trend: 'Awaiting review' }
  ];

  return (
    <div className="space-y-12">
      {/* Stats Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-primary/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all" />
            <div className="text-3xl mb-4">{stat.icon}</div>
            <div className="text-4xl font-black tracking-tighter mb-2">{stat.val}</div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-4">{stat.label}</div>
            <div className="text-[10px] font-bold text-primary bg-primary/10 inline-block px-2 py-1 rounded-md">
              {stat.trend}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass rounded-[3rem] border border-white/5 p-10">
           <h3 className="text-xl font-black mb-8 tracking-tight">Recent Blog Activity</h3>
           <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">📄</div>
                      <div>
                         <h4 className="font-bold text-sm">How AI is Revolutionizing Marketing</h4>
                         <p className="text-[10px] text-[#94A3B8] uppercase font-bold tracking-widest mt-1">Published 2 days ago</p>
                      </div>
                   </div>
                   <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline">Edit Post</button>
                </div>
              ))}
           </div>
        </div>

        <div className="glass rounded-[3rem] border border-white/5 p-10">
           <h3 className="text-xl font-black mb-8 tracking-tight">Quick Actions</h3>
           <div className="space-y-4">
              <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-105">
                 <span>➕</span> Create New Blog
              </button>
              <button className="w-full glass text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-white/5">
                 <span>📂</span> Upload Media
              </button>
              <button className="w-full glass text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:bg-white/5">
                 <span>🔍</span> View Live Site
              </button>
           </div>
        </div>
      </div>

      {/* System Status */}
      <div className="glass rounded-[3rem] border border-white/5 p-10 flex items-center justify-between">
         <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            <p className="text-sm font-bold">Sanity CMS Connection Stable</p>
         </div>
         <p className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Last synced: 2 minutes ago</p>
      </div>
    </div>
  );
};

export default Dashboard;
