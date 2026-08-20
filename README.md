# Alex Kaiser Portfolio

Personal portfolio website showcasing my experience across embedded software, firmware, hardware, full-stack development, AI integrations, and engineering tooling.

**Live site:** [www.alexjkaiser.com](https://www.alexjkaiser.com)

## Overview

- Responsive single-page portfolio built with React and TypeScript
- Portfolio content is stored in Supabase so projects, experience, skills, and other information can be managed separately from the frontend
- Interactive AI assistant answers questions about my background, projects, technical skills, and experience, and can evaluate alignment with a pasted job description
- Deployed on Vercel with server-side API routes for the AI assistant

## AI Assistant

The site includes an AI assistant built around the same portfolio data shown throughout the application. Portfolio content is loaded from Supabase and assembled into the assistant context so it can answer questions about my experience, projects, skills, and background.

The assistant streams responses through an API route deployed on Vercel using OpenAI and the Vercel AI SDK. Upstash Redis provides rate limiting for the public chat endpoint.

## Tech Stack

| Area | Technology |
| --- | --- |
| Frontend | React 19, TypeScript, Vite |
| Styling and UI | Tailwind CSS, Framer Motion, Lucide React |
| Data | Supabase, PostgreSQL |
| AI | OpenAI, Vercel AI SDK |
| Backend | Vercel Functions, Edge Runtime |
| Rate limiting | Upstash Redis |
| Hosting | Vercel |
| Contact | EmailJS |

## Local Development

Install dependencies and start the Vite development server:

```bash
npm install
npm run dev
```

The project also includes scripts for production builds and type checking:

```bash
npm run build
npm run typecheck
```

## Environment Variables

The application uses the following environment variables:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
OPENAI_API_KEY
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

The `VITE_` variables are available to the frontend. OpenAI and Upstash credentials are server-side only and should never be exposed in client code.

## Deployment

The application is deployed on Vercel and available at [www.alexjkaiser.com](https://www.alexjkaiser.com). Portfolio content and production data are managed through Supabase.
