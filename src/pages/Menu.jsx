import React, { useEffect } from 'react';
import EditorialNav from '../components/EditorialNav';
import '../styles/components/Editorial.css';

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <EditorialNav />

            <div className="editorial-split-layout">
                {/* Left side fixed image */}
                <div className="editorial-left">
                    <img src="/assets/Food/318588163_1523867858082990_4788944527157422100_n.jpg" alt="Menu highlights" />
                </div>

                {/* Right side scrolling content */}
                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>Seasonal Menu</h1>
                        <p>A curated selection of our finest dishes crafted directly from the daily catching of the local markets, bridging traditional Japanese techniques with Nordic ingredients.</p>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">COURSE I</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Symphony of the Sea</h2>
                                <p className="editorial-row-desc">Dive into the essence of the ocean with our signature assortment of wild-caught sashimi. Accompanied by aged soy sauce and fresh wasabi from Shizuoka.</p>
                                <a href="/reservation" className="editorial-row-link">BOOK NOW</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/075c8e76050eeb3cf3c40f2157bcd389.jpg" alt="Course plating" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">COURSE II</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Elegance of Earth</h2>
                                <p className="editorial-row-desc">A delicate balance of organic root vegetables sourced from local terroir, lightly seared and topped with a truffle ponzu emulsion.</p>
                                <a href="/reservation" className="editorial-row-link">BOOK NOW</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/15c0143c39856737bcaf0e1588058b2e.jpg" alt="Earth dish" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">SIGNATURE</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Smoked Wagyu</h2>
                                <p className="editorial-row-desc">Experience our interactive presentation of A5 Wagyu, smoked table-side with sakura wood chips. A true sensory delight bridging kitchen and dining space.</p>
                                <a href="/reservation" className="editorial-row-link">BOOK NOW</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/637691860_18566605900058383_1696038193588162611_n.jpg" alt="Signature dish" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
