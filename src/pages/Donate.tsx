import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Donate.css';

function Donate() {
  const charities = [
    { name: 'Best Friends Animal Society', url: 'https://bestfriends.org/' },
    { name: 'ASPCA - American Society for the Prevention of Cruelty to Animals', url: 'https://www.aspca.org/' },
    { name: 'The Humane Society of the United States', url: 'https://www.humanesociety.org/' },
    { name: 'Animal Humane Society', url: 'https://www.animalhumanesociety.org/' },
    { name: 'Animal Legal Defense Fund', url: 'https://aldf.org/' },
    { name: 'Adopt - Your Best Friend Is A Click Away', url: '#' }
  ];

  return (
    <div className="donate-page">
      <Navbar />
      
      <section className="donate-hero">
        <div className="donate-hero-left">
          <h1>Giving Back Starts Here</h1>
        </div>
        <div className="donate-hero-right">
          <p>We've included trusted places where you can donate—either to Adopt itself or to an animal charity of your choice.</p>
          <p>Your generosity helps shelters, improves animal lives, and supports the continued development of this platform.</p>
          <p>Every dollar you give brings a pet one step closer to their forever home.</p>
          <p>If you want support what Adopt does, you can also donate to Adopt as well! We will continue to innovate to help more pets reach their forever home!</p>
        </div>
      </section>

      <section className="donation-list">
        <h2>Recommended Animal Charities</h2>
        <ul>
          {charities.map((charity, index) => (
            <li key={index}>
              <a href={charity.url} target="_blank" rel="noopener noreferrer">
                {charity.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default Donate;