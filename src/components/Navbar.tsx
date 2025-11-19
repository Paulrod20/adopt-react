import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

interface NavbarProps {
    transparent?: boolean;
}

function Navbar({ transparent = false }: NavbarProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        <nav className={transparent ? 'transparent' : ''}>
            <Link to="/">
                <img src="/assets/a.png" className="logo" alt="Adopt Logo" />
            </Link>

            <div className="hamburger" onClick={toggleMenu}>
                <span className={isMenuOpen ? 'rotate-45' : ''}></span>
                <span className={isMenuOpen ? 'opacity-0' : ''}></span>
                <span className={isMenuOpen ? 'rotate-negative-45' : ''}></span>
            </div>

            <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/shelters">SHELTERS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/donate">DONATE</Link></li>
                <li><Link to="/signin" id="nav-button">Log In</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;