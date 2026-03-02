import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => onComplete()
            });

            tl.to('.loader-line', {
                width: '100px',
                duration: 1.5,
                opacity: 1, // Ensure visibility if it was hidden
                ease: 'expo.inOut'
            })
                .to(loaderRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: 'expo.inOut',
                    delay: 0.5
                });
        }, loaderRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div id="loader" className="loader" ref={loaderRef}>
            <div className="loader-content">
                <div className="loader-line"></div>
            </div>
        </div>
    );
};

export default Loader;
