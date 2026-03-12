import React, { useEffect } from 'react';
import EditorialNav from '../components/EditorialNav';
import '../styles/components/Editorial.css';

const History = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="editorial-page">
            <EditorialNav />

            <div className="editorial-split-layout">
                <div className="editorial-left">
                    <img src="/assets/Personnel/318543873_666951394918316_1128040539212648344_n.jpg" alt="Chef working" />
                </div>

                <div className="editorial-right">
                    <div className="editorial-right-header">
                        <h1>Our Story</h1>
                        <p>Born from a deep reverence for Japanese culinary traditions and a desire to present them in a contemporary space, Umizoi is the realization of a lifelong dream.</p>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE CHEF</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Mastery of cut</h2>
                                <p className="editorial-row-desc">Our chefs are united by a singular goal: an unforgettable dining experience. Years of rigorous training ensure every slice is infused with omotenashi.</p>
                                <a href="/reservation" className="editorial-row-link">JOIN US</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Personnel/608854380_18542390089031784_692730392710753357_n.jpg" alt="Chef detailing" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE TEAM</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Silent service</h2>
                                <p className="editorial-row-desc">Anticipating needs before they arise, our front-of-house team choreographs the dining room with invisible grace and precision.</p>
                                <a href="/reservation" className="editorial-row-link">JOIN US</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Personnel/61b34e07bd90857668a2b94d8efecc26.jpg" alt="Waitstaff" />
                        </div>
                    </div>

                    <div className="editorial-row">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE SPACE</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Cinematic warmth</h2>
                                <p className="editorial-row-desc">Designed to strip away distractions. Dark wood, textured stone, and dramatic lighting force all attention beautifully onto the plates.</p>
                                <a href="/gallery" className="editorial-row-link">VIEW GALLERY</a>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Scene/581276579_18542423137058383_8395012481738148664_n.jpg" alt="Restaurant Interior" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default History;
