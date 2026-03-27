import { useState } from 'react';
import { Link } from 'react-router-dom';

const EditorialNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className={`editorial-nav ${isMenuOpen ? 'menu-open' : ''}`}>
            <div className={`nav-links ${isMenuOpen ? 'mobile-show' : ''}`}>
                <Link to="/menu" onClick={() => setIsMenuOpen(false)}>Menu</Link>
                <Link to="/origin" onClick={() => setIsMenuOpen(false)}>Origin</Link>
                <Link to="/history" onClick={() => setIsMenuOpen(false)}>Story</Link>
                <Link to="/reservation" onClick={() => setIsMenuOpen(false)}>Reservation</Link>
            </div>

            <Link to="/" className="brand" onClick={() => setIsMenuOpen(false)}>UMIZOI</Link>

            <div className="nav-contact">
                <span>EN / NO</span>
                <span style={{ marginLeft: '2rem' }}>(704) 555-0127</span>
            </div>

            <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
        </nav>
    );
};

export default EditorialNav;
