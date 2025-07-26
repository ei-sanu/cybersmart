import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import AboutDev from './pages/AboutDev';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function AppContent() {
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Page navigation loading
    setPageLoading(true);
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading || pageLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutDev />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;