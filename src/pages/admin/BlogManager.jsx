import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getBlogs } from '../../lib/sanity';

const BlogManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data || []);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <div>
           <h1 className="text-4xl font-black tracking-tight mb-2">Blog Management</h1>
           <p className="text-[#94A3B8] font-medium">Create, edit and manage your content on Sanity CMS.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-2xl font-black transition-all hover:scale-105 shadow-2xl shadow-primary/40 flex items-center gap-3">
           <span>➕</span> Create New Post
        </button>
      </div>

      {/* Blogs Table/Grid */}
      <div className="glass rounded-[3rem] border border-white/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/5">
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8]">Post Details</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8]">Status</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8]">Published Date</th>
                <th className="px-8 py-6 text-[10px] font-black uppercase tracking-[0.3em] text-[#94A3B8]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {isLoading ? (
                [1, 2, 3].map(i => (
                  <tr key={i} className="animate-pulse">
                    <td className="px-8 py-8"><div className="h-4 w-48 bg-white/5 rounded" /></td>
                    <td className="px-8 py-8"><div className="h-4 w-20 bg-white/5 rounded" /></td>
                    <td className="px-8 py-8"><div className="h-4 w-32 bg-white/5 rounded" /></td>
                    <td className="px-8 py-8"><div className="h-4 w-12 bg-white/5 rounded" /></td>
                  </tr>
                ))
              ) : blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="px-8 py-8">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl overflow-hidden">
                           {blog.mainImage ? <img src={blog.mainImage} alt="" className="w-full h-full object-cover" /> : '📄'}
                        </div>
                        <div>
                          <p className="font-bold text-white mb-1">{blog.title}</p>
                          <p className="text-[10px] text-[#94A3B8] font-black uppercase tracking-widest">{blog.categories?.[0] || 'General'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-[10px] font-black uppercase tracking-widest border border-green-500/20">
                        Published
                      </span>
                    </td>
                    <td className="px-8 py-8">
                      <p className="text-sm font-medium text-[#94A3B8]">{new Date(blog.publishedAt).toLocaleDateString()}</p>
                    </td>
                    <td className="px-8 py-8">
                      <div className="flex gap-4">
                        <button className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary transition-all group">
                          <span className="text-xs group-hover:scale-125 transition-transform">✏️</span>
                        </button>
                        <button className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-red-500 transition-all group">
                          <span className="text-xs group-hover:scale-125 transition-transform">🗑️</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-8 py-20 text-center">
                     <p className="text-[#94A3B8] font-medium">No blog posts found on Sanity CMS.</p>
                     <button className="text-primary font-black uppercase tracking-widest text-xs mt-4 hover:underline">Create your first post</button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
