
# pn-landing-page

A modern, responsive landing page template built with Next.js 15.3.5, TypeScript, Tailwind CSS, and Radix UI.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
   - [Development](#development)  
   - [Production Build](#production-build)  
5. [Project Structure](#project-structure)  
6. [Available Scripts](#available-scripts)  
7. [Customization](#customization)  
8. [Contributing](#contributing)  
9. [License](#license)  
10. [Author](#author)  

---

## Overview

This repository contains **pn-landing-page**, a clean, component-driven landing page scaffold built on Next.js 15.3.5 and React 19. It’s designed to be a flexible starting point for marketing sites, SaaS products, and small web apps. The page is divided into seven main sections—Hero, Pain Points, Integration, Features, Comparison, Pricing, and FAQ—each implemented as a standalone React component.

---

## Features

- **Hero Section** with title, subtitle, and call-to-action  
- **Pain Points Section** outlining user challenges  
- **Integration Section** showcasing supported platforms  
- **Feature Section** highlighting core functionalities  
- **Comparison Section** to compare plans or competitors  
- **Pricing Section** with tiered pricing cards  
- **FAQ Section** with an accordion for common questions  
- Mobile-first, fully responsive design  
- Dark and light mode support via Tailwind CSS  
- Smooth entrance animations using Framer Motion  
- Accessible UI primitives from Radix (Accordion, Tabs)  
- SVG icon components (Tabler & Lucide) for crisp visuals  

---

## Tech Stack

- **Framework**: [Next.js 15.3.5](https://nextjs.org)  
- **Language**: TypeScript  
- **Styling**: Tailwind CSS, PostCSS, Autoprefixer  
- **UI Primitives**: Radix UI (Accordion, Tabs)  
- **Icons**: @tabler/icons-react & lucide-react  
- **Utilities**: clsx, tailwind-merge  
- **Animations**: motion (Framer Motion core)  
- **Linting & Formatting**: ESLint, Next.js ESLint config  

---

## Getting Started

### Prerequisites

- **Node.js** v18 or newer  
- **npm** v8 or newer (or Yarn v1.22+)  

### Installation

```bash
# Clone the repository
git clone https://github.com/aymankhan89/pn-landing-page.git
cd pn-landing-page

# Install dependencies
npm install
# or
yarn install
````

### Development

Start the Next.js development server with Turbopack:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page. Changes to `src/app/**` will hot-reload automatically.

### Production Build

Generate an optimized production build and start the server:

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

---

## Project Structure

```
pn-landing-page/
├── public/                   # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main entry point (imports all sections)
│   │   └── sections/
│   │       ├── HeroSection.tsx
│   │       ├── PainPointSection.tsx
│   │       ├── IntegrationSection.tsx
│   │       ├── FeatureSection.tsx
│   │       ├── ComparisonSection.tsx
│   │       ├── PricingSection.tsx
│   │       └── FaqSection.tsx
│   ├── components/           # Reusable custom components (animations, layout helpers)
│   └── assets/
│       ├── svgs/             # SVG icon components
│       └── pngs/             # PNG images (e.g., Hero illustration)
├── .eslintrc                 # ESLint configuration
├── next.config.ts            # Next.js configuration (currently default)
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.mjs        # PostCSS configuration
├── package.json
└── tsconfig.json
```
## Customization

* **Content**: Edit copy and images in each section under `src/app/sections/`.
* **Styling**: Tweak Tailwind’s theme and variants in `tailwind.config.js`.
* **Animations**: Adjust or add new animations in `src/components/` using Framer Motion.
* **SEO & Metadata**: Extend `src/app/head.tsx` (or `_document.tsx`) for custom meta tags.

---

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

Please adhere to the existing code style and run `npm run lint` before submitting.

---

## License

This project is currently marked as **private** (`"private": true` in `package.json`).
Please contact the author if you’d like to use or contribute under a specific license.

---

## Author

**Ayman Khan**
– GitHub: [@aymankhan89](https://github.com/aymankhan89)
– Twitter: [@aymankhan89](https://twitter.com/aymankhan89)




