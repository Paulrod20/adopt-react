import type { Shelter } from "../../types/shelter";
import '../../styles/ShelterCard.css';

interface ShelterCardProps { 
    shelter: Shelter;
}

function ShelterCard({ shelter }: ShelterCardProps) { 
    return (
        <div className="shelter-card">
            <h3>{shelter.name}</h3>
            <p>{shelter.address}, {shelter.city}</p>
            <p>{shelter.animalsAvailable} animals available</p>
            <p>{shelter.hours}</p>
        </div>
    );
}

export default ShelterCard
