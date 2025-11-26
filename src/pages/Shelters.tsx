import Navbar from '../components/Navbar';
import '../styles/Shelters.css';

function Shelters() {
  return (
    <div className="shelters-page">
      <Navbar />
      
      <main className="shelters-content">
        <div className="map-container">
          {/* Map will go here */}
          <p>Map coming soon...</p>
        </div>
      </main>
    </div>
  );
}

export default Shelters;