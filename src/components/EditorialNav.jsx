import { Link } from 'react-router-dom';

const EditorialNav = () => {
    return (
        <nav className="editorial-nav">
            <div className="nav-links">
                <Link to="/menu">Menu</Link>
                <Link to="/origin">Origin</Link>
                <Link to="/history">Story</Link>
                <Link to="/reservation">Reservation</Link>
            </div>
            <Link to="/" className="brand">UMIZOI</Link>
            <div className="nav-contact">
                <span>EN / NO</span>
                <span style={{ marginLeft: '2rem' }}>(704) 555-0127</span>
            </div>
        </nav>
    );
};

export default EditorialNav;
