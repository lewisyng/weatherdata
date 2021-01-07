import React from 'react';
import './GeoMap.css';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function MyMap() {
  
}

function GeoMap(props) {
  const { lon, lat } = props;
  return (
    <MapContainer className="mapContainer" center={[lat, lon]} zoom={14} zoomControl={false} scrollWheelZoom={false}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <ZoomControl />
    </MapContainer>
  );
}

export default GeoMap;
