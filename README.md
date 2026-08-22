# Sukumar Elley — Production Portfolio

Production Next.js portfolio for Data, AI and software engineering work.

## Stack

- Next.js App Router / React
- TypeScript
- Server-rendered GitHub repository integration
- GitHub GraphQL contribution calendar
- Resend contact backend
- Zod validation
- Responsive custom CSS

## Features

- minimal visual direction, implemented from scratch
- Live featured repositories and repository metadata from `Sukumar-Elley`
- Real resume PDF download
- Animated portfolio statistics
- GitHub contribution calendar
- Dark/light mode
- Responsive design
- Contact form with server-side validation and email delivery
- Honeypot bot protection
- SEO metadata

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Set `GITHUB_TOKEN`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL`.

The GitHub token is used only server-side for the GraphQL contribution calendar. Never expose it as a `NEXT_PUBLIC_` variable.

## Deployment

Deploy to Vercel or another Next.js server runtime. GitHub Pages alone cannot execute the contact Route Handler or server-side GitHub GraphQL integration.

## Resume

`public/Sukumar-Elley-Resume.pdf` is the supplied resume used by the Resume button.

## Source repositories used in the portfolio

- Data-Leakage-Detection-System
- Event-driven-agentic-platform-
- ecommerce-retention
