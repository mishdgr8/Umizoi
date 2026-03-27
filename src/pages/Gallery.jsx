import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCloudinaryUrl } from '../utils/cloudinary';

const galleryItems = [
    {
        id: 1,
        img: "/assets/Scene/318437464_680876186963339_4782280235131555876_n.jpg",
        title: "The Main Hall",
        desc: "A spacious, warmly lit dining area designed for comfort and connection."
    },
    {
        id: 2,
        img: "/assets/Scene/581276579_18542423137058383_8395012481738148664_n.jpg",
        title: "Chef's Workspace",
        desc: "Where precision meets passion in every hand-crafted course."
    },
    {
        id: 3,
        img: "/assets/Scene/581943491_18542423101058383_6193922508734960023_n.jpg",
        title: "Evening Atmosphere",
        desc: "Ambient lighting and soft textures set the stage for an unforgettable night."
    },
    {
        id: 4,
        img: "/assets/Scene/587783447_18544975474058383_6044601999645993100_n.jpg",
        title: "Intimate Nooks",
        desc: "Perfect for quiet conversations and slow dining."
    },
    {
        id: 5,
        img: "/assets/Scene/639515555_18567338596058383_7965579837405223308_n.jpg",
        title: "Traditional Touches",
        desc: "Blending contemporary luxury with time-honored Japanese aesthetics."
    },
    {
        id: 6,
        img: "/assets/Scene/640262478_18566605774058383_2995011282770213052_n.jpg",
        title: "The Omakase Bar",
        desc: "An front-row seat to the culinary artistry of our master chefs."
    }
];

const Gallery = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ backgroundColor: '#0a0a0a', color: '#f6f7f2', minHeight: '100vh', paddingTop: '15vh', paddingBottom: '10vh' }}>
            <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 5vw' }}>
                <header style={{ marginBottom: '6rem' }}>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 7vw, 6rem)',
                        marginBottom: '1.5rem',
                        fontFamily: '"Playfair Display", "Canela", serif',
                        fontWeight: '300',
                        letterSpacing: '-0.02em',
                        fontStyle: 'italic'
                    }}>
                        Atmosphere & Space
                    </h1>
                    <p style={{
                        fontSize: '1.1rem',
                        opacity: 0.8,
                        maxWidth: '600px',
                        lineHeight: 1.8,
                        letterSpacing: '0.01em'
                    }}>
                        A cinematic journey through our physical space. Every corner at UmiZoi is meticulously curated to reflect our philosophy of harmony and minimalist luxury.
                    </p>
                </header>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '4rem 2rem'
                }}>
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-card" style={{ transition: 'transform 0.5s ease' }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '16/11',
                                overflow: 'hidden',
                                borderRadius: '4px',
                                marginBottom: '2rem',
                                backgroundColor: '#111',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <img src={getCloudinaryUrl(item.img)} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)' }} />
                            </div>
                            <h3 style={{
                                fontSize: '1.8rem',
                                marginBottom: '0.8rem',
                                fontFamily: '"Playfair Display", serif',
                                fontWeight: '400',
                                fontStyle: 'italic'
                            }}>{item.title}</h3>
                            <p style={{
                                opacity: 0.6,
                                fontSize: '1rem',
                                lineHeight: 1.6,
                                maxWidth: '350px'
                            }}>{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: '10rem', textAlign: 'center' }}>
                    <Link to="/" style={{
                        color: '#f6f7f2',
                        textDecoration: 'none',
                        fontSize: '0.8rem',
                        letterSpacing: '0.3rem',
                        textTransform: 'uppercase',
                        borderBottom: '1px solid rgba(255,255,255,0.2)',
                        paddingBottom: '0.8rem',
                        transition: 'opacity 0.3s'
                    }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '0.6'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                    >
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Gallery;

