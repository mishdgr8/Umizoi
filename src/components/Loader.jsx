import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
    const loaderRef = useRef(null);

    useEffect(() => {
        // Safety timeout to ensure site is eventually shown even if animations fail
        const safetyTimer = setTimeout(() => {
            console.warn('Loader animation timed out, forcing completion.');
            onComplete();
        }, 5000);

        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    clearTimeout(safetyTimer);
                    onComplete();
                }
            });

            tl.to('.loader-line', {
                width: '100px',
                duration: 1.5,
                opacity: 1,
                ease: 'expo.inOut'
            })
                .to(loaderRef.current, {
                    yPercent: -100,
                    duration: 1.2,
                    ease: 'expo.inOut',
                    delay: 0.5
                });
        }, loaderRef);

        return () => {
            clearTimeout(safetyTimer);
            ctx.revert();
        };
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
