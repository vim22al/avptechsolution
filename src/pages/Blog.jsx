import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { getBlogs, urlFor } from '../lib/sanity';

const Blog = () => {
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
    <div className="bg-[#050816] min-h-screen pt-40 pb-32 relative overflow-hidden font-inter">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
           <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="inline-flex items-center gap-2 text-primary font-black text-xs uppercase tracking-[0.4em] mb-6"
           >
              📚 AVP Tech Insights
           </motion.div>
           <h1 className="text-6xl md:text-9xl font-black mb-8 tracking-tighter leading-none text-white">
              The <span className="text-gradient">Intelligence</span> <br /> Journal.
           </h1>
           <p className="text-[#94A3B8] text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              Deep dives into AI automation, business technology, and the future of digital enterprise operations.
           </p>
        </div>

        {/* Blog Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass rounded-[3rem] h-[500px] animate-pulse bg-white/5 border border-white/10" />
            ))}
          </div>
        ) : blogs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-[3rem] border border-white/5 overflow-hidden flex flex-col h-full hover:border-primary/30 transition-all shadow-2xl shadow-black/20"
              >
                 <Link to={`/blog/${blog.slug.current}`} className="block aspect-[16/10] overflow-hidden relative">
                    {blog.mainImage ? (
                      <img 
                        src={urlFor(blog.mainImage).url()} 
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-white/5 flex items-center justify-center text-4xl">📄</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-60" />
                 </Link>
                 
                 <div className="p-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 mb-6">
                       <span className="px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                          {blog.categories?.[0] || 'AI Insights'}
                       </span>
                       <span className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">
                          {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                       </span>
                    </div>
                    
                    <h2 className="text-2xl font-black mb-4 tracking-tight leading-tight group-hover:text-primary transition-colors">
                       <Link to={`/blog/${blog.slug.current}`}>{blog.title}</Link>
                    </h2>
                    
                    <p className="text-[#94A3B8] font-medium leading-relaxed mb-8 line-clamp-3">
                       {blog.excerpt}
                    </p>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex justify-between items-center">
                       <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-[10px] font-black text-primary">A</div>
                          <span className="text-xs font-bold text-white/70">{blog.author || 'AVP Admin'}</span>
                       </div>
                       <Link 
                         to={`/blog/${blog.slug.current}`}
                         className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 group/link"
                       >
                         Read Full Post <span className="translate-x-0 group-hover/link:translate-x-1 transition-transform">→</span>
                       </Link>
                    </div>
                 </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-40 glass rounded-[4rem] border border-white/5">
             <div className="text-6xl mb-8">📭</div>
             <h3 className="text-3xl font-black mb-4 tracking-tight">No Insights Yet.</h3>
             <p className="text-[#94A3B8] font-medium">We're busy drafting high-performance AI automation content. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
