# Saba Studio Portfolio

A bilingual (Arabic/English) portfolio website for Saba Studio and their upcoming game "The Invisible Soldier". Built with React, Vite, and Tailwind CSS.

## Features

- **Responsive Design:** Fully responsive layout for all screen sizes.
- **Bilingual Support:** Arabic (RTL) and English (LTR) support using `i18next`.
- **Animations:** Smooth animations powered by GSAP and CSS transitions.
- **Immersive Hero:** Cinematic hero section with custom artwork and gradients.
- **Team Showcase:** Dynamic team grid with hover effects and modern card design.

## Technical Implementation

### Responsive Navigation Drawer
Designed and implemented a responsive mobile navigation drawer to enhance user experience on mobile devices.

- **Behavior:** When screen width reaches mobile size, the horizontal nav bar is hidden via Media Queries, replaced by a Hamburger Menu.
- **Animation:** The side menu slides in smoothly from the side using `transform: translateX` and CSS transitions (`transition-transform`, `will-change`).
- **Interaction:**
    - Controlled via JavaScript by toggling a dynamic class (`isOpen`).
    - Fixed positioning with a `z-index` overlay.
    - Backdrop blur effect (`backdrop-blur`) that fades in/out.
- **Performance:** Optimized for high performance (60fps) by animating transform properties instead of layout properties.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animation:** GSAP + CSS Modules
- **I18n:** react-i18next

## Getting Started

1.  Clone the repository.
2.  Run `npm install`.
3.  Run `npm run dev` to start the development server.
