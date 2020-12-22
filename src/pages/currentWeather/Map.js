import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map(props) {
  const { lon, lat } = props;
  return (
    <MapContainer center={[lat, lon]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
    </MapContainer>
  );
}

export default Map;
