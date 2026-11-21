# VELORA BEAUTY — Polaroid Rail E-Commerce Landing Page

> **"Beauty for every shade"** — A luxury, editorial e-commerce experience crafted for Nigerian makeup lovers and global beauty icons.

---

## Overview

VELORA BEAUTY is a premium, fully-responsive beauty e-commerce web application inspired by high-fashion editorial campaigns and modern beauty brands. Featuring high-pigment photography, Nigerian Naira (`₦`) localization, and custom interaction design.

### Key Highlights

- **Floating Polaroid Photo Rail**: Seamless 60-second infinite conveyor belt featuring 9 editorial beauty portraits. Hover interactions straighten, enlarge, and convert imagery to black and white while pausing the conveyor track.
- **Fixed Multi-Tier Header**:
  - Dark grey shipping ticker with continuous shimmer effect (*"Free standard shipping in Nigeria on orders over ₦100,000"*).
  - Black announcement bar rotating 3 promotional messages every 4.5 seconds.
  - 64px crisp white navigation bar with logo, category links, search trigger, `"Hi, Tega"` account indicator, wishlist badge, and animated shopping bag counter.
- **Product Collections**:
  - *Velora’s Most Wanted*: 5 flagship items with interactive color swatches, dynamic pricing, and wishlist toggles.
  - *New + Holiday Gifts*: Holiday drops featuring previous price strikethroughs in brand red.
- **Editorial Features & Campaign Banner**:
  - Feature A: *"Shine. Heat. Result."* with smooth left-to-right clip-path reveal and scroll parallax.
  - Feature B: *"Velora is about beauty for all"* with high-contrast editorial photography.
  - 620px Full-Width Campaign Banner: *"YOUR GLOW, YOUR RULES"* with dark gradient overlay and smooth viewport zoom-out effect.
- **Brand Red Footer & Giant Wordmark**:
  - Signature `#D8112B` background with 4 link columns and validated newsletter submission.
  - Giant `VELORA` wordmark in `Unbounded ExtraBold` (~22vw) with letter-by-letter rising entrance, continuous subtle wave animation, and interactive hover tilt turning black.
- **Global Micro-Interactions**:
  - Custom circular cursor with difference blend (`mix-blend-mode: difference`).
  - 9-particle click sparkles in red, pink, and black radiating upon every pointer click.
  - Full-featured shopping bag slide-over drawer with interactive ₦100,000 free shipping progress tracker.
  - Instant live product search modal and wishlist drawer.

---

## Design System

| Element | Specification |
| :--- | :--- |
| **Primary Black** | `#111111` |
| **Pure White** | `#FFFFFF` |
| **Soft Grey** | `#F5F5F5` |
| **Product Grey** | `#D9D9D9` |
| **Borders** | `#E4E4E4` |
| **Brand Red** | `#D8112B` |
| **Accent Pink** | `#FF5FA6` |
| **Shipping Announcement** | `#3B3F44` |
| **Headings & Logo** | `Unbounded` (ExtraBold 800/900) |
| **Body Typography** | `Bricolage Grotesque` |
| **Handwritten Accent** | `Permanent Marker` |
| **Buttons** | Sharp square-edged (`border-radius: 0px`) |

---

## Project Structure

```
VELORA BEAUTY/
├── index.html        # Semantic HTML5 markup, SVG icons, and modal structures
├── styles.css        # Responsive styling, custom design system, and keyframe animations
├── app.js            # Reactive UI state: cart, wishlist, search, cursor, and physics
├── .gitignore        # Git exclusion rules
└── README.md         # Project documentation and specifications
```

---

## Local Development

You can run this project with any local static HTTP server:

```bash
# Using Python
python -m http.server 3000

# Using Node.js npx serve
npx serve -l 3000
```

Open `http://localhost:3000` in your web browser.

---

## License

© 2026 Velora Beauty. All rights reserved. · Nigeria · English
