Shringar by Muskan

A premium, cinematic devotional website for Shringar by Muskan — a Shringar Seva service dedicated to beautifully adorning Hindu deity idols, especially Laddu Gopal, with clothing, jewellery, flowers, mukut, peacock feathers and handcrafted devotional details.

The website is designed as a luxury Indian editorial experience rather than a conventional business website. Its visual language combines Indian craftsmanship, devotional warmth, elegant typography, photography, scroll-driven storytelling, parallax and restrained cinematic motion.

✨ Brand

Brand: Shringar by Muskan
Instagram: @shringar_by_muskan

Core idea

Where Devotion Becomes Beauty.

The website should communicate:

Made with hands.
Chosen with heart.
Offered with devotion.

The experience should feel personal, handcrafted, devotional and premium.

🎨 Design Direction

The visual identity is inspired by:

Indian textile craftsmanship

Banarasi/silk fabrics

Peacock feathers

Temple ornamentation

Gold jewelry

Fresh flowers

Lotus motifs

Laddu Gopal Shringar

Indian miniature-painting aesthetics

Rajasthani/Mughal-inspired arches

Handmade parchment/paper

Luxury Indian editorial/fashion campaigns

Primary visual palette

Warm cream / parchment

Deep maroon

Rani pink

Antique gold

Wine / plum

Peacock teal

Charcoal

Avoid overly bright gradients, neon colors, generic SaaS styling and excessive decorative elements.

The website should feel quietly luxurious, not loud.

🧭 Website Story

The page should tell a visual story:

Arrival
   ↓
Curiosity
   ↓
The Art of Shringar
   ↓
Materials & Details
   ↓
The Reveal
   ↓
Kanha
   ↓
Made with Hands
   ↓
Begin Your Seva
   ↓
Contact / Booking

The user should feel that they are witnessing a Shringar being created rather than simply browsing a product/service website.

🖼️ Visual Assets

The project uses devotional photography including:

Laddu Gopal portraits

Shringar flatlays

Silk fabric

Jewelry

Pearls

Peacock feathers

Flowers

Mukut/crowns

Gold ornaments

Decorative Indian elements

Existing project assets should be reused wherever possible.

Expected image directory:

public/images/shringar/

Do not invent image filenames. Inspect the directory before adding new references.

Use next/image for application images.

🏗️ Technology

The project is built with:

Next.js

React

TypeScript

Tailwind CSS

Framer Motion

GSAP / ScrollTrigger where appropriate

Next Image

CSS animations

SVG decorative artwork

Use the animation library already present in the project rather than introducing duplicate animation systems.

📁 General Project Structure

The project follows a component-oriented structure similar to:

app/
components/
  animations/
  booking/
  collections/
  decorative/
  festivals/
  footer/
  hero/
  instagram/
  loader/
  navigation/
  philosophy/
  shringar/
  story/

data/
lib/
public/
  images/
    shringar/

Important areas include:

components/hero/
components/shringar/
components/booking/
components/decorative/
components/animations/
components/navigation/

Inspect the repository before creating new components. Reuse existing utilities and components wherever practical.

🏠 Hero Experience

The hero is the signature experience of the website.

It should NOT behave like a conventional image slideshow.

The preferred interaction is a scroll-driven cinematic reveal.

The visitor initially sees an almost blank handmade-paper canvas.

As they scroll:

Canvas
  ↓
Silk
  ↓
Flowers
  ↓
Jewelry
  ↓
Peacock Feather
  ↓
Mukut
  ↓
Kanha
  ↓
Complete Shringar

The visitor should gradually discover what is being created.

Hero typography

Primary:

Where Devotion
Becomes Beauty.

Supporting copy can evolve with the scroll sequence:

It begins with a little love.

A touch of colour.

Flowers chosen with care.

Every detail has a place.

A touch of Kanha.

Adorned with devotion.

And then… Kanha.

Final state:

A little more beautiful.
A little more divine.

This is Shringar Seva.

🎞️ Hero Animation Rules

The hero should feel like a painting being created.

Do not implement it as:

image 1 → fade → image 2 → fade → image 3

Instead use layered visual elements.

Conceptually:

