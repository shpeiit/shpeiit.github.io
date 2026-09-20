import { useState, useRef, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from "react-router";


import Home from './pages/Home';
import Sponsorships from './pages/Sponsorships';
import ExecutiveBoard from './pages/ExecutiveBoard';
import Resources from './pages/Resources';
import Events from './pages/Events';
import Admin from './pages/Admin'; 

import Topbar from './assets/Topbar';
import Footer from './assets/Footer';
import './App.css';


const SHEET_ID = '1bQ58PvsrVoRkIQYx-vydcq_riJ43vr7oW3hSxQ3JuIs';

let lastEventsRead = null;
let canFetchEvents = true;
function getEvents() {
  const navigate = useNavigate();

  const [rows, setRows] = useState({});

  useEffect(() => {
    // Skip fetching if we read events recently (within the last 6 seconds)
    if (lastEventsRead && Date.now() - lastEventsRead < 6 * 1000) {
      return;
    }
    if (!canFetchEvents) {
      return;
    }
    canFetchEvents = false;

    fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`)
      .then(r => r.text())
      .then(text => {
        const lines = text.split('\r\n');

        for (let i = 0; i < lines.length; i++) {
          const idLen = lines[i].indexOf(',');
          const id = lines[i].slice(0, idLen);

          let rawData = lines[i].slice(idLen + 1);
          rawData = rawData.replaceAll('""', '"'); // get rid of double quotes
          rawData = rawData.slice(1, -1); // get rid of surrounding quotes
          if (!rawData) continue;
          
          const data = JSON.parse(rawData);
          if (data['thumbnailFileId']) {
            data['thumbnailFile'] = "https://drive.google.com/thumbnail?id=" + data['thumbnailFileId'];
            data['thumbnailFileLowres'] = "https://drive.google.com/thumbnail?id=" + data['thumbnailFileId'] + "&sz=w30";
            // data['thumbnailFile'] = "https://lh3.googleusercontent.com/d/" + data['thumbnailFileId'];
            // data['thumbnailFileLowres'] = "https://lh3.googleusercontent.com/d/" + data['thumbnailFileId'] + "=w30";

            const img = new Image();
            img.onload = () => {
              if (img.complete && img.src === data['thumbnailFileLowres']) {
                img.src = data['thumbnailFile'];
                img.onload = null; // remove the onload handler after preloading
              }
              // do nothing, just preloading the image
            };
            img.src = data['thumbnailFileLowres'];
          }
          
          setRows(prev => ({ ...prev, [id]: data }));
        }
        lastEventsRead = Date.now();
        canFetchEvents = true;
      })
      .catch(() => {
        canFetchEvents = true;
      });
  }, []);

  return [rows, setRows];
}

function App() {
  const topbarHeight = 4; // em

  const location = useLocation();
  const contentWrapperRef = useRef(null);
  useEffect(() => {
    contentWrapperRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  const [events, setEvents] = getEvents();

  return (
    <>
      <Topbar height={topbarHeight} />
      <div className="contentWrapper" ref={contentWrapperRef} style={{ '--topbar-height': `${topbarHeight}em` }}>
        <Routes>
          <Route path="/" element={<Home events={events} />} />
          <Route path="/sponsorships" element={<Sponsorships />} />
          <Route path="/executive-board" element={<ExecutiveBoard />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/events" element={<Events events={events} />} />
          <Route path="/admin" element={<Admin events={events} />} />
        </Routes>
        <div className="spacer"></div>
        <Footer />
      </div>
    </>
  )
}

export default App
