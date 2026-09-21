import './index.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Team from './pages/Team';
import { DUR, EASE } from './lib/motion';

const Students = lazy(() => import('./pages/Students'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));

function AppContent() {
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  const routes = (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/team" element={<Team />} />
      <Route path="/students" element={<Students />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );

  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-icgblue" aria-busy="true" />
      }
    >
      <div>
        <Navbar />
        {reduceMotion ? (
          routes
        ) : (
          // Keyed on pathname so each route fades up on arrival.
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DUR.fast, ease: EASE }}
          >
            {routes}
          </motion.main>
        )}
        <Footer />
      </div>
    </Suspense>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
