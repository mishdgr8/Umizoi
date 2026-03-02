import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import '../styles/components/Editorial.css';

const Home = ({ scrollToSection, setIsChefDetailOpen }) => {
    return (
        <div className="home-page-transition" style={{ backgroundColor: '#eef2e6' }}>
            <Hero
                onChefSelect={() => setIsChefDetailOpen(true)}
                onOmakaseSelect={() => scrollToSection('#omakase')}
                onCellarSelect={() => scrollToSection('#space')}
            />

            <div className="editorial-split-layout">
                {/* Left side fixed image */}
                <div className="editorial-left">
                    <img src="/assets/Scene/581276579_18542423137058383_8395012481738148664_n.jpg" alt="Umizoi Interior" />
                </div>

                {/* Right side scrolling content mimicking the underlying subcomponents */}
                <div className="editorial-right">
                    <div className="editorial-right-header" id="philosophy">
                        <h1 style={{ fontSize: '3rem' }}>The sea decides.</h1>
                        <p>UMIZOI was not conceived from a business plan. It was shaped by tide charts, morning auctions, and the discipline of Edomae tradition. Each day begins before light — not in a kitchen, but at the docks.</p>
                    </div>

                    <div className="editorial-row" id="omakase">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">OMAKASE</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Hokkaido Uni</h2>
                                <p className="editorial-row-desc">Layered like silk, harvested from the cold northern depths. Aged for seven days in soy infusion, unlocking deep umami notes.</p>
                                <Link to="/menu" className="editorial-row-link">VIEW MENU</Link>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Food/uni.webp" alt="Hokkaido Uni" />
                        </div>
                    </div>

                    <div className="editorial-row" id="chef">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE CRAFT</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Mastery of Cut</h2>
                                <p className="editorial-row-desc">Precision is not intensity. It is restraint. Twenty-three years behind the counter, shaped by the silence of the docks. "Remove everything unnecessary."</p>
                                <button
                                    onClick={() => setIsChefDetailOpen(true)}
                                    className="editorial-row-link"
                                    style={{ background: 'none', border: 'none', borderBottom: '1px solid #637758', padding: '0 0 4px 0', cursor: 'pointer', fontFamily: 'inherit' }}
                                >
                                    MEET THE CHEF
                                </button>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Personnel/chef.webp" alt="Head Chef" />
                        </div>
                    </div>

                    <div className="editorial-row" id="space">
                        <div className="editorial-row-content">
                            <div className="editorial-row-date">THE SPACE</div>
                            <div className="editorial-row-text">
                                <h2 className="editorial-row-title">Architectural Silence</h2>
                                <p className="editorial-row-desc">Designed to strip away distractions. Dark wood, textured stone, and dramatic lighting force all attention beautifully onto the plates.</p>
                                <Link to="/gallery" className="editorial-row-link">VIEW GALLERY</Link>
                            </div>
                        </div>
                        <div className="editorial-row-image">
                            <img src="/assets/Interior/interior_main.webp" alt="Restaurant Interior" />
                        </div>
                    </div>

                    <div className="editorial-form-container" style={{ paddingTop: '4rem', paddingBottom: '6rem' }} id="reservation">
                        <div style={{ marginBottom: '2rem' }}>
                            <h2 style={{ fontFamily: '"Playfair Display", "Canela", serif', fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 500, color: '#111' }}>Reservation Only.</h2>
                            <p style={{ fontSize: '0.95rem', opacity: 0.8, color: '#333' }}>12 SEATS. OMAKASE BEGINS AT 7PM.</p>
                        </div>
                        <Link to="/reservation" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
                            REQUEST A SEAT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
