import { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const useHorizontalScroll = (containerRef, wrapperRef) => {
    useLayoutEffect(() => {
        if (!containerRef.current || !wrapperRef.current) return;

        let ctx = gsap.context(() => {
            const wrapper = wrapperRef.current;
            const sections = gsap.utils.toArray('.course-panel');

            const scrollTween = gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => `+=${wrapper.offsetWidth}`,
                    invalidateOnRefresh: true,
                }
            });

            // Parallax and zoom effect on images
            sections.forEach(section => {
                const img = section.querySelector('.course-image');
                const info = section.querySelector('.course-info');
                const title = section.querySelector('.course-name');
                const split = new SplitType(title, { types: 'chars' });

                gsap.fromTo(img,
                    { scale: 1.2, clipPath: 'inset(10% 10% 10% 10%)' },
                    {
                        scale: 1,
                        clipPath: 'inset(0% 0% 0% 0%)',
                        ease: 'none',
                        scrollTrigger: {
                            trigger: section,
                            containerAnimation: scrollTween,
                            start: 'left center',
                            end: 'right center',
                            scrub: true
                        }
                    }
                );

                gsap.from(split.chars, {
                    y: 40,
                    opacity: 0,
                    stagger: 0.02,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: scrollTween,
                        start: 'left center',
                        toggleActions: 'play none none none'
                    }
                });

                gsap.from(info.querySelector('.course-desc'), {
                    y: 20,
                    opacity: 0,
                    delay: 0.3,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: section,
                        containerAnimation: scrollTween,
                        start: 'left center',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [containerRef, wrapperRef]);
};
