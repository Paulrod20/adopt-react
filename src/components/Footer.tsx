import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer>
        <div className="footer-content">
            <p className="tagline">Connecting families with shelter animals</p>

            <div className="footer-links">
                <Link to="/privacy">Privacy Policy</Link>
                <span>•</span>
                <Link to="/terms">Terms of Service</Link>
            </div>

            <p className="copyright">&copy; 2025 Adopt. All rights reserved.</p>
        </div>
    </footer>
  );
}

export default Footer;