import { useEffect, useState } from "react";

const SHEET_ID = "1bQ58PvsrVoRkIQYx-vydcq_riJ43vr7oW3hSxQ3JuIs";

let lastEventsRead = null;
let canFetchEvents = true;

export function useEvents() {
  const [rows, setRows] = useState({});

  useEffect(() => {
    // Skip fetching if events were loaded recently.
    if (lastEventsRead && Date.now() - lastEventsRead < 6 * 1000) {
      return;
    }
    if (!canFetchEvents) {
      return;
    }
    canFetchEvents = false;

    fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/export?format=csv`)
      .then((r) => r.text())
      .then((text) => {
        const nextRows = {};
        const lines = text.split("\r\n");

        for (let i = 0; i < lines.length; i++) {
          const idLen = lines[i].indexOf(",");
          const id = lines[i].slice(0, idLen);

          let rawData = lines[i].slice(idLen + 1);
          rawData = rawData.replaceAll('""', '"');
          rawData = rawData.slice(1, -1);
          if (!rawData) continue;

          const data = JSON.parse(rawData);
          if (data.thumbnailFileId) {
            data.thumbnailFile = `https://drive.google.com/thumbnail?id=${data.thumbnailFileId}`;
            data.thumbnailFileLowres = `https://drive.google.com/thumbnail?id=${data.thumbnailFileId}&sz=w30`;

            const img = new Image();
            img.onload = () => {
              if (img.complete && img.src === data.thumbnailFileLowres) {
                img.src = data.thumbnailFile;
                img.onload = null;
              }
            };
            img.src = data.thumbnailFileLowres;
          }

          nextRows[id] = data;
        }

        setRows(nextRows);
        lastEventsRead = Date.now();
        canFetchEvents = true;
      })
      .catch(() => {
        canFetchEvents = true;
      });
  }, []);

  return rows;
}
