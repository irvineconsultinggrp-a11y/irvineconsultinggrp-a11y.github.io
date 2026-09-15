import './index.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const Team = lazy(() => import('./pages/Team'));
const Students = lazy(() => import('./pages/Students'));
const Contact = lazy(() => import('./pages/Contact'));
const Events = lazy(() => import('./pages/Events'));

function AppContent() {
  return (
    <div className="">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-white" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/students" element={<Students />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
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
