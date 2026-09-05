import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router";


import Home from './pages/Home';
import Sponsorships from './pages/Sponsorships';
import ExecutiveBoard from './pages/ExecutiveBoard';
import Resources from './pages/Resources';
import Events from './pages/Events';

import Topbar from './assets/Topbar';
import Footer from './assets/Footer';
import './App.css';

function App() {
  const topbarHeight = 4; // em

  const location = useLocation();
  const contentWrapperRef = useRef(null);
  useEffect(() => {
    contentWrapperRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);


  return (
    <>
      <Topbar height={topbarHeight} />
      <div className="contentWrapper" ref={contentWrapperRef} style={{ '--topbar-height': `${topbarHeight}em` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
          <Route path="/executive-board" element={<ExecutiveBoard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        <div className="spacer"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
