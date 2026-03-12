PROJECT CONTEXT

Design and build a frontend-only, award-winning level website for a fictional Michelin 2-star, reservation-only Japanese seafood and sushi restaurant named:

UMIZOI (海沿い) — meaning “by the sea”

The restaurant specializes in:

Edomae-style sushi

Seasonal seafood tasting menus

Omakase experiences

Rare imported fish

Minimalist Japanese culinary artistry

This is a $10,000 premium website build — it must feel:

Cinematic

Intentional

Slow luxury

Architectural

Immersive

Museum-grade minimal

This is not a template website.
This should feel like a hybrid between:

A high-fashion campaign

An Awwwards Site of the Day winner

A Japanese design studio portfolio

A Michelin guide editorial

TECH STACK REQUIREMENTS

Frontend only.

Use:

Vanilla HTML / CSS / JS

GSAP (core)

ScrollTrigger

ScrollSmoother

SplitText (or text splitting logic)

Framer Motion (if React implementation is chosen)

Subtle 3D transforms if necessary (CSS 3D or lightweight WebGL)

Avoid:

Overly heavy libraries

UI frameworks that look generic

Template-style layouts

Performance must remain smooth at 60fps.

DESIGN DIRECTION
Visual Tone

Deep charcoal / near black background (#0b0d0f)

Soft ivory typography

Muted ocean blues

Occasional brushed silver accents

Negative space heavy

Asymmetrical layout

Japanese editorial grid influence

Typography

Elegant serif for headings (Japanese-inspired high-fashion style)

Minimal grotesk sans-serif for body text

Large scale typography

Wide letter spacing

Vertical Japanese characters occasionally used decoratively

CORE EXPERIENCE STRUCTURE
1️⃣ HERO SECTION — CINEMATIC ENTRY

Full screen.

Background:

Ultra-slow motion macro footage of sushi preparation
OR

Dark ocean surface moving subtly at night

Overlay:
UMIZOI 海沿い

Animation Requirements:

Letters fade in individually using GSAP SplitText

Subtle upward motion (y: 40 → 0)

Slight blur to crisp reveal

ScrollSmoother active immediately

Ambient sound optional (ocean waves very subtle)

On scroll:

Hero compresses vertically

Title scales down and locks into top-left corner

Background darkens

This transition must feel architectural.

2️⃣ PHILOSOPHY SECTION — “THE SEA DECIDES”

Minimal layout. Large negative space.

Headline:
“THE SEA DECIDES.”

Subtext describing:

Seasonal sourcing

Tsukiji heritage

Chef’s intuition

Morning fish auctions

Animation:

Text split line-by-line

Lines reveal on scroll using stagger

Paragraphs fade in from opacity 0 → 1

Subtle parallax between text and background

Background:

Static textured black OR subtle moving grain

3️⃣ OMAKASE EXPERIENCE — IMMERSIVE SCROLL STORY

Horizontal scrolling section using GSAP ScrollTrigger.

As user scrolls:

Content moves horizontally

Each panel represents a course:

Hokkaido uni

Bluefin otoro

Live scallop

Aged soy-cured tuna

Each course panel includes:

Large macro photography

Minimal description

Floating Japanese calligraphy overlay

Animation:

Image mask reveals (clip-path animation)

Parallax shift on images

Text slides up

Slight 3D rotation on entry

This section should feel editorial and immersive.

4️⃣ CHEF SECTION — AUTHORITY & CRAFT

Dark background.
Portrait of fictional head chef.

Animation:

Image reveals from black via mask

Name fades in slowly

Bio text appears via stagger

Add subtle:

3D hover tilt on portrait

Light shimmer on knife blade (very subtle GSAP timeline loop)

5️⃣ SPACE & INTERIOR — ARCHITECTURAL MINIMALISM

Vertical scroll with layered depth.

Use:

Slow parallax layers

Section slide-ins from left and right

Images overlapping slightly outside grid

Soft shadow overlays

Animation timing must be slow and refined.

No fast transitions.

6️⃣ RESERVATION ONLY SECTION — DRAMATIC EMPHASIS

Full viewport dark screen.

Text center:

“RESERVATION ONLY.”
“12 SEATS.”
“OMAKASE BEGINS AT 7PM.”

Animation:

Words fade in sequentially

Each line slight scale-up

Background darkens further

Button:
“REQUEST A SEAT”

Button animation:

Underline expands on hover

Subtle glow

Micro-interaction bounce (0.98 → 1 scale)

7️⃣ FOOTER — QUIET EXIT

Minimal footer:

Address

Hours

Instagram link

Reservation link

Fade everything in with long ease-out timing.

ANIMATION PHILOSOPHY

Everything must feel:

Slow

Intentional

Luxurious

Breathing

Avoid:

Over-animation

Bounce effects

Loud motion

Startup-tech aesthetics

Use:

Ease: power2.out / power3.out

Staggered reveals

Opacity and transform transitions

Clip-path mask reveals

Scroll-driven storytelling

MICRO-DETAIL REQUIREMENTS

Custom cursor (small circle, subtle expand on hover)

Smooth scrolling via ScrollSmoother

Grain overlay texture

Slight vignette

Loading intro animation (logo reveal before site unlocks)

Section transitions that feel cinematic

Responsive but maintain aesthetic hierarchy

PERFORMANCE REQUIREMENTS

Lazy load images

Optimize video background

GPU-accelerated transforms only

Avoid layout thrashing

Maintain Lighthouse score above 85

EMOTIONAL TARGET

The user should feel:

“This restaurant is impossible to get into.”

“This feels like art, not a restaurant website.”

“This is Michelin-level precision.”

OUTPUT EXPECTATION

Generate:

Full layout structure

Component breakdown

GSAP timeline architecture

ScrollTrigger logic

Animation sequencing plan

Interaction logic

Section-by-section implementation plan

Suggested file structure

Performance strategy

Suggested assets list

Do NOT generate generic UI.
Do NOT simplify animations.
Do NOT produce template-style design.

This is an award-submission-grade build.