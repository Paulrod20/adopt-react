import '../styles/BioCard.css';

interface BioCardProps {
  image: string;
  name: string;
  paragraphs: string[];
}

function BioCard({ image, name, paragraphs }: BioCardProps) {
  return (
    <div className="bio-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default BioCard;