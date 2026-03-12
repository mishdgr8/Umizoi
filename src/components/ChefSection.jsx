import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useTextReveal } from '../hooks/useTextReveal';

const ChefSection = ({ onChefSelect }) => {
    const sectionRef = useRef(null);
    const bubbleRef = useRef(null);
    const wrapRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useTextReveal(sectionRef);

    const moveBubble = (e) => {
        if (!isHovered || !bubbleRef.current || !wrapRef.current) return;

        // Get relative position within the wrap
        const rect = wrapRef.current.getBoundingClientRect();
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
        <section className="chef" id="chef" ref={sectionRef}>
            <div className="container grid-no-margin">
                <div
                    className="chef-image-wrap"
                    ref={wrapRef}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onMouseMove={moveBubble}
                    onClick={onChefSelect}
                    style={{ cursor: 'none' }}
                >
                    <img src="/assets/Personnel/chef.webp" alt="Head Chef" className="chef-image" />
                    <div
                        className={`chef-bubble ${isHovered ? 'visible' : ''}`}
                        ref={bubbleRef}
                    >
                        <span>Meet the Chef</span>
                    </div>
                </div>
                <div className="chef-details">
                    <h2 className="chef-title reveal-text">THE CRAFT</h2>
                    <p className="chef-text reveal-text">"Remove everything unnecessary."</p>
                    <p className="chef-bio reveal-text">Precision is not intensity. It is restraint. Twenty-three years behind the counter, shaped by the silence of the docks.</p>
                </div>
            </div>
        </section>
    );
};

export default ChefSection;
