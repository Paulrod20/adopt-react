import Navbar from '../components/Navbar';
import ShelterMap from '../components/shelters/ShelterMap';
import { mockShelters } from '../data/mockShelters';
import '../styles/Shelters.css';

function Shelters() {
  return (
    <div className="shelters-page">
      <Navbar />

      <main className="shelters-content">
        <div className="map-container">
          <ShelterMap shelters={mockShelters} />
        </div>
      </main>
    </div>
  );
}

export default Shelters;