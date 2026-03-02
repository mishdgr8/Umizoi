import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import '../styles/components/Hero.css';

const playWoodTap = () => {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);

        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.1);
    } catch (e) { }
};

const Hero = ({ onChefSelect, onOmakaseSelect, onCellarSelect }) => {
    const heroRef = useRef(null);
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [touchedPoint, setTouchedPoint] = useState(null);

    useHeroAnimation(heroRef, titleRef, wrapperRef);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!wrapperRef.current || isTransitioning) return;

            // disable parallax for mobile
            if (window.matchMedia('(max-width: 768px)').matches || window.matchMedia('(pointer: coarse)').matches) {
                return;
            }

            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const xPos = (clientX / innerWidth - 0.5) * 2;
            const yPos = (clientY / innerHeight - 0.5) * 2;

            const bgMove = 3;
            const midMove = 4.5;
            const foreMove = 6;

            const img = wrapperRef.current.querySelector('.hero-image-bg');
            if (img) img.style.transform = `translate(${xPos * -bgMove}px, ${yPos * -bgMove}px) scale(1.04)`;

            const cabinet = wrapperRef.current.querySelector('.hotspot-cabinet');
            if (cabinet) cabinet.style.transform = `translate(${xPos * -bgMove}px, ${yPos * -bgMove}px)`;

            const chef = wrapperRef.current.querySelector('.hotspot-chef');
            if (chef) chef.style.transform = `translate(${xPos * -midMove}px, ${yPos * -midMove}px)`;

            const plates = wrapperRef.current.querySelector('.hotspot-plates');
            if (plates) plates.style.transform = `translate(${xPos * -foreMove}px, ${yPos * -foreMove}px) rotate(-15deg)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isTransitioning]);

    const handleInteraction = (type) => {
        if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(max-width: 768px)').matches) {
            if (touchedPoint !== type) {
                setTouchedPoint(type);
                if (audioEnabled) playWoodTap();
                return;
            }
        }

        if (audioEnabled) playWoodTap();
        setIsTransitioning(true);
        setTouchedPoint(null);

        setTimeout(() => {
            if (type === 'chef' && onChefSelect) onChefSelect();
            if (type === 'omakase' && onOmakaseSelect) onOmakaseSelect();
            if (type === 'cellar' && onCellarSelect) onCellarSelect();

            // Reset transition for crossfade sequence
            setTimeout(() => setIsTransitioning(false), 1000);
        }, 800);
    };

    return (
        <section className={`hero ${isTransitioning ? 'nav-faded' : ''}`} id="hero" ref={heroRef}>
            <div className="hero-sticky">
                <div className="hero-bg-video">
                    <video autoPlay muted loop playsInline>
                        <source
                            src="/assets/Scene/AQOZrp6NRBAZ6H7S7HSEOuGS72z65jMiFLs3jkat7A-KxrY6L5ENMVTCFRaDmdwj5gVPj90GFbe2UHhIJ5Ka40rb0SiI7o-QWRDVJ-c.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>

                <div className={`hero-image-wrapper ${isTransitioning ? 'hero-dimmed hero-clicked-zoom' : ''}`} ref={wrapperRef}
                    style={isTransitioning ? { zIndex: 30 } : {}}>
                    <img
                        src="/assets/BG_iMG.webp"
                        alt="Hero"
                        className={`hero-image-bg ${isTransitioning ? 'hero-image-dimmed' : ''}`}
                    />

                    <nav className={`hero-nav ${isTransitioning ? 'nav-hidden' : ''}`}>
                        <div className="logo">UMIZOI</div>
                        <ul className="hero-nav-list">
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/origin">Origin</Link></li>
                            <li><Link to="/history">Story</Link></li>
                            <li><Link to="/reservation">Reservation</Link></li>
                        </ul>
                    </nav>

                    {/* Interactive Layer */}
                    <div className="hero-interactive-layer">
                        {/* Chef Hotspot */}
                        <div
                            className={`hero-hotspot hotspot-chef ${touchedPoint === 'chef' ? 'active' : ''}`}
                            onClick={() => handleInteraction('chef')}
                            onMouseEnter={() => audioEnabled && playWoodTap()}
                        >
                            <div className="hero-bubble">
                                <span>Meet the Chef</span>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>

                        {/* Cabinet Hotspot */}
                        <div
                            className={`hero-hotspot hotspot-cabinet ${touchedPoint === 'cellar' ? 'active' : ''}`}
                            onClick={() => handleInteraction('cellar')}
                            onMouseEnter={() => audioEnabled && playWoodTap()}
                        >
                            <div className="hero-bubble">
                                <span>Explore Cellar</span>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>

                        {/* Plates Hotspot */}
                        <div
                            className={`hero-hotspot hotspot-plates ${touchedPoint === 'omakase' ? 'active' : ''}`}
                            onClick={() => handleInteraction('omakase')}
                            onMouseEnter={() => audioEnabled && playWoodTap()}
                        >
                            <div className="hero-bubble">
                                <span>View Omakase</span>
                                <div className="bubble-arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <button
                    className="hero-audio-toggle"
                    onClick={() => setAudioEnabled(!audioEnabled)}
                >
                    {audioEnabled ? 'Audio: On' : 'Audio: Off'}
                </button>
            </div>
        </section>
    );
};

export default Hero;
