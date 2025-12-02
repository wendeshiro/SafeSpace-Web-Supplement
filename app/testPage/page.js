"use client";

import dynamic from "next/dynamic";
import styles from "./test.module.css";
import Button from "../components/Button";
import Sort from "../components/Sort";
import ReportCard from "../components/ReportCard";
import LocationBar from "../components/LocationBar";
import reports from "../data/report.json";
import ReportDetails from "../components/ReportDetails";
import Dialog from "../components/Dialog";
import SummaryResult from "../components/SummaryResult";

// Dynamically import Map component with no SSR
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
  loading: () => <div style={{ width: "100%", height: "100%", background: "#e5e7eb" }} />,
});

export default function testPage() {
  const mapMarkers = [
    { id: 1, position: [49.2488, -123.0016], title: "Incident 1" },
    { id: 2, position: [49.252, -123.01], title: "Incident 2" },
    { id: 3, position: [49.245, -122.995], title: "Incident 3" },
    { id: 4, position: [49.255, -123.005], title: "Incident 4" },
  ];

  return (
    <main className={styles.main}>
      {/* Map Area */}
      <div className={styles.mapArea}>
        <Map markers={mapMarkers} />
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        {/* <ReportDetails /> */}
        {/* <Dialog /> */}
        <SummaryResult />
      </div>

      {/* Location Bar */}
      <div className={styles.locationBarWrapper}>
        <LocationBar location="3700 Willingdon Avenue, Burnaby" />
      </div>
      <div className={styles.logoWrapper}>
        <img src="/logo.svg" alt="Logo" className={styles.logo} />
        <p>SafeSpace</p>
      </div>
      <div className={styles.topBarBackground}></div>
    </main>
  );
}
