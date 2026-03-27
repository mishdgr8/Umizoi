import React, { useEffect } from 'react';
import { getCloudinaryUrl } from '../utils/cloudinary';
import '../styles/components/Editorial.css';

const ReservationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <div className="editorial-split-layout">
                {/* Left side fixed image */}
                <div className="editorial-left">
                    <div className="editorial-left-gallery">
                        {[
                            { src: '/assets/Scene/640914651_18567338425058383_4546137657352314648_n.jpg', alt: "Dining Room" },
                            { src: '/assets/Scene/589735771_18544975486058383_3211966786323243175_n.jpg', alt: "Interior Detail" },
                            { src: '/assets/Scene/590805520_18544975456058383_43372525812490079_n.jpg', alt: "Service Area" },
                            { src: '/assets/Scene/639544079_18567338626058383_971906583159803541_n.jpg', alt: "Ambience" },
                        ].map((img, i) => (
                            <motion.div
                                key={i}
                                className="gallery-img-wrapper"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            >
                                <img src={getCloudinaryUrl(img.src)} alt={img.alt} />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right side form and scrolling content */}
                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>Secure Your Journey</h1>
                        <p>Experience the art of Omakase in our meticulously designed space. Every element is crafted to enhance your culinary exploration.</p>
                        <a href="/gallery" className="editorial-row-link" style={{ marginTop: '2rem' }}>VIEW GALLERY</a>
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
                                <h2 className="editorial-row-title">The Inner Sanctum</h2>
                                <p className="editorial-row-desc">Our private dining quarters offer absolute discretion and a personalized menu curated for the most discerning palates.</p>
                                <a href="#" className="editorial-row-link">ENQUIRE</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src={getCloudinaryUrl('/assets/Scene/589735771_18544975486058383_3211966786323243175_n.jpg')} alt="Interior Detail" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReservationPage;

