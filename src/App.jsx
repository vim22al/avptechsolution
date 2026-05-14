import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import AdminLayout from './layouts/AdminLayout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import { PrivacyPolicy, Disclaimer, Terms } from './pages/Legal';
import ScrollToTop from './components/ScrollToTop';

// Admin Pages
import AdminLogin from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import BlogManager from './pages/admin/BlogManager';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="terms" element={<Terms />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>

        {/* ADMIN ROUTES - Protected via AdminLayout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="blogs" element={<BlogManager />} />
          {/* Placeholders for other admin pages */}
          <Route path="media" element={<div className="p-12 text-center text-[#94A3B8] font-medium glass rounded-[3rem] border border-white/5">Media management module coming soon.</div>} />
          <Route path="categories" element={<div className="p-12 text-center text-[#94A3B8] font-medium glass rounded-[3rem] border border-white/5">Category management module coming soon.</div>} />
          <Route path="settings" element={<div className="p-12 text-center text-[#94A3B8] font-medium glass rounded-[3rem] border border-white/5">System settings module coming soon.</div>} />
        </Route>

        {/* ADMIN LOGIN - Separate from layouts */}
        <Route path="/admin/login" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
