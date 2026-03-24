import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProcessPage from './pages/ProcessPage';
import ServicePage from './pages/ServicePage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
      </Routes>
    </Layout>
  );
}