HeroArtwork
├── parchment background
├── paper texture
├── silk layer
├── flowers
├── jewelry
├── peacock feather
├── mukut
├── Laddu Gopal
├── warm light
├── gold dust
└── floating petals

Each layer should have its own scroll progress.

Preferred motion:

opacity

transform

clip-path

mask reveal

subtle scale

subtle rotation

blur-to-sharp

parallax

Avoid:

bouncing

excessive rotation

rapid zooms

flashy particle effects

generic carousel transitions

Motion should feel slow, intentional and devotional.

🌸 Floating Petals

Floating petals are part of the visual language.

Use a restrained number of petals.

They should have:

different sizes

different speeds

subtle rotations

varied opacity

depth/parallax

Do not fill the page with particles.

The effect should feel like a few petals drifting through the scene.

Respect:

prefers-reduced-motion

🪷 Shringar Reveal

The Shringar reveal is one of the important visual sections and should be preserved.

The reveal should feel like entering a quiet devotional space.

The section can use:

deep wine/maroon

muted gold

warm cream typography

Indian architectural arch motifs

Laddu Gopal photography

peacock feather

warm diya-like lighting

Avoid a flat dark-brown rectangle.

The transition should feel intentional:

Cream
   ↓
Deep Wine
   ↓
Devotional Portrait
   ↓
Kanha Reveal
   ↓
Cream

🕉️ “And then… Kanha.”

This should be one of the emotional moments of the website.

Use elegant editorial typography:

And then…

followed by:

Kanha.

Use Rani pink or another restrained accent for the italic word.

The deity should reveal gradually rather than simply appearing as a normal image.

✍️ Typography

Typography is a major part of the brand.

The site should combine:

Editorial serif

For:

hero headings

major statements

emotional copy

section titles

Elegant italic/script accent

For selected words such as:

Chosen

heart

devotion

Kanha

Seva

Clean sans-serif

For:

navigation

labels

forms

buttons

supporting information

Do not overuse script fonts.

The typography should resemble a premium Indian fashion/editorial campaign.

💛 Core Brand Statement

A major editorial section should use the following visual concept:

Made with hands.
Chosen with heart.
Offered with devotion.

Suggested treatment:

“Made with hands.” — deep maroon

“Chosen with heart.” — Rani pink, italic

“Offered with devotion.” — deep maroon

Keep generous whitespace.

Add subtle gold ornamentation beneath the statement.

📖 Story Sections

Storytelling should focus on the emotional process behind Shringar.

Possible narrative:

01 — The Beginning

Every Shringar begins with intention.

02 — The Fabric

A colour is chosen to complement the divine form.

03 — The Details

Pearls, jewelry, flowers and ornaments are selected carefully.

04 — The Feather

A touch of Kanha.

05 — The Mukut

The crown completes the expression.

06 — The Reveal

And then… Kanha.

07 — The Seva

Made with hands. Chosen with heart. Offered with devotion.

Do not invent factual business claims that are not provided by the owner.

📸 Gallery

The gallery should feel like a curated editorial collection rather than a generic grid.

Use:

varied image sizes

large hero photographs

editorial whitespace

subtle parallax

hover zoom

elegant captions where useful

Avoid excessive cards and borders.

The photography should remain the focus.

📅 Festivals

The website can highlight seasonal Shringar offerings around festivals such as:

Janmashtami

Radhashtami

Diwali

Holi

other relevant devotional occasions

Festival content should be configurable through the project's content/data layer.

Do not hard-code temporary promotional dates unless they are intentionally part of the current campaign.

📝 Booking / Seva Form

The booking form is a critical business feature.

The form collects:

Name

Mobile Number

Address

Preferred Occasion

Message

The existing form component is:

components/booking/BookingForm.tsx

The form currently contains a placeholder submission function.

The placeholder waits briefly and then displays the success state.

It is NOT a real backend/email integration yet.

Do not claim that submissions are actually delivered until a backend/email service is connected.

⚠️ Booking Form Animation Rule

Critical form content must NEVER depend entirely on an animation observer.

The form fields must always be usable.

Avoid a pattern where:

initial = hidden
animate = hidden

until an IntersectionObserver succeeds.

If JavaScript fails, animation fails or reduced motion is enabled, the fields must still be visible.

Animation is enhancement, not content delivery.

Preferred approach:

render fields visibly

