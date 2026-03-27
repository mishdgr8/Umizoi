import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { getCloudinaryUrl } from '../utils/cloudinary';

const MeetingChef = ({ isOpen, onClose }) => {
    const pageRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.to(pageRef.current, {
                top: 0,
                duration: 1.2,
                ease: 'expo.inOut'
            });

            gsap.fromTo('.chef-story-text p', {
                y: 30,
                opacity: 0
            }, {
                y: 0,
                opacity: 0.8,
                duration: 1.5,
                stagger: 0.2,
                delay: 1,
                ease: 'power3.out'
            });
        } else {
            gsap.to(pageRef.current, {
                top: '100%',
                duration: 1,
                ease: 'expo.inOut'
            });
        }
    }, [isOpen]);

    return (
        <div className="chef-page-overlay" ref={pageRef} style={{ top: '100%' }}>
            <button className="close-chef-page" onClick={onClose}>CLOSE</button>
            <div className="chef-page-content">
                <div className="chef-portrait-large">
                    <img src={getCloudinaryUrl('/assets/Personnel/318543873_666951394918316_1128040539212648344_n.jpg')} alt="Chef Shigeru" />
                </div>
                <div className="chef-story">
                    <span className="chef-subtitle">BEYOND THE KNIFE</span>
                    <h2 className="chef-name">SHIGERU UMIZOU</h2>
                    <div className="chef-story-text">
                        <p>Born where the Toyosu current meets the open sea, Shigeru has spent four decades understanding the ocean's silence.</p>
                        <p>His philosophy is simple: The fish already knows how it wants to be served. The chef is merely the medium for its final expression.</p>
                        <p>At Umizoi, there is no performance. Only the raw dialogue between the knife and the tide.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingChef;
