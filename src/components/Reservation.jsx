import { useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';

const Reservation = () => {
    const sectionRef = useRef(null);
    useTextReveal(sectionRef);

    return (
        <section className="reservation" id="reservation" ref={sectionRef}>
            <div className="container centered">
                <div className="reservation-lines">
                    <h2 className="reservation-line reveal-text">RESERVATION ONLY.</h2>
                    <h3 className="reservation-line reveal-text">12 SEATS.</h3>
                    <p className="reservation-line reveal-text">OMAKASE BEGINS AT 7PM.</p>
                </div>
                <a href="#" className="request-btn">
                    <span className="btn-text">REQUEST A SEAT</span>
                    <div className="btn-line"></div>
                </a>
            </div>
        </section>
    );
};

export default Reservation;
