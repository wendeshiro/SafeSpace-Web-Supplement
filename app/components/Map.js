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

const createCustomIcon = (isSelected) => {
  const iconHtml = renderToStaticMarkup(
    <MapPin
      size={50}
      color={isSelected ? "#8449DF" : "#FFFFFF"}
      fill={isSelected ? "#8449DF" : "#8449DF"}
      strokeWidth={1.2}
    />
  );

  return L.divIcon({
    html: iconHtml,
    className: styles.customIcon,
    iconSize: [48, 48],
    iconAnchor: [24, 48], // Center bottom
    popupAnchor: [0, -48], // Above the icon
  });
};

export default function Map({ markers = [], onMarkerClick, selectedMarkerId }) {
  useEffect(() => {
    fixLeafletIcon();
  }, []);

  // Center on Burnaby, BC
  // const center = [49.2488, -123.0016];
  const center = [49.253, -123.029];
  const defaultIcon = createCustomIcon(false);
  const selectedIcon = createCustomIcon(true);

  return (
    <MapContainer
      center={center}
      zoom={14}
      style={{ height: "100%", width: "100%" }}
      zoomControl={false} // Hide zoom control for cleaner background look
    >
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />  */}
      {/* ↑ Normal theme ↑ */}
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      /> */}
      {/* ↑ Ultra-dark theme ↑ */}
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {/* ↑ Mid-dark theme ↑ */}
      {/* <TileLayer
        attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-GP, and the GIS User Community"
        url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      /> */}
      {/* ↑ Satellite theme ↑ */}
      {markers.map((marker) => (
        <Marker
          key={marker.id}
          position={marker.position}
          icon={marker.id === selectedMarkerId ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => {
              if (onMarkerClick) {
                onMarkerClick(marker.id);
              }
            },
          }}
        >
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
