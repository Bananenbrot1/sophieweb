# Sophie Mesenich – Website

TanStack Start app for the midwife practice site, with miya portal registration via a server function.

## Setup

```bash
npm install
cp .env.example .env.local
# Fill in MIYA_KURS_ID and Lettermint vars from .env.example
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable                   | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `MIYA_KURS_ID`             | Course id for the miya course portal (server-only)       |
| `MIYA_PORTAL_SLUG`         | Portal slug (defaults to `hebamme-sophie`)               |
| `LETTERMINT_PROJECT_TOKEN` | Lettermint project API token (server-only)               |
| `LETTERMINT_FROM`          | Verified sender, e.g. `Name <noreply@yourdomain.com>`    |
| `LETTERMINT_NOTIFY_TO`     | Your inbox for new Anmeldung notifications               |

Set the same values in the Vercel project under **Settings → Environment Variables**. Never commit real credentials.

## Deploy (Vercel)

The project already includes the Nitro Vite plugin. Import the GitHub repo in Vercel; the TanStack Start framework preset should be detected. Add the env vars above, then deploy.

## Scripts

- `npm run dev` – local development
- `npm run build` – production build
- `npm run preview` – preview production build
