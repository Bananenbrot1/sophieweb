# Sophie Mesenich – Website

TanStack Start app for the midwife practice site, with miya portal registration via a server function.

## Setup

```bash
npm install
cp .env.example .env.local
# Fill in MIYA_TOKEN, MIYA_USER, and MIYA_KURS_ID from the miya account
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

| Variable      | Description                                      |
| ------------- | ------------------------------------------------ |
| `MIYA_TOKEN`  | API token for `login.miya360.de` (server-only)   |
| `MIYA_USER`   | miya user id (server-only)                       |
| `MIYA_KURS_ID`| Course id for `portal/kursanmeldung` (server-only)|

Set the same values in the Vercel project under **Settings → Environment Variables**. Never commit real credentials.

## Deploy (Vercel)

The project already includes the Nitro Vite plugin. Import the GitHub repo in Vercel; the TanStack Start framework preset should be detected. Add `MIYA_TOKEN`, `MIYA_USER`, and `MIYA_KURS_ID`, then deploy.

## Scripts

- `npm run dev` – local development
- `npm run build` – production build
- `npm run preview` – preview production build
