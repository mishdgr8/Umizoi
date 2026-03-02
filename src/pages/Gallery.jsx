import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ minHeight: '100vh', paddingTop: '15vh', paddingBottom: '10vh' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5vw' }}>
                <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', fontWeight: '300' }}>
                    Gallery & Stories
                </h1>
                <p style={{ fontSize: '1.1rem', opacity: 0.7, marginBottom: '5rem', maxWidth: '600px', lineHeight: 1.6 }}>
                    Explore the intricate details of our craft, from the freshest ingredients procured at dawn to the final elegant plating.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4vw' }}>
                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <img src="/assets/Food/f1_iMG.webp" alt="Food Prep" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>The Art of Sourcing</h3>
                        <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Every morning starts at the local fish market, interacting with trusted purveyors to select only the absolute best catch of the day...
                        </p>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <img src="/assets/Food/f2_iMG.webp" alt="Slicing" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>Preparation & Aging</h3>
                        <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: 1.6 }}>
                            True flavor takes time. We meticulously dry-age our select cuts for optimal umami extraction before serving.
                        </p>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '8px', marginBottom: '1.5rem' }}>
                            <img src="/assets/Food/f3_iMG.webp" alt="Pairing" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }} />
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', letterSpacing: '0.1em' }}>The Final Pairing</h3>
                        <p style={{ opacity: 0.6, fontSize: '0.95rem', lineHeight: 1.6 }}>
                            Elevating the dining experience through our carefully curated cellar selections of rare sake and fine wine.
                        </p>
                    </div>
                </div>

                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1rem', letterSpacing: '0.2rem', textTransform: 'uppercase', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '0.5rem', transition: 'border-color 0.3s' }}>
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
