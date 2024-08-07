import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './MapComponent.css';

const MapComponent = () => {
  const center = {
    lat: 4.532954318787974,
    lng: -74.08761628989123
  };

  return (
    <div className="map-container">
      <div className="map">
        <LoadScript
          googleMapsApiKey="AIzaSyA7_1GfyU2A42nO1_m-86gISvVraAwYQGo" // Reemplaza con tu clave de API
        >
          <GoogleMap
            mapContainerStyle={{ height: '100%' }}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="text-container">
        <h2 className="main-text">Gimnasio David & Goliat</h2>
        <p>Equipado con lo último en maquinaria para lograr tu objetivo y entrenadores de calidad</p>
        <div className="icon-text">
          <i className="fas fa-map-marker-alt icon"></i>
          <p className="text">Tv. 14c Este #5489, Bogota</p>
        </div>
        <div className="icon-text">
          <i className="far fa-clock icon"></i>
          <div className="text">
            <p>Lunes a Viernes: 06:00 AM - 04:00 PM</p>
            <p>Sábados: 08:00 AM - 04:00 PM</p>
            <p>Domingos: 06:00 AM - 12:00 PM</p>
          </div>
        </div>
        <div className="icon-text">
          <i className="fas fa-phone icon"></i>
          <p className="text">+57 (601) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
