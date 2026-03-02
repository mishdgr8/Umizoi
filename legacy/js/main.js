// GSAP and ScrollTrigger initialization
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis
let lenis;
const initLenis = () => {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
};

// Custom Cursor Logic
const initCursor = () => {
    const cursor = document.querySelector("#custom-cursor");

    window.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
        });
    });

    // Hover effect on interactive elements
    const interactives = document.querySelectorAll("a, button, .course-panel");
    interactives.forEach(el => {
        el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
        el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
    });
};

// Text Splitting Helper (Robust)
const splitText = (selector, type = "chars") => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        const text = el.innerText;
        el.innerHTML = "";

        if (type === "chars") {
            const chars = text.split("");
            chars.forEach(char => {
                const span = document.createElement("span");
                span.innerText = char === " " ? "\u00A0" : char;
                span.style.display = "inline-block";
                span.classList.add("char");
                el.appendChild(span);
            });
        } else if (type === "lines") {
            const words = text.split(" ");
            let line = document.createElement("div");
            line.classList.add("line-wrap");
            let inner = document.createElement("div");
            inner.classList.add("line-inner");
            line.appendChild(inner);
            el.appendChild(line);

            words.forEach((word, i) => {
                inner.innerText += word + " ";
                // This is a simplified line splitter, for real award-matching we'd use a more complex one
                // based on offsetTop, but for static layouts this works well.
            });
        }
    });
};

// Loading Sequence
const initLoader = () => {
    splitText(".en-logo", "chars");
    const enChars = document.querySelectorAll(".en-logo .char");

    const tl = gsap.timeline({
        onComplete: () => {
            initHeroAnimations();
            initPhilosophyAnimations();
            initOmakaseScroll();
            initChefInteraction();
            initSpaceParallax();
            initReservationReveal();

            // Force play videos after loader
            document.querySelectorAll("video").forEach(v => v.play().catch(e => console.log("Autoplay blocked")));
        }
    });

    tl.to(".jp-logo", { opacity: 1, y: -20, filter: "blur(0px)", duration: 1.5, ease: "power3.out" })
        .from(enChars, { opacity: 0, y: 10, stagger: 0.05, duration: 1, ease: "power2.out" }, "-=0.8")
        .to(".loader-line", { width: "100px", duration: 1, ease: "power3.inOut" }, "-=0.5")
        .to("#loader", {
            opacity: 0, duration: 1, delay: 0.5, onComplete: () => {
                document.querySelector("#loader").style.display = "none";
            }
        });

    return tl;
};

// Main Animations
const initHeroAnimations = () => {
    splitText(".hero-title", "chars");
    const titleChars = document.querySelectorAll(".hero-title .char");

    // Initial Reveal
    gsap.from(titleChars, {
        y: 100,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
        delay: 0.2
    });

    gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 20,
        duration: 2,
        delay: 1
    });

    // Scroll Compression
    gsap.to(".hero", {
        height: "60vh",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=400",
            scrub: true
        }
    });

    gsap.to(".hero-title", {
        scale: 0.4,
        y: -100,
        opacity: 0.4,
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "+=400",
            scrub: true
        }
    });
};

const initPhilosophyAnimations = () => {
    gsap.from(".philosophy-headline", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".philosophy",
            start: "top 80%"
        }
    });

    gsap.from(".philosophy-text", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1.2,
        scrollTrigger: {
            trigger: ".philosophy-content",
            start: "top 85%"
        }
    });
};

const initOmakaseScroll = () => {
    const wrapper = document.querySelector(".omakase-wrapper");
    const sections = gsap.utils.toArray(".course-panel");

    let scrollTween = gsap.to(sections, {
        x: () => -(wrapper.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
            trigger: ".omakase",
            pin: true,
            scrub: 1,
            end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
            invalidateOnRefresh: true,
        }
    });

    // Image Parallax & Mask Reveals
    sections.forEach(panel => {
        const img = panel.querySelector(".course-image");
        const info = panel.querySelector(".course-info");

        // Reveal mask
        gsap.from(img, {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.2,
            ease: "power3.inOut",
            scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left center+=200",
                toggleActions: "play none none reverse"
            }
        });

        // Image Parallax (moving slightly faster/slower)
        gsap.to(img, {
            x: -150,
            ease: "none",
            scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left right",
                end: "right left",
                scrub: true
            }
        });

        // Info Reveal
        gsap.from(info, {
            x: 50,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: panel,
                containerAnimation: scrollTween,
                start: "left center+=100",
                toggleActions: "play none none reverse"
            }
        });
    });
};

const initChefInteraction = () => {
    const chefImgWrap = document.querySelector(".chef-image-wrap");

    chefImgWrap.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = chefImgWrap.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(".chef-image", {
            rotationY: x * 15,
            rotationX: -y * 15,
            transformPerspective: 1000,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    chefImgWrap.addEventListener("mouseleave", () => {
        gsap.to(".chef-image", {
            rotationY: 0,
            rotationX: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
    });

    gsap.from(".chef-image-wrap", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".chef",
            start: "top 70%"
        }
    });
};

const initSpaceParallax = () => {
    gsap.to(".layer-1", {
        y: -150,
        scrollTrigger: {
            trigger: ".space",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });

    gsap.to(".layer-2", {
        y: -300,
        scrollTrigger: {
            trigger: ".space",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
};

const initReservationReveal = () => {
    gsap.from(".reservation-line", {
        opacity: 0,
        y: 60,
        stagger: 0.3,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".reservation",
            start: "top 70%"
        }
    });
};

// Start
window.addEventListener("DOMContentLoaded", () => {
    initLenis();
    initCursor();
    initLoader();
});