optionally animate them into position

use whileInView or a safe animation

preserve a visible fallback

Required fields must remain:

Name
Mobile
Address
Occasion
Message
Submit

⚠️ React Hydration / fdprocessedid

If DevTools reports a hydration mismatch containing attributes such as:

fdprocessedid="..."

do NOT add those attributes to React code.

These attributes can be injected by browser extensions or form-processing/autofill tools before React hydration.

The application source should not contain them.

Do not:

add fdprocessedid

remove it through React

add suppressHydrationWarning unnecessarily

disable SSR for the booking form

Test with browser extensions disabled if the warning appears.

🦚 Peacock Feather Scroll-to-Top

The website should use a peacock feather instead of a conventional scroll-to-top button.

Component:

ScrollToTopFeather

Behavior:

hidden near the top of the page

appears after approximately 500px of scrolling

fixed near the lower-right corner

subtle and elegant

gently lifts/rotates on hover

clicking it smoothly returns to the top

It should be an accessible button:

<button aria-label="Scroll to top">

Do not use a generic:

↑
TOP

button.

The feather is part of the brand language.

📱 Responsive Design

The experience must work across:

large desktop

laptop

tablet

mobile

Suggested checks:

1440px
1280px
1024px
768px
430px
390px
375px

On mobile, the hero should become a vertical storytelling experience.

Do not force the desktop two-column layout onto small screens.

♿ Accessibility

Respect:

prefers-reduced-motion

Reduced motion should:

remove heavy parallax

reduce transitions

keep content visible

preserve usability

retain smooth navigation where appropriate

All important interactive elements must be keyboard accessible.

Images should have meaningful alt text where appropriate.

Decorative SVGs should use:

aria-hidden="true"

when appropriate.

⚡ Performance

Prioritize:

next/image

appropriate image sizes

lazy loading below-the-fold images

optimized transforms

limited particles

avoiding layout thrashing

GPU-friendly animation properties

Prefer animating:

transform
opacity
clip-path

Avoid excessive animation of:

width
height
top
left

Do not introduce large animation libraries if an existing dependency can handle the requirement.

🧩 Component Principles

Before creating a new component:

Search for an existing component that performs a similar function.

Reuse existing design tokens.

Reuse existing animation utilities.

Keep the architecture understandable.

Avoid unnecessary abstraction.

Do not rewrite the whole application to implement a visual change.

🛠️ Development

Install dependencies:

npm install

or use the package manager already configured in the project.

Start development:

npm run dev

Build:

npm run build

Run production build:

npm run start

Lint if configured:

npm run lint

Use the actual scripts from package.json if they differ.

🔍 Quality Checklist

Before considering a change complete:

Visual

No generic SaaS appearance

Indian visual identity remains consistent

Typography feels editorial

Cream/maroon/gold palette is coherent

Photography is prominent

Decorations remain subtle

No excessive particles

Hero

Not a basic slideshow

Scroll-driven reveal

Layered artwork

Curiosity before deity reveal

Strong final Kanha moment

Mobile-compatible

Shringar

No unattractive flat brown section

Deep wine/maroon treatment

Indian arch/decorative motif

Warm golden lighting

Cinematic reveal

Booking

Name visible

Mobile visible

Address visible

Occasion visible

Message visible

Submit button visible

No opacity/IntersectionObserver bug

Success state works

No fake backend-delivery claims

Navigation

Anchor navigation works

Book Seva works

Contact works

Gallery works

Shringar works

Scroll-to-top feather works

Technical

No TypeScript errors

No hydration errors generated by application code

No console errors

No horizontal overflow

Production build succeeds

Reduced motion works

🌺 Creative Principle

The goal is not to make the website simply “more animated”.

The goal is to make it feel alive.

Every animation should have a purpose.

Every image should contribute to the story.

Every transition should feel intentional.

The site should feel closer to:

an Indian luxury editorial film

than:

a normal service website.

The final emotional impression should be:

Shringar by Muskan turns devotion into beauty.

Current Development Notes

The project is actively being refined.

When modifying the site:

preserve existing good visual work

inspect the current implementation before replacing it

avoid unrelated rewrites

keep business content accurate

use the supplied photography

prioritize graceful degradation

test desktop and mobile after major animation changes


