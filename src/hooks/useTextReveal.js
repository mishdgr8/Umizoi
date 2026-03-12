import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useTextReveal = (containerRef) => {
    useLayoutEffect(() => {
        if (!containerRef.current) return;

        let ctx = gsap.context(() => {
            const targets = containerRef.current.querySelectorAll('.reveal-text');

            targets.forEach(target => {
                const split = new SplitType(target, { types: 'chars,lines' });

                gsap.from(split.chars, {
                    yPercent: 100,
                    autoAlpha: 0,
                    duration: 1.2,
                    stagger: 0.015,
                    rotateX: -30,
                    transformOrigin: 'top center',
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: target,
                        start: 'top 90%',
                        toggleActions: 'play none none none'
                    }
                });
            });

            // Slide up containers
            const containers = containerRef.current.querySelectorAll('.philosophy-layout, .chef-details, .interior-content');
            containers.forEach(container => {
                gsap.from(container, {
                    y: 50,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: container,
                        start: 'top 95%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef]);
};
