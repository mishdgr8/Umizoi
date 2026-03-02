import { useEffect, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = (heroRef, titleRef, wrapperRef) => {
    useLayoutEffect(() => {
        if (!heroRef.current || !wrapperRef.current) return;

        let ctx = gsap.context(() => {
            const split = titleRef.current ? new SplitType(titleRef.current, { types: 'chars' }) : null;

            // Initial State
            if (split) gsap.set(split.chars, { opacity: 0, y: 50 });
            gsap.set('.hero-nav', { opacity: 0, y: -20 });
            gsap.set(wrapperRef.current, {
                width: '75vw',
                height: '80vh'
            });

            // 1. Entrance Animation (Nav/Title)
            const entranceTl = gsap.timeline({ delay: 0.5 });

            entranceTl.to('.hero-nav', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' });

            if (split) {
                entranceTl.to(split.chars, {
                    y: 0,
                    opacity: 1,
                    stagger: 0.02,
                    duration: 1,
                    ease: 'expo.out'
                }, '-=0.5');
            }

            // 2. Scroll Zoom Animation (Pinned)
            const zoomTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: 'top top',
                    end: '+=150%', // How long it stays pinned/zooming
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            zoomTl.to(wrapperRef.current, {
                width: '100vw',
                height: '100vh',
                ease: 'power2.inOut'
            })
                .to('.hero-bg-video', {
                    opacity: 0,
                    ease: 'none'
                }, 0);

            if (titleRef.current) {
                zoomTl.to(titleRef.current, {
                    scale: 1.2,
                    ease: 'power2.inOut'
                }, 0);
            }

        }, heroRef);

        return () => ctx.revert();
    }, [heroRef, titleRef, wrapperRef]);
};
