import { useRef } from 'react';
import { useTextReveal } from '../hooks/useTextReveal';

const Philosophy = () => {
    const sectionRef = useRef(null);
    useTextReveal(sectionRef);

    return (
        <section className="philosophy" id="philosophy" ref={sectionRef}>
            <span className="calligraphy-side">伝統と革新</span>
            <div className="container">
                <div className="philosophy-layout">
                    <h2 className="philosophy-headline reveal-text">THE SEA DECIDES.</h2>
                    <div className="philosophy-content">
                        <p className="philosophy-text reveal-text">
                            UMIZOI was not conceived from a business plan. It was shaped by tide charts, morning
                            auctions, and the discipline of Edomae tradition.
                        </p>
                        <p className="philosophy-text reveal-text">
                            Each day begins before light — not in a kitchen, but at the docks. The sea decides what
                            will be served.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
