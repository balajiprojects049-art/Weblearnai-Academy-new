# Lumina Education Platform - Design & Architecture

## 1. Project Overview
A premium, high-conversion education platform built with Next.js 15 (App Router), React 19, and Tailwind CSS v4. The design focuses on trust, clarity, and ease of use, targeting students and professionals.

## 2. Tech Stack Decisions
- **Next.js (App Router)**: Chosen for superior SEO capabilities (critical for an ed-tech site), server-side rendering performance, and file-based routing.
- **Tailwind CSS v4**: Utilized the latest version for improved performance and a cleaner configuration (CSS-first configuration via `globals.css`).
- **Framer Motion**: Integrated for subtle, professional entrance animations to make the site feel "alive" without being distracting.
- **React Hook Form**: Used for robust form state management and validation (Lead Capture, Contact).
- **Lucide React**: Modern, consistent icon set.

## 3. Design System (Premium Aesthetics)
- **Typography**:
  - **Headings**: `Poppins` - Geometric, modern, and friendly.
  - **Body**: `Inter` - Highly legible, standard for modern web interfaces.
- **Color Palette**:
  - **Primary**: Royal Blue (`hsl(221.2 83.2% 53.3%)`) - Represents trust, intelligence, and authority.
  - **Secondary**: Amber/Gold - Used for accents (Stars, Warnings, Highlights) to represent success.
  - **Backgrounds**: Clean white and soft slate grays to maintain a "clean" look.
  - **Gradients**: Subtle gradients used on cards and hero sections to add depth ensuring it doesn't look flat/cheap.

## 4. Component Breakdown & folder Structure
```
src/
├── app/                  # Next.js App Router
│   ├── about/            # About Page
│   ├── books/            # Book Store Mock
│   ├── contact/          # Contact Page
│   ├── courses/          # Course Listing & Dynamic Detail [slug]
│   ├── globals.css       # Global styles & Tailwind Theme
│   ├── layout.tsx        # Root layout (Navbar/Footer)
│   └── page.tsx          # Home Page
├── components/
│   ├── forms/            # Complex forms (ApplyForm)
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Landing page sections (Hero, Featured, etc.)
│   └── ui/               # Reusable primitives (Button, Card, Input...)
├── data/                 # Mock data (courses, books)
└── lib/                  # Utilities (cn, etc.)
```

## 5. UI/UX Logic
- **Mobile-First**: The Navbar collapses into a hamburger menu. Grid layouts (Courses, Testimonials) adapt from 1 column (mobile) to 4 columns (desktop).
- **Lead Capture**: 
  - Placed visibly on the Home page (CTA).
  - Embedded as a "sticky" element on Course Detail pages (high conversion).
  - Uses `react-hook-form` for instant validation feedback.
- **Book Store**: Simple, friction-free flow. Clicking "Buy" simulates a process and immediately unlocks the "Download" button, gratifying the user instantly (mock).

## 6. Future Scalability
- **Data Fetching**: Currently uses static mock data (`src/data`). This can be easily replaced with `fetch()` calls to a CMS (Strapi, Sanity) or backend API in `page.tsx` (Server Components).
- **Payments**: The `handleBuy` function in `books/page.tsx` is a placeholder. It can be replaced with a Stripe Checkout session redirect.
- **Auth**: Buttons for "Login" exist but are static. NextAuth.js can be integrated easily.
