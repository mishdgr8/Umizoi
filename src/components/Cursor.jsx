import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

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

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleUnhover);
            });
            hideCursorElements.forEach(el => {
                el.removeEventListener('mouseenter', handleHide);
                el.removeEventListener('mouseleave', handleShow);
            });
        };
    }, []);

    return <div id="custom-cursor" ref={cursorRef}></div>;
};

export default Cursor;
