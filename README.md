# NEOCS Redesign

Premium landing page for the Nigeria Equipment Ownership Cooperative Society (NEOCS).

This project is a public-facing marketing site built to present NEOCS as a credible, modern cooperative focused on collective ownership of productive assets, enterprise growth, and community wealth creation.

## Tech Stack

- React 19
- TypeScript
- Vite
- TanStack Start
- TanStack Router
- Tailwind CSS v4
- Nitro

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app in your browser at the local address shown in the terminal.

## Available Scripts

- `npm run dev` - start the development server
- `npm run build` - create a production build
- `npm run build:dev` - create a development-mode build
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run format` - format the code with Prettier

## Project Structure

- `src/routes` - route definitions and page composition
- `src/components/neocs` - NEOCS landing page sections
- `src/components/ui` - reusable UI primitives
- `src/styles.css` - global styling and theme tokens
- `public` - static assets such as the logo and robots file

## Notes

- This repository is focused on the landing page experience only.
- There is no dashboard, authentication flow, or payment logic in this build.
- The build output is generated through Vite and TanStack Start.
