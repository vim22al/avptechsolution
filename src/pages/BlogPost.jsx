import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { getBlogPost, urlFor } from '../lib/sanity';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getBlogPost(slug);
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#050816] pt-40 flex items-center justify-center">
         <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050816] pt-40 flex flex-col items-center justify-center text-center px-6">
         <div className="text-8xl mb-8">🔍</div>
         <h1 className="text-4xl font-black mb-4 tracking-tight">Post Not Found</h1>
         <p className="text-[#94A3B8] mb-12 max-w-md">The insight you're looking for might have been moved or archived.</p>
         <Link to="/blog" className="bg-primary text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-primary/40">Back to Journal</Link>
      </div>
    );
  }

  return (
    <article className="bg-[#050816] min-h-screen pt-40 pb-32 relative overflow-hidden font-inter">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#94A3B8] mb-16 hover:text-primary transition-colors group">
           <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Journal
        </Link>

        {/* Header */}
        <header className="max-w-4xl mx-auto mb-20">
           <div className="flex items-center gap-4 mb-10">
              <span className="px-5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest">
                 {post.categories?.[0] || 'AI Strategy'}
              </span>
              <span className="text-xs font-bold text-[#94A3B8]">
                 {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
           </div>
           <h1 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9] text-white">
              {post.title}
           </h1>
           <div className="flex items-center gap-4 pt-12 border-t border-white/5">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 flex items-center justify-center font-black text-primary text-xl">A</div>
              <div>
                 <p className="text-lg font-black tracking-tight text-white">{post.author || 'AVP Admin'}</p>
                 <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#94A3B8]">Automation Architect</p>
              </div>
           </div>
        </header>

        {/* Featured Image */}
        {post.mainImage && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto mb-24 rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl"
          >
             <img 
               src={urlFor(post.mainImage).url()} 
               alt={post.title}
               className="w-full aspect-[21/9] object-cover"
             />
          </motion.div>
        )}

        {/* Content */}
        <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:font-black prose-headings:tracking-tighter prose-p:text-[#94A3B8] prose-p:leading-relaxed prose-a:text-primary">
           <PortableText value={post.body} />
        </div>

        {/* Share Section */}
        <div className="max-w-3xl mx-auto mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#94A3B8]">Share this insight:</span>
              <div className="flex gap-4">
                 {['𝕏', 'in', 'fb'].map(i => (
                   <button key={i} className="w-10 h-10 rounded-xl glass border border-white/10 flex items-center justify-center hover:bg-primary transition-all text-xs font-black">{i}</button>
                 ))}
              </div>
           </div>
           <Link to="/contact" className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary hover:border-primary transition-all">
              Build with us
           </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
