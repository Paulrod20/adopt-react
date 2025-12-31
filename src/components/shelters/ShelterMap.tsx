import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Shelter } from '../../types/shelter';
import 'leaflet/dist/leaflet.css';

// Create custom icon
const customIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface ShelterMapProps {
  shelters: Shelter[];
}

function ShelterMap({ shelters }: ShelterMapProps) {
  const defaultCenter: [number, number] = [35.7345, -81.3444];
  const defaultZoom = 10;

  return (
    <MapContainer
      center={defaultCenter}
      zoom={defaultZoom}
      style={{ height: '100%', width: '100%', borderRadius: '20px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {shelters.map((shelter) => (
        <Marker key={shelter.id} position={[shelter.latitude, shelter.longitude]} icon={customIcon}>
          <Popup>
            <strong>{shelter.name}</strong>
            <br />
            {shelter.address}, {shelter.city}
            <br />
            {shelter.phone}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default ShelterMap;