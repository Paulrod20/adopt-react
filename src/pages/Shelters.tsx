import Navbar from '../components/Navbar';
import ShelterMap from '../components/shelters/ShelterMap';
import ShelterCard from '../components/shelters/ShelterCard';
import { mockShelters } from '../data/mockShelters';
import '../styles/Shelters.css';

function Shelters() {
  return (
    <div className="shelters-page">
      <Navbar />

      <main>
        <section className="map-section">
          <ShelterMap shelters={mockShelters} />
        </section>

        <section className="shelters-list">
          {mockShelters.map((shelter) => (
            <ShelterCard key={shelter.id} shelter={shelter} />
          ))}
        </section>

      </main>
    </div>
  );
}

export default Shelters;