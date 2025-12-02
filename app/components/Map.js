"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { MapPin } from "lucide-react";
import styles from "./Map.module.css";

// Fix for default marker icons missing in Leaflet + Next.js
const fixLeafletIcon = () => {
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  });
};

const createCustomIcon = () => {
  const iconHtml = renderToStaticMarkup(
    <MapPin size={50} color="#8449DF" fill="#fefefeff" strokeWidth={1.8} />
  );

  return L.divIcon({
    html: iconHtml,
    className: styles.customIcon,
    iconSize: [48, 48],
    iconAnchor: [24, 48], // Center bottom
    popupAnchor: [0, -48], // Above the icon
  });
};

export default function Map({ markers = [] }) {
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  // Center on Burnaby, BC
  const center = [49.2488, -123.0016];
  const customIcon = createCustomIcon();

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false} // Hide zoom control for cleaner background look
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position} icon={customIcon}>
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
