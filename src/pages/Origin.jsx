import React, { useEffect } from 'react';
import EditorialNav from '../components/EditorialNav';
import '../styles/components/Editorial.css';

const Origin = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <EditorialNav />

            <div className="editorial-split-layout">
                {/* Left side fixed image */}
                <div className="editorial-left">
                    <img src="/assets/Scene/318437464_680876186963339_4782280235131555876_n.jpg" alt="Our Origin environment" />
                </div>

                {/* Right side scrolling content */}
                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>Our Origin</h1>
                        <p>The sourcing of our ingredients is treated with as much respect as the cooking itself. We journey across Japan and Scandinavia to find the perfect producers.</p>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE OCEAN</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Line-caught purity</h2>
                                <p className="editorial-row-desc">Every single fish is closely inspected at the markets before making its way to our kitchen. We prioritize line-caught, sustainable seafood from local fishermen.</p>
                                <a href="/menu" className="editorial-row-link">VIEW MENU</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/3bc1deb1d0b3b0ccba574f8cf973cd60.jpg" alt="Line caught sourcing" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE EARTH</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Biodynamic harvest</h2>
                                <p className="editorial-row-desc">Our root vegetables and herbs are predominantly sourced from a network of small, biodynamic farms that respect the soil and the seasons.</p>
                                <a href="/history" className="editorial-row-link">OUR STORY</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/32f4d7c205fc0854718b7a76e3a3e831.jpg" alt="Agriculture harvest" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE CRAFT</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Artisan producers</h2>
                                <p className="editorial-row-desc">From our soy sauce aged in wooden barrels to our hand-forged knives, we partner with artisans who have dedicated their lives to a single craft over generations.</p>
                                <a href="/history" className="editorial-row-link">READ MORE</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/8319a7ccb279aa13ed850da587b46076.jpg" alt="Artisan craftsmanship" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Origin;
