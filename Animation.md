GSAP TIMELINE ARCHITECTURE (TECHNICAL)

This is the sequencing structure you should implement.

GLOBAL SETUP
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
  wrapper: "#smooth-wrapper",
  content: "#smooth-content",
  smooth: 1.2,
  effects: true
});
LOADER → HERO MASTER TIMELINE
const master = gsap.timeline({
  defaults: { ease: "power3.out" }
});
HERO SPLIT TEXT REVEAL

Split into chars.

const heroSplit = new SplitText(".hero-title", { type: "chars" });

gsap.from(heroSplit.chars, {
  y: 60,
  opacity: 0,
  filter: "blur(8px)",
  stagger: 0.04,
  duration: 1.2
});
HERO COMPRESS ON SCROLL
gsap.to(".hero", {
  height: "60vh",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=400",
    scrub: true
  }
});

Title scale down and pin:

gsap.to(".hero-title", {
  scale: 0.4,
  xPercent: -120,
  yPercent: -120,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "+=400",
    scrub: true
  }
});
PHILOSOPHY TEXT REVEAL

Split by lines:

const lines = new SplitText(".philosophy-text", { type: "lines" });

gsap.from(lines.lines, {
  y: 40,
  opacity: 0,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".philosophy",
    start: "top 80%"
  }
});
HORIZONTAL OMAKASE SCROLL

Pin section.

let sections = gsap.utils.toArray(".course-panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".omakase",
    pin: true,
    scrub: 1,
    end: () => "+=" + document.querySelector(".omakase").offsetWidth
  }
});

Panel image reveal:

gsap.from(".course-image", {
  clipPath: "inset(100% 0% 0% 0%)",
  duration: 1.2,
  scrollTrigger: {
    trigger: ".course-panel",
    start: "left center"
  }
});
CHEF 3D TILT INTERACTION

Mouse-based rotation:

document.querySelector(".chef-image").addEventListener("mousemove", (e) => {
  const x = (e.offsetX / e.target.offsetWidth - 0.5) * 10;
  const y = (e.offsetY / e.target.offsetHeight - 0.5) * 10;

  gsap.to(".chef-image", {
    rotationY: x,
    rotationX: -y,
    transformPerspective: 800,
    duration: 0.5
  });
});
RESERVATION DRAMATIC FADE
gsap.from(".reservation-line", {
  opacity: 0,
  scale: 0.95,
  stagger: 0.3,
  duration: 1.5,
  scrollTrigger: {
    trigger: ".reservation",
    start: "top 70%"
  }
});
3️⃣ LOADING SEQUENCE DESIGN

This must feel luxury, not startup-tech.

Duration: 3.5 – 4 seconds.
SEQUENCE BREAKDOWN
Phase 1 — Black Screen (0.5s)

Pure black. Subtle ocean sound.

Phase 2 — Japanese Characters Fade

“海沿い” appears center.

Opacity 0 → 1

Slight blur → crisp

Slow upward drift (y: 20 → 0)

Phase 3 — English Name Appears Below

UMIZOI fades in letter-by-letter.

Phase 4 — Thin Horizontal Line Expands

Line grows from center outward.

Phase 5 — Background Ocean Texture Emerges

Opacity fade-in behind logo.

Phase 6 — Entire Loader Fades to Reveal Hero

Hero content is already rendered underneath.

Loader Code Structure
const loaderTL = gsap.timeline();

loaderTL
  .from(".jp-logo", { opacity: 0, y: 20, filter: "blur(6px)", duration: 1.2 })
  .from(".en-logo span", { opacity: 0, y: 10, stagger: 0.05 }, "-=0.8")
  .from(".loader-line", { scaleX: 0, transformOrigin: "center" })
  .to(".loader", { opacity: 0, duration: 1 });