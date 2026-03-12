import React, { useEffect } from 'react';
import EditorialNav from '../components/EditorialNav';
import '../styles/components/Editorial.css';

const ReservationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <EditorialNav />

            <div className="editorial-split-layout">
                {/* Left side fixed image */}
                <div className="editorial-left">
                    <img src="/assets/Scene/587292241_18544975495058383_4937885161994947411_n.jpg" alt="Hall interior" />
                </div>

                {/* Right side form and scrolling content */}
                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>Hall interior</h1>
                        <p>Our designer took into account our wishes and brought to life a design reflecting our concept and philosophy. We have created a unique interior with bright accents. You will feel really comfortable here.</p>
                        <a href="/gallery" className="editorial-row-link" style={{ marginTop: '2rem' }}>GALLERY</a>
                    </div>

                    <div className="editorial-form-container">
                        <form className="booking-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" />
                                </div>
                                <div className="form-group">
                                    <label>Guests</label>
                                    <select>
                                        <option>2 Guests</option>
                                        <option>3 Guests</option>
                                        <option>4 Guests</option>
                                        <option>5+ Guests</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Time</label>
                                <select>
                                    <option>18:00</option>
                                    <option>19:00</option>
                                    <option>20:00</option>
                                    <option>21:00</option>
                                </select>
                            </div>

                            <button type="submit" className="submit-btn" onClick={() => alert('Reservation requested!')}>
                                Book Now
                            </button>
                        </form>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">PRIVATE</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Omakase Room</h2>
                                <p className="editorial-row-desc">For an exclusive experience, our private Omakase room seats up to 8 guests with a dedicated chef preparing courses right before your eyes.</p>
                                <a href="#" className="editorial-row-link">ENQUIRE</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Scene/638871003_18566605867058383_3717780193122053574_n.jpg" alt="Private room" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationPage;
