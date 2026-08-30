import { useState } from 'react';
import { Routes, Route } from "react-router";


import Home from './pages/Home';
import Sponsorships from './pages/Sponsorships';
import Topbar from './assets/Topbar';
import Footer from './assets/Footer';
import './App.css';

function App() {
  const topbarHeight = 4; // em

  return (
    <>
      <Topbar height={topbarHeight} />
      <div className="contentWrapper" style={{ '--topbar-height': `${topbarHeight}em` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
        </Routes>
        <div className="spacer"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
