import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useHeroAnimation } from '../hooks/useHeroAnimation';
import { getCloudinaryUrl } from '../utils/cloudinary';
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

/** Shared nav content — single source of truth */
const NavContent = ({ onToggleMenu, isMenuOpen }) => (
    <>
        <div className="logo">UMIZOI</div>
        <ul className={`hero-nav-list ${isMenuOpen ? 'mobile-show' : ''}`}>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/origin">Origin</Link></li>
            <li><Link to="/history">Story</Link></li>
            <li><Link to="/reservation">Reservation</Link></li>
        </ul>
        <button className="hamburger" onClick={onToggleMenu} aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
        </button>
    </>
);

const Hero = ({ onChefSelect, onOmakaseSelect, onCellarSelect }) => {
    const heroRef = useRef(null);
    const wrapperRef = useRef(null);
    const titleRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [audioEnabled, setAudioEnabled] = useState(true);
    const [touchedPoint, setTouchedPoint] = useState(null);
    const [isPinned, setIsPinned] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useHeroAnimation(heroRef, titleRef, wrapperRef);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Parallax mousemove
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!wrapperRef.current || isTransitioning) return;

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
            if (plates) plates.style.transform = `translate(${xPos * -foreMove}px, ${yPos * -foreMove}px)`;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [isTransitioning]);

    // Pin detection — fires when the hero section's pinned zone ends
    // The hero is pinned for 250vh total (100vh + 150% scroll distance).
    // We pin the nav once the hero's ScrollTrigger pin is released.
    useEffect(() => {
        const handleScroll = () => {
            if (!heroRef.current) return;
            // The hero section is pinned by ScrollTrigger. Its total scrollable
            // distance is ~250vh (100vh natural + 150% pin extension).
            // The nav should pin once we've scrolled past that entire zone.
            const heroEl = heroRef.current;
            const heroRect = heroEl.getBoundingClientRect();
            // When the hero's bottom edge reaches the top of the viewport,
            // the hero has been fully scrolled past — time to pin.
            setIsPinned(heroRect.bottom <= 0);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

            setTimeout(() => setIsTransitioning(false), 1000);
        }, 800);
    };

    // The pinned nav — portaled to document.body to escape all transforms
    const pinnedNav = isPinned
        ? createPortal(
            <nav className={`hero-nav hero-nav-portaled ${isMenuOpen ? 'menu-open' : ''}`} aria-label="Main navigation (pinned)">
                <NavContent onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            </nav>,
            document.body
        )
        : null;

    return (
        <>
            {/* Portal: pinned nav rendered at document.body level */}
            {pinnedNav}

            <section className={`hero ${isTransitioning ? 'nav-faded' : ''}`} id="hero" ref={heroRef}>
                <div className="hero-sticky">
                    <div className="hero-bg-video">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="video-bg"
                        >
                            <source
                                src={getCloudinaryUrl('/assets/Scene/AQMwXuM0r9XsAs6qKP2AtKE93Z7Avx1yGyOTfkWF4l_W8pf0x4U5wqcYSRU9gfG2ebfwmPP59vf65zwzC7WlKOzVkq95aH3t1GQfAU0.mp4', { type: 'video' })}
                                type="video/mp4"
                            />
                        </video>
                    </div>

                    <div className={`hero-image-wrapper ${isTransitioning ? 'hero-dimmed hero-clicked-zoom' : ''}`} ref={wrapperRef}
                        style={isTransitioning ? { zIndex: 30 } : {}}>
                        <img
                            src={getCloudinaryUrl('/assets/BG_iMG.webp')}
                            alt="Hero"
                            className={`hero-image-bg ${isTransitioning ? 'hero-image-dimmed' : ''}`}
                        />

                        {/* In-wrapper nav — visible while hero is in view, hidden when pinned */}
                        <nav className={`hero-nav ${isTransitioning ? 'nav-hidden' : ''} ${isPinned ? 'nav-hidden' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
                            <NavContent onToggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
                        </nav>

                        {/* Interactive Layer */}
                        <div className="hero-interactive-layer">
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
                        className="hero-audio-toggle desktop-only"
                        onClick={() => setAudioEnabled(!audioEnabled)}
                    >
                        {audioEnabled ? 'Audio: On' : 'Audio: Off'}
                    </button>
                </div>
            </section>
        </>
    );
};

export default Hero;
