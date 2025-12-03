"use client";

import { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import Button from "./components/Button";
import Sort from "./components/Sort";
import ReportCard from "./components/ReportCard";
import LocationBar from "./components/LocationBar";
import reports from "./data/report.json";
import Dialog from "./components/Dialog";
import ReportDetails from "./components/ReportDetails";


// Dynamically import Map component with no SSR
const Map = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", background: "#e5e7eb" }} />,
});

export default function PostedReports() {
  const [selectedReport, setSelectedReport] = useState(null);
  const [highlightedReportId, setHighlightedReportId] = useState(null);
  const [sortOrder, setSortOrder] = useState("Newest");
  const [showDialog, setShowDialog] = useState(false);
  const reportRefs = useRef({});

  const mapMarkers = [
    { id: 1, position: [49.2488, -123.0016], title: "Harassment" },
    { id: 2, position: [49.252, -123.01], title: "Discrimination, Sexism" },
    { id: 3, position: [49.245, -122.995], title: "Bullying, Discrimination" },
    { id: 4, position: [49.255, -123.005], title: "Intimidation, Aggression" },
  ];

  const handleMarkerClick = (id) => {
    // If we are in details view, go back to list view first
    if (selectedReport) {
      setSelectedReport(null);
      // Wait for render to switch back to list before scrolling
      setTimeout(() => scrollToReport(id), 100);
    } else {
      scrollToReport(id);
    }
  };

  const scrollToReport = (id) => {
    setHighlightedReportId(id);

    // Remove highlight after animation (3s total for 3 flashes)
    setTimeout(() => {
      setHighlightedReportId(null);
    }, 3000);

    const element = reportRefs.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const toggleSort = () => {
    setSortOrder((prev) => (prev === "Newest" ? "Oldest" : "Newest"));
  };

  const sortedReports = [...reports].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "Newest" ? dateB - dateA : dateA - dateB;
  });

  return (
    <main className={styles.main}>
      {/* Map Area */}
      <div className={styles.mapArea}>
        <Map
          markers={mapMarkers}
          onMarkerClick={handleMarkerClick}
          selectedMarkerId={selectedReport?.id || highlightedReportId}
        />
      </div>

      {showDialog && <Dialog onClose={() => setShowDialog(false)} />}

      {/* Sidebar */}
      <div className={styles.sidebar}>
        {selectedReport ? (
          <ReportDetails report={selectedReport} onBack={() => setSelectedReport(null)} />
        ) : (
          <>
            <h1 className={styles.title}>Posted Reports</h1>

            <Button variant="tertiary" onClick={() => setShowDialog(true)}>
              Summarize Posts
            </Button>

            <Sort label="Sort by:" value={sortOrder} className={styles.sort} onClick={toggleSort} />

            <div className={styles.reportList}>
              {sortedReports.map((report) => (
                <ReportCard
                  key={report.id}
                  ref={(el) => (reportRefs.current[report.id] = el)}
                  tags={report.tags}
                  title={report.title}
                  location={report.location}
                  date={report.date}
                  timestamp={report.timestamp}
                  excerpt={report.summary}
                  onDetailsPress={() => setSelectedReport(report)}
                  isHighlighted={highlightedReportId === report.id}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Location Bar */}
      <div className={styles.locationBarWrapper}>
        <LocationBar location="3700 Willingdon Avenue, Burnaby" />
      </div>
      <div className={styles.logoWrapper}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
        <p>SafeSpace</p>
      </div>
    </main>
  );
}
