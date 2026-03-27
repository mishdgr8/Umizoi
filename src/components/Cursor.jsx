import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // Hide default cursor only when this component is active
        document.documentElement.classList.add('has-custom-cursor');

        const moveCursor = (e) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        const handleHover = () => cursor.classList.add('hover');
        const handleUnhover = () => cursor.classList.remove('hover');

        window.addEventListener('mousemove', moveCursor);

        // More robust interactive element detection for SPA
        const attachHoverListeners = () => {
            const interactiveElements = document.querySelectorAll('a, button, .course-panel');
            interactiveElements.forEach(el => {
                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleUnhover);
            });

            const hideCursorElements = document.querySelectorAll('.chef-image-wrap, .chef-hotspot');
            const handleHide = () => cursor.style.display = 'none';
            const handleShow = () => cursor.style.display = 'block';

            hideCursorElements.forEach(el => {
                el.addEventListener('mouseenter', handleHide);
                el.addEventListener('mouseleave', handleShow);
            });
        };

        // Initial attach
        attachHoverListeners();

        // Re-attach periodically for lazily loaded content
        const interval = setInterval(attachHoverListeners, 2000);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.documentElement.classList.remove('has-custom-cursor');
            clearInterval(interval);
        };
    }, []);

    return <div id="custom-cursor" ref={cursorRef}></div>;
};

export default Cursor;
