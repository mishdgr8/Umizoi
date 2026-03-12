import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useTextReveal } from '../hooks/useTextReveal';

const InteriorSection = ({ onChefSelect }) => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const bubbleRef = useRef(null);
    const hotspotRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useTextReveal(sectionRef);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from('.layer-1', {
                y: 100,
                scale: 1.1,
                opacity: 0,
                duration: 2,
                ease: 'expo.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                    scrub: 1
                }
            });

            gsap.to('.space-video', {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const moveBubble = (e) => {
        if (!isHovered || !bubbleRef.current || !hotspotRef.current) return;

        const rect = hotspotRef.current.getBoundingClientRect();
        // Calculate relative pos
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(bubbleRef.current, {
            x: x,
            y: y,
            duration: 0.8,
            ease: 'power3.out'
        });
    };

    return (
        <section className="space" id="space" ref={sectionRef}>
            <div className="space-bg">
                <video autoPlay muted loop playsInline className="space-video">
                    <source
                        src="/assets/Scene/AQMwXuM0r9XsAs6qKP2AtKE93Z7Avx1yGyOTfkWF4l_W8pf0x4U5wqcYSRU9gfG2ebfwmPP59vf65zwzC7WlKOzVkq95aH3t1GQfAU0.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
            <div className="parallax-wrap">
                <div className="parallax-img-container">
                    <div className="interior-image-wrapper layer-1" style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <img src="/assets/Interior/interior_main.webp" alt="Kitchen Prep" className="parallax-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />

                        {/* Chef Hotspot */}
                        <div
                            className="chef-hotspot"
                            ref={hotspotRef}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            onMouseMove={moveBubble}
                            onClick={onChefSelect}
                            style={{ cursor: 'none' }}
                        >
                            <div
                                className={`chef-bubble ${isHovered ? 'visible' : ''}`}
                                ref={bubbleRef}
                            >
                                <span>Meet the Chef</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-overlay-text" ref={textRef}>
                    <span className="calligraphy-float reveal-text">静寂</span>
                    <h2 className="space-title reveal-text">ARCHITECTURAL SILENCE</h2>
                </div>
            </div>
        </section>
    );
};

export default InteriorSection;
